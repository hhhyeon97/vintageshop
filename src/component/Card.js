import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ item }) => {
  const navigate = useNavigate();

  const goToDetail = () => {
    navigate(`/product/${item.id}`);
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
      <div className="wish-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
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
              d="M22.8525 9.1425H24v5.715h-1.1475Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M21.7125 14.857499999999998h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M21.7125 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M20.572499999999998 17.145h1.1400000000000001v2.2800000000000002h-1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M20.572499999999998 4.5675h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M19.424999999999997 19.424999999999997h1.1475v1.1475H19.424999999999997Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M19.424999999999997 3.4275h1.1475v1.1400000000000001H19.424999999999997Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 20.572499999999998h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M18.285 8.0025h-1.1475V6.855h-3.4275v1.1475h-1.1400000000000001v1.1400000000000001h-1.1475v-1.1400000000000001h-1.1400000000000001V6.855H6.855v1.1475H5.715v1.1400000000000001H4.5675v3.4275h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v1.1475h1.1400000000000001v1.1400000000000001h1.1400000000000001v1.1400000000000001h1.1475v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-1.1400000000000001h1.1400000000000001v-1.1400000000000001h1.1475v-1.1475h1.1400000000000001v-3.4275h-1.1400000000000001Zm-1.1475 4.5675h-1.1400000000000001v-2.2874999999999996h-2.2874999999999996v-1.1400000000000001h2.2874999999999996v1.1400000000000001h1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M17.137500000000003 2.2874999999999996h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M14.857499999999998 21.7125h2.2800000000000002v1.1475h-2.2800000000000002Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M14.857499999999998 1.1400000000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M9.1425 22.86h5.715V24h-5.715Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M9.1425 0h5.715v1.1400000000000001h-5.715Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M6.855 21.7125h2.2874999999999996v1.1475H6.855Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M6.855 1.1400000000000001h2.2874999999999996v1.1475H6.855Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M4.5675 20.572499999999998h2.2874999999999996v1.1400000000000001H4.5675Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M4.5675 2.2874999999999996h2.2874999999999996v1.1400000000000001H4.5675Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M3.4275 19.424999999999997h1.1400000000000001v1.1475H3.4275Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M3.4275 3.4275h1.1400000000000001v1.1400000000000001H3.4275Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M2.2800000000000002 17.145h1.1475v2.2800000000000002H2.2800000000000002Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M2.2800000000000002 4.5675h1.1475v2.2874999999999996H2.2800000000000002Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M1.1400000000000001 14.857499999999998h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M1.1400000000000001 6.855h1.1400000000000001v2.2874999999999996H1.1400000000000001Z"
              fill="#807f7f"
              strokeWidth={1}
            />
            <path
              d="M0 9.1425h1.1400000000000001v5.715H0Z"
              fill="#807f7f"
              strokeWidth={1}
            />
          </g>
        </svg>
      </div>
    </div>
  );
};

export default Card;
