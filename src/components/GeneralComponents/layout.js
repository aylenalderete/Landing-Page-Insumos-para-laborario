import { Link } from 'react-router-dom';
import Icono from '../../assets/image 39.png'
import '../../styles/GeneralComponents/layout.scss'
import { useState } from 'react';
import WhatsappButton from './whatsappButton';
import { useHistory } from "react-router";
import { useSelector } from 'react-redux';


const Layout = ({
    icon = true,
    searchBar = true,
    nav = true,
    children = <h2>pasale el children gil</h2>,
    footer = true
}) => {
    const {isLogged} = useSelector(state => state.user)
    const [inputValue, setInputValue] = useState('')
    const [burgerStatus, setBurgerStatus] = useState({active: false, open: false})    
    const history = useHistory()


    const handleKeyDown = ({ keyCode }) => {
        if (keyCode !== 13) return null;
        else {     
            history.push(`/productos?search=${inputValue}`)
        }
    };

    const burgerOpen = (open) => {
        if(open){
            setBurgerStatus({...burgerStatus, active: true})
            setTimeout(() => setBurgerStatus({active: true, open: true}), 100)
        } else {
            setBurgerStatus({...burgerStatus, open: false})
            setTimeout(() => setBurgerStatus({open: false, active: false}), 100)
        }
    }

    return (
        <main className="layout__main">
            <header className='layout__header'>
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
                    <p style={{color:'white'}}>2021 © Hecho por: </p>
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