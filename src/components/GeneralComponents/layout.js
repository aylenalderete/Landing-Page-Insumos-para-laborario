import { Link } from 'react-router-dom';
import Icono from '../../assets/image 39.png'
import '../../styles/GeneralComponents/layout.scss'
import WhatsappButton from './whatsappButton';

const Layout = ({
    icon = true,
    searchBar = true,
    nav = true,
    children = <h2>pasale el children gil</h2>,
    headerPosition = 'absolute',
    footer = true
}) => {

    return (
        <main className="layout__main">
            <header className={`layout__header ${headerPosition}`}>
                {icon && (
                    <div className="layout__header--iconContainer">
                        <Link to='/'>
                            <img alt='icon' src={Icono} />
                        </Link>
                    </div>
                )}
            </header>
            <section className='layout__section'>
                {children}
            </section>
            <div>
            <WhatsappButton />
            </div>
            <footer className='layout__footer'>
                    <p style={{color:'white'}}>2021 © Hecho por: <a style={{color:'white', textDecoration: 'underline'}} rel='noreferrer' target="_blank" href='https://www.linkedin.com/in/aylenalderete/'>Aylén Alderete</a> </p>
            </footer>
        </main>
    )
}

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