import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div>
      <div className="img-badge-area">
        <img
          style={{
            borderRadius: '4px',
          }}
          width={220}
          height={220}
          src={item?.img}
          onClick={goToDetail}
          alt=""
          className="nes-pointer"
        />
        {item.choice && (
          <span className="card-badge wave-badge">wave pick!</span>
        )}
        {item.new && <span className="card-badge new-badge">new!</span>}
      </div>
      <div className="card-title">{item?.title}</div>
      <div className="card-price">
        {item?.price.toLocaleString('ko-KR')}
        <span className="price-won">원</span>
      </div>
    </div>
  );
};

export default Card;
