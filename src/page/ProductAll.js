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
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height={40}
          width={40}
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
              d="M22.8525 9.1425H24v5.715h-1.1475Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M21.7125 14.857499999999998h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M21.7125 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M20.572499999999998 17.145h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M20.572499999999998 4.5675h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M19.424999999999997 19.424999999999997h1.1475v1.1475H19.424999999999997Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M19.424999999999997 3.4275h1.1475v1.1400000000000001H19.424999999999997Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 20.572499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M18.285 8.0025h-1.1475V6.855h-3.4275v1.1475h-1.1400000000000001v1.1400000000000001h-1.1475v-1.1400000000000001h-1.1400000000000001V6.855H6.855v1.1475H5.715v1.1400000000000001H4.5675v3.4275h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-3.4275h-1.1400000000000001Zm-1.1475 4.5675h-1.1400000000000001v-2.2874999999999996h-2.2874999999999996v-1.1400000000000001h2.2874999999999996v1.1400000000000001h1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 2.2874999999999996h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M14.857499999999998 21.7125h2.2800000000000002v1.1475h-2.2800000000000002Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M14.857499999999998 1.1400000000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M9.1425 22.86h5.715V24h-5.715Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M9.1425 0h5.715v1.1400000000000001h-5.715Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M6.855 21.7125h2.2874999999999996v1.1475H6.855Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M6.855 1.1400000000000001h2.2874999999999996v1.1475H6.855Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M4.5675 20.572499999999998h2.2874999999999996v1.1400000000000001H4.5675Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M4.5675 2.2874999999999996h2.2874999999999996v1.1400000000000001H4.5675Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M3.4275 19.424999999999997h1.1400000000000001v1.1475H3.4275Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M3.4275 3.4275h1.1400000000000001v1.1400000000000001H3.4275Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M2.2800000000000002 17.145h1.1475v2.2800000000000002H2.2800000000000002Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M2.2800000000000002 4.5675h1.1475v2.2874999999999996H2.2800000000000002Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M1.1400000000000001 14.857499999999998h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M1.1400000000000001 6.855h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
            <path
              d="M0 9.1425h1.1400000000000001v5.715H0Z"
              fill="#ed74ac"
              strokeWidth={1}
            />
          </g>
        </svg>
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
