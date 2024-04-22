import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../component/Card';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();
  const menuList = ['헤드폰', '스피커', '카세트', '턴테이블', 'CD플레이어'];
  const [filteredProductList, setFilteredProductList] = useState([]);
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  const handleMenuClick = (menu) => {
    const filteredProducts = productList.filter(
      (item) => item.category === menu,
    );
    setFilteredProductList(filteredProducts);
    console.log(filteredProductList);
    // navigate(`category=${menu}`);
  };

  return (
    <Container className="product-all-wrap">
      <ul className="nav-list nes-pointer">
        {menuList.map((menu, index) => (
          <li key={index} onClick={() => handleMenuClick(menu)}>
            {menu}
          </li>
        ))}
      </ul>
      {productList.length ? (
        <Row xs={1} sm={2} md={2} lg={4} className="justify-content-center">
          {productList.map((item) => (
            <Col
              key={item.id}
              lg={3}
              className="d-flex justify-content-center mb-5 card-hover"
            >
              <Card item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="mb-5 no-result">
          "{query.get('q')}"와(과) 일치하는 상품이 없습니다.
        </div>
      )}
    </Container>
  );
};

export default ProductAll;
