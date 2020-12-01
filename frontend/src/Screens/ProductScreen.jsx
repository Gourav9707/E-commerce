import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Card, Image, ListGroup, Button, ListGroupItem} from 'react-bootstrap'
import Rating from '../Components/Rating'
import axios from 'axios'

const ProductScreen = ({match}) => {

    const [product,setProduct]=useState([]);

    useEffect(()=>{
        const fetchdata=async()=>{
            const {data}= await axios.get(`/api/products/${match.params.id}`)
            setProduct(data)
        }
        fetchdata()
    },[])

    // const product=products.find(p=>p.id===match.params.id)
    return (
        <>
          <Link className='btn btn-light my-3' to='/'>Go Back</Link>
          <Row>
              <Col md={6}>
                  <Image src={product.image} alt={product.name} fluid/>
              </Col>
              <Col md={3}>
                  <ListGroup variant='flush'>
                      <ListGroup.Item>
                          <h3>{product.name}</h3>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Price: ${product.price}
                      </ListGroup.Item>
                      <ListGroup.Item>
                          Description: {product.des}
                      </ListGroup.Item>
                  </ListGroup>
              </Col>
              <Col md={3}>
                  <Card>
                      <ListGroup variant='flush'>

                          <ListGroup.Item>
                              <Row>
                                  <Col>Price:</Col>
                                  <Col>
                                      <strong>${product.price}</strong>
                                  </Col>
                              </Row>
                          </ListGroup.Item>

                          <ListGroup.Item>
                              <Row>
                                  <Col>Status:</Col>
                                  <Col>
                                      {product.countInstock>0?'In Stock':'Out Of stock'}
                                  </Col>
                              </Row>
                          </ListGroup.Item>

                          <ListGroup.Item>
                              <Button className='btn-block' type='button' disabled={product.countInstock===0}>
                                  Add to Cart
                              </Button>
                          </ListGroup.Item>

                      </ListGroup>
                  </Card>
              </Col>
          </Row> 
        </>
    )
}

export default ProductScreen