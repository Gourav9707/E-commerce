import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Card, Image, ListGroup, Button, ListGroupItem} from 'react-bootstrap'
import {useDispatch,useSelector} from 'react-redux'
import {listProductDetails} from '../Actions/productActions'
import Loader from '../Components/Loader'
import Message from '../Components/Message'

const ProductScreen = ({match}) => {

    const dispatch=useDispatch()

    const productDetails=useSelector(state=>state.productDetails)//grab product data from state
    const {loading,error,product}=productDetails

    useEffect(()=>{
     dispatch(listProductDetails(match.params.id))
    },[dispatch,match])

    // const product=products.find(p=>p.id===match.params.id)
    return (
        <>
        
          <Link className='btn btn-light my-3' to='/'>Go Back</Link>
          {loading?(<Loader/>):error?(<Message variant='danger'>{error}</Message>):(  
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
          )}
        </>
    )
}

export default ProductScreen
