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
        width={200}
        height={200}
        src={item?.img}
        onClick={goToDetail}
        alt=""
      />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
    </div>
  );
};

export default Card;
