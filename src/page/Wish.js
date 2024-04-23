import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Wish = () => {
  const [wishList, setWishList] = useState([]);

  useEffect(() => {
    // 로컬 스토리지에서 찜한 상품 목록을 가져옴
    const storedWishList = JSON.parse(localStorage.getItem('wishList')) || [];
    setWishList(storedWishList);
  }, []);

  return (
    <div className="wish-page">
      <h2>찜한 상품 목록</h2>
      {wishList.length > 0 ? (
        <ul>
          {wishList.map((item) => (
            <li key={item.id}>
              <Link to={`/product/${item.id}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>찜한 상품이 없습니다.</p>
      )}
    </div>
  );
};

export default Wish;
