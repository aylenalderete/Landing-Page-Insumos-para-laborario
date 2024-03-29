import Layout, { Grid } from "../GeneralComponents/layout";
import adminSlider from '../../assets/homeHeaderBanner.png'
import ProductForm from "./createProduct";
import DeleteProduct from "./deleteProduct";
import Card from "../GeneralComponents/card";
import "../../styles/GeneralComponents/card.scss"
import { deleteProduct, getAllProducts } from "../../database/product";
import { useDispatch, useSelector } from "react-redux";
import { SET_ALL_PRODUCTS } from "../../constants/productConstans";
import Swal from "sweetalert2";
import { useHistory, useLocation } from "react-router";
import queryString from 'query-string';
import { SET_LOGED_ACTIVE } from "../../constants/userConstants";
import Login from "./Login";
import { auth } from "../../config/firebase";
import { useEffect } from "react";

const AdminView = () => {
    const {allProducts} = useSelector(state => state.products)
    const {isLogged} = useSelector(state => state.user)
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const {section} = queryString.parse(location.search)

    const loadProducts = async () => {
        Swal.fire('Cargando...')
        Swal.showLoading()
        const prods = await getAllProducts()
        dispatch({type: SET_LOGED_ACTIVE, payload: true})
        dispatch({type: SET_ALL_PRODUCTS, payload: prods})
        Swal.hideLoading()
        Swal.close()
    }

    useEffect(() => {
        auth.onAuthStateChanged((currentUser) => currentUser && loadProducts())
        //eslint-disable-next-line
    }, [])

    const sectionHelper = {
        'create':{label: 'Crear producto', component: <ProductForm />},
        'edit':{label: 'Editar producto', component: <ProductForm/>},
        'delete':{label: 'Borrar producto', component: <DeleteProduct />}
    }

    const editProductHandler = (productData) => {
        history.push(`?section=edit&productId=${productData.doc_id}`)        
    }

    const deleteProductHandler = async ({doc_id, nombre}) => {
        const res = await Swal.fire({
            title: `¿Desea eliminar "${nombre}"?`,
            icon: 'question',
            showCancelButton: true,
            showConfirmButton: true,
            reverseButtons: true
        })
        if(res.isConfirmed){
            Swal.fire('Eliminando')
            Swal.showLoading()
            await deleteProduct(doc_id)
            Swal.hideLoading()
            Swal.close()
        }
    }

    if(!isLogged){
        return <Login />
    }

    return (
        <Layout searchBar={false}>
            <div className="admin-section_image-container">
                <img alt='AdminHeader' className="admin-section_image" src={adminSlider}></img>
                <h1 className="admin-section_title">Panel del administrador</h1>        
            </div>
            {section && (
            <>
            <Grid height="5rem" width="9rem">
                <Card 
                    title = 'Volver'
                    style={{display:'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop:'15px', paddingTop: '1px', paddingBottom: '1px'}}
                    cardAction={() => history.push('?')}
                />
            </Grid>
            </>
            )}
            {section && sectionHelper[section].component}
            {!section && (
                <>
                    <Grid height="12rem" width="20rem">
                        <Card 
                            title = 'Crear producto'
                            style={{display:'flex', flexDirection: 'row'}}
                            cardAction={() =>  history.push(`?section=create`)}
                        />          
                    </Grid>
                    <div>
                        <h2 style={{textAlign: 'center', color:'rgb(44, 44, 44)'}}>Mis productos</h2>
                    </div>
                    <Grid height="26rem">
                        {allProducts.map((product) => (
                            <Card 
                                title={product.nombre}
                                img = {product.images[0]}
                                // price = {product.variants[0].price}
                                buttons = {[
                                    {label: 'Editar', action: () => editProductHandler(product)},
                                    {label: 'Eliminar', action: () => deleteProductHandler(product)},
                                ]}
                            />
                        ))}
                    </Grid>
                </>

            )}
        </Layout>
    )
}

export default AdminView;