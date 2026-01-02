import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

function Donate() {
  return (
    <Layout title="Donate to Prodcat">
      <div className="container margin-vert--lg">
        <div className="text--center">
          <h1>Support Prodcat</h1>
          <p>Your contributions help us continue to develop and maintain Prodcat.</p>
          <p>
            <Link to="/sponsors">View our sponsors</Link>
          </p>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className="card">
              <div className="card__header">
                <h3>One-Time Donation</h3>
              </div>
              <div className="card__body">
                <p>Make a one-time donation to support our work.</p>
                <a href="https://opencollective.com/prodcat" className="button button--primary button--block">Donate Now via Open Collective</a>
              </div>
            </div>
          </div>
          <div className="col col--6">
            <div className="card">
              <div className="card__header">
                <h3>Sponsor on GitHub</h3>
              </div>
              <div className="card__body">
                <p>Sponsor the project on GitHub and get your logo on our README.</p>
                <a href="https://github.com/sponsors/ioncakephper/prodcat" className="button button--primary button--block">Sponsor on GitHub</a>
              </div>
            </div>
          </div>
        </div>
        <div className="margin-vert--lg">
          <h2 className="text--center">Sponsorship Levels</h2>
          <div className="row">
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Bronze</h3>
                  <h4>$100 / month</h4>
                </div>
                <div className="card__body">
                  <ul>
                    <li>Your logo on our README</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Silver</h3>
                  <h4>$500 / month</h4>
                </div>
                <div className="card__body">
                  <ul>
                    <li>Your logo on our README</li>
                    <li>Your logo on our website</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Gold</h3>
                  <h4>$1,000 / month</h4>
                </div>
                <div className="card__body">
                  <ul>
                    <li>Your logo on our README</li>
                    <li>Your logo on our website</li>
                    <li>A blog post announcing your sponsorship</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col--3">
              <div className="card">
                <div className="card__header">
                  <h3>Platinum</h3>
                  <h4>$2,000 / month</h4>
                </div>
                <div className="card__body">
                  <ul>
                    <li>Your logo on our README</li>
                    <li>Your logo on our website</li>
                    <li>A blog post announcing your sponsorship</li>
                    <li>Your logo in our monthly newsletter</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Donate;
