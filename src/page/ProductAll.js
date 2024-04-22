import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../component/Card';
import { useSearchParams, useNavigate } from 'react-router-dom';

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();
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

  // const getProducts = async () => {
  //   let searchQuery = query.get('q') || '';
  //   console.log('쿼리값은?', searchQuery);
  //   let url = `http://localhost:3004/products?q=${searchQuery}`;
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   setProductList(data);
  //   setFilteredProductList(data);
  // };

  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    console.log('쿼리값은?', searchQuery);
    let url = `http://localhost:3004/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log('검색 결과:', data);
    setProductList(data);

    // 검색어가 있을 경우, 상품 목록에서 검색어를 포함하는 상품만 필터링
    if (searchQuery.trim() !== '') {
      const filteredProducts = data.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase().trim()),
      );
      console.log('필터링된 결과:', filteredProducts);
      setFilteredProductList(filteredProducts);
    } else {
      setFilteredProductList(data);
    }
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  const handleMenuClick = (menu) => {
    if (menu === '전체') {
      setFilteredProductList(productList);
    } else {
      const filteredProducts = productList.filter((item) => item.type === menu);
      setFilteredProductList(filteredProducts);
    }
    setSelectedMenu(menu); // 선택된 메뉴 업데이트
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
              className="d-flex justify-content-center mb-5 card-hover"
            >
              <Card item={item} />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="mb-5 no-result">
          <span className="search-text">"{query.get('q')}"</span>와(과) 일치하는
          상품이 없습니다.
        </div>
      )}
    </Container>
  );
};

export default ProductAll;
