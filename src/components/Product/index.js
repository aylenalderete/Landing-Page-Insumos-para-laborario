import React from 'react'
import { useState } from "react"
import { getProduct } from "../../database/product";
import Layout from '../GeneralComponents/layout'
import { useHistory, useParams } from 'react-router';
import Slider from 'infinite-react-carousel';
import Loading from '../GeneralComponents/loading';
import { useEffectAsync } from '../../utils/hooks';
import "../../styles/product.scss";


function Product() {
    const [product, setproduct] = useState([])
    const [loading, setLoading] = useState(true)
    const {doc_id} = useParams()
    const history = useHistory()
    
    useEffectAsync(async () => {
        const productSelected = await getProduct(doc_id)
        setproduct(productSelected)
        setLoading(false)
    }, [])

    const handleClick = () => {
        window.location.assign(`https://api.whatsapp.com/send?phone=+5491169684589&text=Hola!%20Estoy%20interesado/a%20en%20este%20producto:%20${product.nombre}`);
    }

    return (
        <Layout headerPosition='relative' > 
            {
                loading ? <Loading />
                :
            <div className="product-container">
                <div className="img-container">
                    <section className='slider'>
                        <Slider className='slider__content'>
                            {product.images.map((el, i) => (
                                <div key={i} className='slider__content--item'>
                                    <img src={el} alt='Foto del producto' />
                                </div>
                            ))}
                        </Slider>
                    </section>
                </div>
                <div className="info-container">
                    <h1 style={{marginBottom:'1%', fontSize: '22px'}}>{product.nombre}</h1>
                    {/* <p style={{marginBottom:'1%'}}>Descripción:</p> */}
                    {/* <p style={{marginTop:'1%', marginBottom:'1%'}}>{product.descripcion}.</p> */}
                    <button className="button" onClick={handleClick}>Consultar ahora</button>
                    <button className="button outline" onClick={() => history.goBack()}>Volver</button>
                </div>
            </div>
            }
        </Layout>
    )
}

export default Product
