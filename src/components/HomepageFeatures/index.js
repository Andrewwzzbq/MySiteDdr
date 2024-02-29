import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const ListaCaracteristicas = [
  {
    title: 'Fácil de Usar',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus fue diseñado desde cero para ser fácilmente instalado y
        utilizado para poner en marcha tu sitio web rápidamente.
      </>
    ),
  },
  {
    title: 'Enfócate en lo Importante',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus te permite centrarte en tus documentos, y nosotros nos
        encargamos de las tareas. Adelante, mueve tus documentos al directorio
        <code>docs</code>.
      </>
    ),
  },
  {
    title: 'Impulsado por React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Amplía o personaliza el diseño de tu sitio web reutilizando React.
        Docusaurus puede extenderse mientras se reutiliza el mismo encabezado y
        pie de página.
      </>
    ),
  },
];

function Caracteristica({Svg, title, description}) {
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

export default function CaracteristicasPaginaPrincipal() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ListaCaracteristicas.map((props, idx) => (
            <Caracteristica key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
