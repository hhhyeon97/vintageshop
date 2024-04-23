import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState(false);

  const goToDetail = () => {
    navigate(`/product/${item.id}`);
  };

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 클릭할 때마다 상태를 반전시킴
  };

  return (
    <div className="card-hover">
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
      <div className="wish-btn" onClick={handleLikeClick}>
        {isLiked ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            height={30}
            width={30}
            id="Social-Rewards-Heart-Like-Circle--Streamline-Pixel"
            className="nes-pointer"
          >
            <desc>
              {
                'Social Rewards Heart Like Circle Streamline Icon: https://streamlinehq.com'
              }
            </desc>
            <title>{'social-rewards-heart-like-circle'}</title>
            <g>
              <path
                d="M28.565624999999997 11.428125H30v7.14375h-1.434375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M27.140625 18.571875h1.425v2.859375h-1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M27.140625 8.568750000000001h1.425v2.859375h-1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M25.715625 21.43125h1.425v2.85h-1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M25.715625 5.709375h1.425v2.859375h-1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M24.28125 24.28125h1.434375v1.434375H24.28125Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M24.28125 4.284375000000001h1.434375v1.425H24.28125Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M21.421875 25.715625h2.859375v1.425h-2.859375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M22.85625 10.003125h-1.434375V8.568750000000001h-4.284375000000001v1.434375h-1.425v1.425h-1.434375v-1.425h-1.425V8.568750000000001H8.568750000000001v1.434375H7.14375v1.425H5.709375v4.284375000000001h1.434375v1.434375h1.425v1.425h1.425v1.425h1.434375v1.434375h1.425v1.425h1.425v1.425h1.434375v-1.425h1.425v-1.425h1.434375v-1.434375h1.425v-1.425h1.425v-1.425h1.434375v-1.434375h1.425v-4.284375000000001h-1.425Zm-1.434375 5.709375h-1.425v-2.859375h-2.859375v-1.425h2.859375v1.425h1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M21.421875 2.859375h2.859375v1.425h-2.859375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M18.571875 27.140625h2.85v1.434375h-2.85Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M18.571875 1.425h2.85v1.434375h-2.85Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M11.428125 28.575h7.14375V30h-7.14375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M11.428125 0h7.14375v1.425h-7.14375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M8.568750000000001 27.140625h2.859375v1.434375H8.568750000000001Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M8.568750000000001 1.425h2.859375v1.434375H8.568750000000001Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M5.709375 25.715625h2.859375v1.425H5.709375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M5.709375 2.859375h2.859375v1.425H5.709375Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M4.284375000000001 24.28125h1.425v1.434375H4.284375000000001Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M4.284375000000001 4.284375000000001h1.425v1.425H4.284375000000001Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M2.85 21.43125h1.434375v2.85H2.85Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M2.85 5.709375h1.434375v2.859375H2.85Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M1.425 18.571875h1.425v2.859375H1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M1.425 8.568750000000001h1.425v2.859375H1.425Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
              <path
                d="M0 11.428125h1.425v7.14375H0Z"
                fill="#3e7bf2"
                strokeWidth={1}
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            height={30}
            width={30}
            id="Social-Rewards-Heart-Like-Circle--Streamline-Pixel"
            className="nes-pointer"
          >
            <desc>
              {
                'Social Rewards Heart Like Circle Streamline Icon: https://streamlinehq.com'
              }
            </desc>
            <title>{'social-rewards-heart-like-circle'}</title>
            <g>
              <path
                d="M28.565624999999997 11.428125H30v7.14375h-1.434375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M27.140625 18.571875h1.425v2.859375h-1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M27.140625 8.568750000000001h1.425v2.859375h-1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M25.715625 21.43125h1.425v2.85h-1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M25.715625 5.709375h1.425v2.859375h-1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M24.28125 24.28125h1.434375v1.434375H24.28125Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M24.28125 4.284375000000001h1.434375v1.425H24.28125Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M21.421875 25.715625h2.859375v1.425h-2.859375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M22.85625 10.003125h-1.434375V8.568750000000001h-4.284375000000001v1.434375h-1.425v1.425h-1.434375v-1.425h-1.425V8.568750000000001H8.568750000000001v1.434375H7.14375v1.425H5.709375v4.284375000000001h1.434375v1.434375h1.425v1.425h1.425v1.425h1.434375v1.434375h1.425v1.425h1.425v1.425h1.434375v-1.425h1.425v-1.425h1.434375v-1.434375h1.425v-1.425h1.425v-1.425h1.434375v-1.434375h1.425v-4.284375000000001h-1.425Zm-1.434375 5.709375h-1.425v-2.859375h-2.859375v-1.425h2.859375v1.425h1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M21.421875 2.859375h2.859375v1.425h-2.859375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M18.571875 27.140625h2.85v1.434375h-2.85Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M18.571875 1.425h2.85v1.434375h-2.85Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M11.428125 28.575h7.14375V30h-7.14375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M11.428125 0h7.14375v1.425h-7.14375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M8.568750000000001 27.140625h2.859375v1.434375H8.568750000000001Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M8.568750000000001 1.425h2.859375v1.434375H8.568750000000001Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M5.709375 25.715625h2.859375v1.425H5.709375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M5.709375 2.859375h2.859375v1.425H5.709375Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M4.284375000000001 24.28125h1.425v1.434375H4.284375000000001Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M4.284375000000001 4.284375000000001h1.425v1.425H4.284375000000001Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M2.85 21.43125h1.434375v2.85H2.85Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M2.85 5.709375h1.434375v2.859375H2.85Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M1.425 18.571875h1.425v2.859375H1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M1.425 8.568750000000001h1.425v2.859375H1.425Z"
                fill="#ffffff"
                strokeWidth={1}
              />
              <path
                d="M0 11.428125h1.425v7.14375H0Z"
                fill="#ffffff"
                strokeWidth={1}
              />
            </g>
          </svg>
        )}
      </div>
    </div>
  );
};

export default Card;
