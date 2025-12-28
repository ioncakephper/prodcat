#!/usr/bin/env bash
set -euo pipefail

# Close all open Dependabot PRs in ioncakephper/prodcat and delete their branches when possible.
# Usage:
#   ./scripts/close-dependabot-prs.sh --dry-run   # list PRs that would be affected
#   ./scripts/close-dependabot-prs.sh             # actually close PRs
# Requirements:
#   - GitHub CLI (gh) authenticated (recommended) OR
#   - GITHUB_TOKEN environment variable with repo scope, plus curl and jq

repo="ioncakephper/prodcat"

dry_run=0
if [ "${1:-}" = "--dry-run" ]; then
  dry_run=1
fi

if command -v gh >/dev/null 2>&1; then
  if [ "$dry_run" -eq 1 ]; then
    echo "Dry run: listing open Dependabot PRs for $repo"
    gh pr list --repo "$repo" --author "dependabot[bot]" --state open --json number,title,headRefName,url
    exit 0
  fi

  mapfile -t prs < <(gh pr list --repo "$repo" --author "dependabot[bot]" --state open --json number,headRefName --jq '.[] | "\(.number)\t\(.headRefName)"')
  if [ "${#prs[@]}" -eq 0 ]; then
    echo "No open Dependabot PRs found in $repo."
    exit 0
  fi

  for entry in "${prs[@]}"; do
    num=$(awk -F"\t" '{print $1}' <<<"$entry")
    branch=$(awk -F"\t" '{print $2}' <<<"$entry")
    echo "Closing PR #$num and attempting to delete branch '$branch'..."
    if gh pr close "$num" --repo "$repo" --delete-branch; then
      echo "Closed PR #$num"
    else
      echo "Warning: failed to delete branch or close PR #$num (may be a fork or protected branch)."
    fi
  done
  exit 0
fi

# Fallback to REST API (curl + jq)
if ! command -v curl >/dev/null 2>&1 || ! command -v jq >/dev/null 2>&1; then
  echo "Either gh CLI is not installed or curl/jq are missing. Install gh or ensure curl and jq are available." >&2
  exit 2
fi

if [ "$dry_run" -eq 1 ]; then
  echo "Dry run (REST): listing open Dependabot PRs for $repo"
  export GITHUB_TOKEN=${GITHUB_TOKEN:-}
  if [ -z "$GITHUB_TOKEN" ]; then
    echo "Set GITHUB_TOKEN environment variable with repo scope to perform the dry run using REST API." >&2
    exit 2
  fi
  curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
    "https://api.github.com/search/issues?q=repo:${repo}+is:pr+is:open+author:dependabot%5Bbot%5D&per_page=100" \
    | jq -r '.items[] | "#\(.number)\t\(.title)\t\(.pull_request.url)"'
  exit 0
fi

export GITHUB_TOKEN=${GITHUB_TOKEN:-}
if [ -z "$GITHUB_TOKEN" ]; then
  echo "Set GITHUB_TOKEN environment variable with repo scope to proceed." >&2
  exit 2
fi

prs=$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
  "https://api.github.com/search/issues?q=repo:${repo}+is:pr+is:open+author:dependabot%5Bbot%5D&per_page=100" \
  | jq -r '.items[].number')

if [ -z "$prs" ]; then
  echo "No open Dependabot PRs found in $repo."
  exit 0
fi

for n in $prs; do
  echo "Closing PR #$n ..."
  curl -s -X PATCH -H "Authorization: Bearer $GITHUB_TOKEN" -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/${repo}/pulls/$n" -d '{"state":"closed"}' >/dev/null

  # get head ref and head repo full name
  read -r head_ref head_repo <<<$(curl -s -H "Authorization: Bearer $GITHUB_TOKEN" \
    "https://api.github.com/repos/${repo}/pulls/$n" | jq -r '.head.ref + " " + .head.repo.full_name')

  if [ "$head_repo" = "${repo}" ]; then
    echo "Deleting branch $head_ref ..."
    curl -s -X DELETE -H "Authorization: Bearer $GITHUB_TOKEN" \
      "https://api.github.com/repos/${repo}/git/refs/heads/${head_ref}" || echo "Branch deletion failed (protected or missing)."
  else
    echo "Branch is on a fork ($head_repo); skipping deletion."
  fi
done

echo "Done."
