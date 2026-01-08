import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

const sponsors = {
  platinum: [
    { name: 'Platinum Sponsor 1', logo: 'https://placehold.co/300x150' },
    { name: 'Platinum Sponsor 2', logo: 'https://placehold.co/300x150' },
  ],
  gold: [
    { name: 'Gold Sponsor 1', logo: 'https://placehold.co/250x125' },
    { name: 'Gold Sponsor 2', logo: 'https://placehold.co/250x125' },
    { name: 'Gold Sponsor 3', logo: 'https://placehold.co/250x125' },
  ],
  silver: [
    { name: 'Silver Sponsor 1', logo: 'https://placehold.co/200x100' },
    { name: 'Silver Sponsor 2', logo: 'https://placehold.co/200x100' },
    { name: 'Silver Sponsor 3', logo: 'https://placehold.co/200x100' },
    { name: 'Silver Sponsor 4', logo: 'https://placehold.co/200x100' },
  ],
  bronze: [
    { name: 'Bronze Sponsor 1', logo: 'https://placehold.co/150x75' },
    { name: 'Bronze Sponsor 2', logo: 'https://placehold.co/150x75' },
    { name: 'Bronze Sponsor 3', logo: 'https://placehold.co/150x75' },
    { name: 'Bronze Sponsor 4', logo: 'https://placehold.co/150x75' },
    { name: 'Bronze Sponsor 5', logo: 'https://placehold.co/150x75' },
  ],
};

function Sponsors() {
  return (
    <Layout title="Our Sponsors">
      <div className="container margin-vert--lg">
        <div className="text--center">
          <h1>Our Sponsors</h1>
          <p>We are grateful for the support of our sponsors.</p>
          <p>
            <Link to="/donate">Become a sponsor</Link>
          </p>
        </div>
        <div className="margin-vert--lg">
          <h2 className="text--center">Platinum Sponsors</h2>
          <div className="row">
            {sponsors.platinum.map((sponsor) => (
              <div className="col col--6" key={sponsor.name}>
                <div className="card">
                  <div className="card__image">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="margin-vert--lg">
          <h2 className="text--center">Gold Sponsors</h2>
          <div className="row">
            {sponsors.gold.map((sponsor) => (
              <div className="col col--4" key={sponsor.name}>
                <div className="card">
                  <div className="card__image">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="margin-vert--lg">
          <h2 className="text--center">Silver Sponsors</h2>
          <div className="row">
            {sponsors.silver.map((sponsor) => (
              <div className="col col--3" key={sponsor.name}>
                <div className="card">
                  <div className="card__image">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="margin-vert--lg">
          <h2 className="text--center">Bronze Sponsors</h2>
          <div className="row">
            {sponsors.bronze.map((sponsor) => (
              <div className="col col--2" key={sponsor.name}>
                <div className="card">
                  <div className="card__image">
                    <img src={sponsor.logo} alt={sponsor.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Sponsors;
