import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {Row,Col} from 'react-bootstrap'
import Products from '../Components/Products'

const HomeScreen = () => {
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            const {data}= await axios.get('/api/products')
            setProducts(data)
        }
        fetchdata()
    },[])

    return (
        <>
        <Row>
                {products.map( el=>(
                    <Col key={el.id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={el}/>
                    </Col>
                ))}
        </Row>
        </>
    )
}

export default HomeScreen
