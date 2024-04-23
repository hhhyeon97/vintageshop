import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../component/Card';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
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
    let url = `https://my-json-server.typicode.com/hhhyeon97/wavehub/products`;
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
      <div className="go-wish-btn">
        <span className="nes-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 45 45"
            height={45}
            width={45}
            id="Social-Rewards-Heart-Like-Circle--Streamline-Pixel"
          >
            <desc>
              {
                'Social Rewards Heart Like Circle Streamline Icon: https://streamlinehq.com'
              }
            </desc>
            <title>{'social-rewards-heart-like-circle'}</title>
            <g>
              <path
                d="M42.848437499999996 17.1421875H45v10.715625h-2.1515625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M40.7109375 27.857812499999998h2.1375v4.2890625h-2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M40.7109375 12.853125h2.1375v4.2890625h-2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M38.5734375 32.146875h2.1375v4.275h-2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M38.5734375 8.5640625h2.1375v4.2890625h-2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M36.421875 36.421875h2.1515625v2.1515625H36.421875Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M36.421875 6.4265625h2.1515625v2.1375H36.421875Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M32.1328125 38.5734375h4.2890625v2.1375h-4.2890625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M34.284375 15.0046875h-2.1515625V12.853125h-6.4265625v2.1515625h-2.1375v2.1375h-2.1515625v-2.1375h-2.1375V12.853125H12.853125v2.1515625H10.715625v2.1375H8.5640625v6.4265625h2.1515625v2.1515625h2.1375v2.1375h2.1375v2.1375h2.1515625v2.1515625h2.1375v2.1375h2.1375v2.1375h2.1515625v-2.1375h2.1375v-2.1375h2.1515625v-2.1515625h2.1375v-2.1375h2.1375v-2.1375h2.1515625v-2.1515625h2.1375v-6.4265625h-2.1375Zm-2.1515625 8.5640625h-2.1375v-4.2890625h-4.2890625v-2.1375h4.2890625v2.1375h2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M32.1328125 4.2890625h4.2890625v2.1375h-4.2890625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M27.857812499999998 40.7109375h4.275v2.1515625h-4.275Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M27.857812499999998 2.1375h4.275v2.1515625h-4.275Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M17.1421875 42.8625h10.715625V45h-10.715625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M17.1421875 0h10.715625v2.1375h-10.715625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M12.853125 40.7109375h4.2890625v2.1515625H12.853125Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M12.853125 2.1375h4.2890625v2.1515625H12.853125Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M8.5640625 38.5734375h4.2890625v2.1375H8.5640625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M8.5640625 4.2890625h4.2890625v2.1375H8.5640625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M6.4265625 36.421875h2.1375v2.1515625H6.4265625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M6.4265625 6.4265625h2.1375v2.1375H6.4265625Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M4.275 32.146875h2.1515625v4.275H4.275Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M4.275 8.5640625h2.1515625v4.2890625H4.275Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M2.1375 27.857812499999998h2.1375v4.2890625H2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M2.1375 12.853125h2.1375v4.2890625H2.1375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M0 17.1421875h2.1375v10.715625H0Z"
                fill="#ffffff"
                strokeWidth={1}
              />
            </g>
          </svg>
          <span className="wish-text">wish list !</span>
        </span>
      </div>
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
