import { Link } from 'react-router-dom';
// import Icono from '../../assets/image 39.png'
import '../../styles/GeneralComponents/layout.scss'
import WhatsappButton from './whatsappButton';
import { Helmet } from 'react-helmet';

const Layout = ({
  icon = true,
  searchBar = true,
  nav = true,
  children = <h2></h2>,
  headerPosition = "absolute",
  footer = true,
}) => {
  return (
    <main className="layout__main">
      <Helmet>
        <title>DYNLAB</title>
        <meta
          name='description'
          content='Venta de artículos e insumos descartables para la industria, la mejor calidad y con envíos a todo el pais'
        />
        <meta
          name='keywords'
          content='dynlab,lab,insumos descartables,placa de petri,frasco recolector,tips,tubo 12x56,tubo criovial,hisopos envasados'
        />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <header className={`layout__header ${headerPosition}`}>
        {/* {icon && (
          <div className="layout__header--iconContainer">
            <Link to="/">
              <img alt="icon" src={Icono} />
            </Link>
          </div>
        )} */}
      </header>
      <section className="layout__section">{children}</section>
      <div>
        <WhatsappButton />
      </div>
      <footer className="layout__footer">
        <p style={{ color: "white" }}>
          2024 © Hecho por:{" "}
          <a
            style={{ color: "white", textDecoration: "underline" }}
            rel="noreferrer"
            target="_blank"
            href="https://puro.software"
          >
            Puro software
          </a>{" "}
        </p>
      </footer>
    </main>
  );
};

export default Layout;

export const Grid = ({
    children,
    height = '18rem',
    width = '17rem',
    align = 'center',
    spacing = 'center',
    className=''
}) => {

    const styles = {
        display: 'grid',
        gridGap: '1rem',
        gap: '1rem',
        width: '100%',
        justifyItems: spacing,
        alignItems: align,
        gridAutoRows: height,
        gridTemplateColumns: `repeat(auto-fill, minmax(min(100%, ${width}), 1fr))`
    }

    return (
        <div className={`grid__container ${className}`} style={styles} >            
            {children}
        </div>
    )
}