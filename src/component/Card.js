import React from 'react';

const Card = ({ item }) => {
  return (
    <div>
      <img width={150} src={item?.img} />
      <div>{item?.title}</div>
      <div>{item?.price}</div>
    </div>
  );
};

export default Card;
