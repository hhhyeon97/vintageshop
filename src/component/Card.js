import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div>
      <img
        style={{ cursor: 'pointer' }}
        width={200}
        height={200}
        src={item?.img}
        onClick={goToDetail}
        alt=""
      />
      <div className="card-title">{item?.title}</div>
      <div className="card-price">
        {item?.price.toLocaleString('ko-KR')}
        <span className="price-won">원</span>
      </div>
    </div>
  );
};

export default Card;
