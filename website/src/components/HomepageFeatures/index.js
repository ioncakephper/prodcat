import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Automated Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        The <strong>Prodcat CLI</strong> automates the creation of comprehensive product documentation websites. Simply define your products in a JavaScript file, and the CLI generates all necessary pages, categories, and navigation. No more tedious manual Markdown writing!
      </>
    ),
  },
  {
    title: 'Streamline Your Workflow with the CLI',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Let the <strong>Prodcat CLI</strong> handle the repetitive tasks so you can concentrate on what truly matters: your products. Update a single source file, and the CLI regenerates your entire site, ensuring consistency and saving you countless hours.
      </>
    ),
  },
  {
    title: 'Highly Customizable',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Prodcat can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
