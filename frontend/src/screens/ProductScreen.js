import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Card, Col, Image, ListGroup, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Rating from "../components/Rating";

const ProductScreen = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get('/api/products/' + match.params.id);
      setProduct(data);
      console.log(data);
    }
    fetchProduct()
  }, [match])
  return (<div>
    <Link to='/' className="btn btn-light">Go Back</Link>
    <Row>
      <Col md={6}>
        <Image src={product.image} alt={product.name} fluid />
      </Col>
      <Col md={3}>
        <ListGroup variant='fluid'>
          <ListGroup.Item>
            <h3>{product.name}</h3>
          </ListGroup.Item>
          <ListGroup.Item>
            <Rating
              value={product.ratings}
              text={`${product.numReviews} reviews`}
            />
          </ListGroup.Item>
          <ListGroup.Item>
            Price: ${product.price}
          </ListGroup.Item>
          <ListGroup.Item>
            Description: {product.description}
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col md={3}>
        <Card>
          <ListGroup variant='fluid'>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>
                  <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>Status</Col>
                <Col>
                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block" disabled={product.countInStock === 0}>Add To Cart</Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  </div>);
}

export default ProductScreen;