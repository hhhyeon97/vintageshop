import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../component/Card';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  const menuList = [
    '전체',
    '헤드폰',
    '스피커',
    '카세트',
    '턴테이블',
    'CD플레이어',
  ];
  const [filteredProductList, setFilteredProductList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState('전체');

  const getProducts = async () => {
    let url = `http://localhost:3004/products`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
    setFilteredProductList(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleMenuClick = (menu) => {
    if (menu === '전체') {
      setFilteredProductList(productList);
    } else {
      const filteredProducts = productList.filter((item) => item.type === menu);
      setFilteredProductList(filteredProducts);
    }
    setSelectedMenu(menu);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const scrollUpBtn = document.getElementById('scrollUpBtn');
    if (window.scrollY > 300) {
      scrollUpBtn.style.display = 'block';
    } else {
      scrollUpBtn.style.display = 'none';
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container className="product-all-wrap">
      <ul className="nav-list nes-pointer">
        {menuList.map((menu, index) => (
          <li
            key={index}
            onClick={() => handleMenuClick(menu)}
            style={{
              backgroundColor: menu === selectedMenu ? 'white' : 'inherit',
            }}
          >
            {menu}
          </li>
        ))}
      </ul>
      {filteredProductList.length ? (
        <Row xs={1} sm={2} md={2} lg={4} className="justify-content-center">
          {filteredProductList.map((item) => (
            <Col
              key={item.id}
              lg={3}
              className="d-flex justify-content-center mb-5"
            >
              <Card item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="mb-5 no-result">상품이 없습니다.</div>
      )}
      <button id="scrollUpBtn" className="scroll-up-btn" onClick={scrollToTop}>
        UP
      </button>
    </Container>
  );
};

export default ProductAll;
