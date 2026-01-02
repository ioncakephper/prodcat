# Contributing to Prodcat

First off, thank you for considering contributing to Prodcat! It's people like you that make Prodcat such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, [make one](https://github.com/ioncakephper/prodcat/issues/new)! It's generally best if you get confirmation of your bug or approval for your feature request this way before starting to code.

### Fork & create a branch

If this is something you think you can fix, then [fork Prodcat](https://github.com/ioncakephper/prodcat/fork) and create a branch with a descriptive name.

A good branch name would be (where issue #38 is the ticket you're working on):

```sh
git checkout -b 38-add-awesome-new-feature
```

### Get the style right

Your patch should follow the same conventions & style as the rest of the project.

### Make a Pull Request

At this point, you should switch back to your master branch and make sure it's up to date with Prodcat's master branch:

```sh
git remote add upstream git@github.com:ioncakephper/prodcat.git
git checkout master
git pull upstream master
```

Then update your feature branch from your local copy of master, and push it!

```sh
git checkout 38-add-awesome-new-feature
git rebase master
git push --force-with-lease origin 38-add-awesome-new-feature
```

Finally, go to GitHub and [make a Pull Request](https://github.com/ioncakephper/prodcat/compare)

### Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing and merging, check out [this guide](https://www.atlassian.com/git/tutorials/merging-vs-rebasing).

We prefer rebasing over merging so that your commit history is easier to read.

After you've rebased your branch, you'll need to force push the changes to your remote branch.

## How to report a bug

When you're creating a bug report, please include as many details as possible. Fill out the issue template to the best of your ability.

## How to suggest a feature or enhancement

If you have an idea for a new feature or an enhancement to an existing one, please open an issue and describe your idea.

We're always looking for new ideas to make Prodcat better!
