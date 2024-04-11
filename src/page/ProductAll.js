import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../component/Card';
// import Carousel from '../component/Carousel';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3004/products`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('데이터', data);
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container className="product-all-wrap">
      {/* <Carousel /> */}
      <Row xs={1} sm={2} md={2} lg={4} className="justify-content-center">
        {productList.map((item) => (
          <Col lg={3} className="d-flex justify-content-center mb-3 card-hover">
            <Card item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductAll;
