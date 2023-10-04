import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Freedom to build what you want',
    Svg: require('@site/static/img/img1.svg').default,
    description: (
      <>
        FreeCAD is an open-source parametric 3D modeler made primarily to 
        design real-life objects of any size. Parametric modeling allows easy
        modification of your design by going back into your model history and 
        changing its parameters.
      </>
    ),
  },
  {
    title: 'Create 3D from 2D & back',
    Svg: require('@site/static/img/img2.svg').default,
    description: (
      <>
        FreeCAD allows you to sketch geometry constrained 2D shapes and use 
        them as a base to build other objects. It contains many components to 
        adjust dimensions or extract design details from 3D models to create 
        high quality production ready drawings.
      </>
    ),
  },
  {
    title: 'Accessible, flexible & integrated',
    Svg: require('@site/static/img/img3.svg').default,
    description: (
      <>
        FreeCAD is a multiplatform, highly customizable and extensible software. 
        It reads and writes to many open file formats such as STEP, IGES, STL, 
        SVG, DXF, OBJ, IFC, DAE and many others, making it possible to seamlessly
        integrate it into your workflow.
      </>
    ),
  },
  {
    title: 'Designed for your needs',
    Svg: require('@site/static/img/img4.svg').default,
    description: (
      <>
        FreeCAD is designed to fit a wide range of uses including product design, 
        mechanical engineering and architecture. Whether you are a hobbyist, 
        a programmer, an experienced CAD user, a student or a teacher, you will 
        feel right at home with FreeCAD.
      </>
    ),
  },
  {
    title: 'and many more great features',
    Svg: require('@site/static/img/img5.svg').default,
    description: (
      <>
        FreeCAD equips you with all the tools for your needs. You get modern 
        Finite Element Analysis (FEA) tools, experimental CFD, dedicated BIM, Geodata 
        or CAM/CNC workbenches, a robot simulation module to study robot movements 
        and many more features. FreeCAD really is a Swiss Army knife of 
        general-purpose engineering toolkits. 

        <a href="https://www.freecad.org/features.php" rel="noreferrer"> Learn more </a>
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col--10 col--15')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
