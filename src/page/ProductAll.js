import React from 'react';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../component/Card';
// import Carousel from '../component/Carousel';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    // console.log('쿼리값은?', searchQuery);
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log('데이터', data);
    setProductList(data);
    // console.log('쿼리값은?', searchQuery);
    // console.log('데이터', data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <Container className="product-all-wrap">
      <Row xs={1} sm={2} md={2} lg={4} className="justify-content-center">
        {productList.length ? (
          productList.map((item, index) => (
            <Col
              lg={3}
              className="d-flex justify-content-center mb-5 card-hover"
            >
              <Card item={item} key={index} />
            </Col>
          ))
        ) : (
          <p>상품 안 보여요...</p>
        )}
      </Row>
    </Container>
  );
};

export default ProductAll;
