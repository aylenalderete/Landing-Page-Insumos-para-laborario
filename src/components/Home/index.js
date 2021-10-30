import React, { useRef, useState } from 'react'
import Layout from "../GeneralComponents/layout";
import "../../styles/Home/sliderprueba.scss";
import "../../styles/Home/home.scss";
import ProductsList from "../Products/productsList";
import { Grid } from '../GeneralComponents/layout'

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
                    <div>
                        <h2>Material descartable para laboratorio</h2>
                        <button onClick={swipeToProducts} className="button">Conocé nuestros productos</button>
                    </div>
                </div>
                <div className="homeContainer-img2">
                    <div>
                        <h2>Material descartable para laboratorio</h2>
                        <button onClick={swipeToProducts} className="button">Conocé nuestros productos</button>
                    </div>
                </div>
                <section className="cards-container">
                    <p className="home-title">¿POR QUÉ ELEGIRNOS?</p>
                    <p className="home-title2">Te ofrecemos:</p>
                        <Grid height="13rem" width="18rem">
                            <div className="card-info">
                                <i class="fas fa-vial icon"></i>
                                <p className="card-title">Personalización</p>
                                <p className="card-description">Tubo con logo personalizado en gráfica o etiquetas</p>
                            </div>
                            <div className="card-info">
                                <i class="far fa-star icon"></i>
                                <p className="card-title">Los mejores productos</p>
                                <p className="card-description">Productos nacionales y envases Flow Pack</p>
                            </div>
                            <div className="card-info">
                                <i class="fas fa-shipping-fast icon"></i>
                                <p className="card-title">A todo el país</p>
                                <p className="card-description">Despachamos a todo el país</p>
                            </div>
                            <div className="card-info">
                                <i class="fas fa-comment-dollar icon"></i>
                                <p className="card-title">Entrega sin cargo</p>
                                <p className="card-description">Entrega sin cargo las 24hs (Prov. de Buenos Aires)</p>
                            </div>
                        </Grid>               
                </section>
                <section ref={productsRef} className="cards-container">
                    <p className="home-title2">Productos destacados</p>
                        <ProductsList showAllProducts={showAllProducts} maxItems={getItemQuantity()} />
                        <div>
                            <button onClick={() => {
                                showAllProducts && swipeToProducts() 
                                setShowAllProducts(!showAllProducts)
                            }} className="button">Ver {showAllProducts ? 'menos': 'más'} productos</button>
                        </div>
                </section>
                <section className="cards-container" style={{marginTop:'7rem'}}>
                    <p className="home-title2">Contacto</p>
                    <div className="contact-container">
                        <div className="map-container">
                            <iframe title='googleMap' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52627.49588793379!2d-58.56360943362155!3d-34.47198109581098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb03cd891437f%3A0xab3b49e671350275!2sSan%20Isidro%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1635346559521!5m2!1ses!2sar" width="600" height="450" allowfullscreen="" loading="lazy"></iframe> 
                        </div>
                        <div className="info-container" style={{width: '50%', textAlign: 'center', color: '#646464', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            
                            <p><b>Buenos Aires, San Isidro</b></p>
                            <p>Codigo postal: B1641</p>
                            <p>+54-11-2088-2240</p>
                            <p>(011)6968-4589</p>
                            <p>info@maklab.com.ar</p>
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