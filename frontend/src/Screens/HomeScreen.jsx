import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Row,Col} from 'react-bootstrap'
import Products from '../Components/Products'
import {listProducts} from '../Actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'
const HomeScreen = () => {

    const dispatch=useDispatch()

    const productList=useSelector(state=>state.productList)//grab product data from state
    const {loading,error,products}=productList

    useEffect(()=>{
     dispatch(listProducts())  //firing of the action to get the products and send it through the reducer down into the state
    },[dispatch])  //to avoid warning in console

    return (
        <>
        {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(
        <Row>
                {products.map( el=>(
                    <Col key={el.id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={el}/>
                    </Col>
                ))}
        </Row>
        )}
        </>
    )
}

export default HomeScreen
