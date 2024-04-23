import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [orderNumber, setOrderNumber] = useState('');

  useEffect(() => {
    const fetchProductInfo = async () => {
      try {
        const response = await fetch(
          `https://my-json-server.typicode.com/hhhyeon97/wavehub/products/${id}`,
        );
        const data = await response.json();
        setProduct(data);
        // 주문 번호 생성
        const currentDate = new Date();
        const year = currentDate.getFullYear().toString().slice(2); // 연도의 마지막 두 자리
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // 월 (0부터 시작하므로 +1)
        const date = String(currentDate.getDate()).padStart(2, '0'); // 일
        const randomBetween1And1000 = Math.floor(Math.random() * 1000) + 1; // 1부터 1000까지의 랜덤한 숫자 생성
        const randomOrderNumber = `ORDER${year}${month}${date}${randomBetween1And1000}`;
        setOrderNumber(randomOrderNumber);
        console.log(randomOrderNumber);
      } catch (error) {
        console.error('상품 정보를 불러오는 중 오류가 발생했습니다:', error);
      }
    };

    fetchProductInfo();
  }, [id]);

  return (
    <div className="payment">
      <h3 style={{ textAlign: 'center' }}>주문이 완료되었습니다 : )</h3>
      {product && (
        <div>
          <p>주문 번호: {orderNumber}</p>
          <p>주문 상품 아이디: {id}</p>
          <p>상품명: {product.title}</p>
          <p>상품 가격: {product.price.toLocaleString('ko-KR')}원</p>
        </div>
      )}
    </div>
  );
};

export default Payment;
