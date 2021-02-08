import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'
const HomeScreen = () => {
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])
  return (
    <>
      <h3>Latest Products</h3>
      {loading ? <h2>Loading...</h2> : error ? <h3>{error}</h3> : <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>}
    </>
  );
}

export default HomeScreen;