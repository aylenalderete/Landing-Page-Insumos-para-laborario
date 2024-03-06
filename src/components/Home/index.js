import React, { useRef, useState } from 'react'
import Layout from "../GeneralComponents/layout";
import "../../styles/Home/sliderprueba.scss";
import "../../styles/Home/home.scss";
import ProductsList from "../Products/productsList";
import { Grid } from '../GeneralComponents/layout'
import banner from '../../assets/homeHeaderBanner.png'
import bannerMobile from '../../assets/homeHeaderBannerMobile.png'

function Home() {
    const [showAllProducts, setShowAllProducts] = useState(false)
    const productsRef = useRef()
    const swipeToProducts = () => {
        window.scrollTo({top: productsRef.current.offsetTop -20,'behavior':'smooth'})
    }
    const getItemQuantity = () => {
        if(showAllProducts) return
        if(window.screen.width < 560){
            return 3
        } else if (window.screen.width < 850){
            return 4
        } else if (window.screen.width <= 1130){
            return 6
        } else if (window.screen.width <= 1420){
            return 8
        } else {
            return 10
        }
    }

    return (
        <Layout>
            <div className="homeContainer">
                <div className="homeContainer-img">
                    <img src={banner} className='desk-banner' />
                    <img src={bannerMobile} className='mobile-banner' />
                    <span onClick={swipeToProducts} className="homeHeader-conoceNuestrosProductosButton">
                        Conocé nuestros productos
                    </span>
                </div>
                {/* <div className="homeContainer-img">
                </div>
                <div className="homeContainer-img2">
                    <span onClick={swipeToProducts} className="homeHeader-conoceNuestrosProductosButton">
                        Conocé nuestros productos
                    </span>
                </div> */}
                <section className="cards-container">
                    <p className="home-title">¿POR QUÉ ELEGIRNOS?</p>
                    <p className="home-title2">Te ofrecemos:</p>
                        <Grid height="13rem" width="22rem">
                            {/* <div className="card-info">
                                <i className="fas fa-vial icon"></i>
                                <p className="card-title">Personalización</p>
                                <p className="card-description">Tubo con logo personalizado en gráfica o etiquetas</p>
                            </div> */}
                            <div className="card-info">
                                <i className="far fa-star icon"></i>
                                <p className="card-title">Los mejores productos</p>
                                <p className="card-description">Productos de fabricación nacional</p>
                            </div>
                            <div className="card-info">
                                <i className="fas fa-shipping-fast icon"></i>
                                <p className="card-title">A todo el país</p>
                                <p className="card-description">Despachamos a todo el país</p>
                            </div>
                            <div className="card-info">
                                <i className="far fa-star icon"></i>
                                <p className="card-title">Calidad Premium</p>
                                <p className="card-description">Insumos descartables para la industria de la mejor calidad</p>
                            </div>
                        </Grid>               
                </section>
                <section ref={productsRef} className="cards-container">
                    <p className="home-title2">Productos destacados</p>
                        <ProductsList showAllProducts={showAllProducts} maxItems={getItemQuantity()} />
                        {!showAllProducts && (
                            <div>
                                <button onClick={() => {
                                    showAllProducts && swipeToProducts() 
                                    setShowAllProducts(!showAllProducts)
                                }} className="button">Ver {showAllProducts ? 'menos': 'más'} productos</button>
                            </div>
                        )}
                </section>
                <section className="cards-container" style={{marginTop:'7rem'}}>
                    <p className="home-title2">Contacto</p>
                    <div className="contact-container">
                        <div className="map-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.4615801860073!2d-58.417663999999995!3d-34.64304419999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccba0af11f9c7%3A0x5e14df660f5fae45!2sCnel.%20Pagola%2C%20C1437%20CABA!5e0!3m2!1ses-419!2sar!4v1704496556083!5m2!1ses-419!2sar" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>                        </div>
                        <div className="info-container" style={{width: '50%', textAlign: 'center', color: '#646464', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <p><b>Cnel. Pagola 4218 CABA</b></p>
                            <p>Codigo postal: C1437</p>
                            <p>(011)6584-1050</p>
                            <p>info@dynlab.com.ar</p>
                            <p><b>Horario:</b> de 9 a 17hs.</p>
                            <p>POR URGENCIAS, ATENCION LAS 24HS.</p>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export default Home