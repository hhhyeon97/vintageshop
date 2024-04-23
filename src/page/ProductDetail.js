import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  let { id } = useParams();
  const navigate = useNavigate();

  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/hhhyeon97/wavehub/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    // console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  const goBuy = () => {
    navigate(`/buy/${product.id}`);
  };

  return (
    <Container className="d-flex justify-content-center align-items-center detail-wrap">
      <Row className="detail-row">
        <Col>
          <img
            className="detail-img"
            src={product?.img}
            width={400}
            height={400}
            alt=""
          />
        </Col>
        <Col>
          <span className="pick">
            {product?.choice === true ? 'wave pick!' : ''}
          </span>
          <br />
          <span className="new">{product?.new === true ? 'new' : 'used'}</span>
          <div className="detail-title">{product?.title}</div>
          <div className="price">
            {product?.price.toLocaleString('ko-KR')}원
          </div>
          <div>
            <button className="nes-btn is-normal buy-btn" onClick={goBuy}>
              구매하기
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
