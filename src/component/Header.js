import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Header = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  const goSearch = (e) => {
    if (e.key === 'Enter') {
      navigate(`/?q=${e.target.value}`);
    }
  };

  const handleAuthClick = () => {
    if (authenticate) {
      alert('로그아웃되었습니다!');
      setAuthenticate(false);
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="header-area">
      <div className="header-wrap">
        <svg
          className="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height={40}
          width={40}
          id="Music-Headphones-Human--Streamline-Pixel"
        >
          <desc>
            {'Music Headphones Human Streamline Icon: https://streamlinehq.com'}
          </desc>
          <title>{'music-headphones-human'}</title>
          <g>
            <path
              d="M22.28625 9.71625h1.1400000000000001v4.5675h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="m7.428749999999999 9.71625 1.1400000000000001 0 0 -1.1475 1.1475 0 0 -1.1400000000000001 4.5675 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 3.4275 0 0 1.1400000000000001 1.1400000000000001 0 0 9.1425 1.1475 0 0 -2.2800000000000002 1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 -4.5675 1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 -4.5675 -1.1475 0 0 1.1400000000000001 -1.1400000000000001 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -1.1475 -8.0025 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 2.2874999999999996 -1.1475 0 0 -3.4275 -1.1400000000000001 0 0 3.4275 -1.1400000000000001 0 0 1.1400000000000001 4.5675 0 0 1.1475z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M18.85875 17.71125h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M18.85875 2.8537500000000002h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M17.71125 15.431249999999999h1.1475v1.1400000000000001h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M17.71125 11.99625h1.1475v2.2874999999999996h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M17.71125 1.71375h1.1475v1.1400000000000001h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M8.568750000000001 18.85875V21.15h-2.2800000000000002v1.1400000000000001h-2.2874999999999996v1.1400000000000001h18.285v-1.1400000000000001h-2.2874999999999996V21.15h-2.2874999999999996v-1.1475h1.1475v-1.1400000000000001Zm8.0025 3.4275h-4.5675V21.15h-2.2874999999999996v-1.1475H16.575000000000003Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M14.283750000000001 16.57125h3.4275v1.1400000000000001h-3.4275Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M13.143749999999999 15.431249999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M12.00375 11.99625h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M12.00375 8.568750000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M8.568750000000001 9.71625h1.1475v4.5675h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M7.428749999999999 0.57375h10.2825v1.1400000000000001H7.428749999999999Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M7.428749999999999 17.71125h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M7.428749999999999 14.283750000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="m2.86125 15.431249999999999 0 1.1400000000000001 3.4275 0 0 1.1400000000000001 1.1400000000000001 0 0 -2.2800000000000002 -4.5675 0z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M6.28875 1.71375h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M5.14125 2.8537500000000002h1.1475v1.1475h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M4.00125 9.71625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M2.86125 10.85625h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M1.71375 14.283750000000001h1.1475v1.1475h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M1.71375 8.568750000000001h1.1475v1.1475h-1.1475Z"
              fill="#ffffff"
              strokeWidth={1}
            />
            <path
              d="M0.57375 9.71625h1.1400000000000001v4.5675H0.57375Z"
              fill="#ffffff"
              strokeWidth={1}
            />
          </g>
        </svg>
        <h2 className="header-title nes-pointer" onClick={goToHome}>
          WaveHub
        </h2>
      </div>

      <input
        type="text"
        placeholder="상품을 검색해보아요 : )"
        class="search-input"
        onKeyPress={(e) => goSearch(e)}
      />
      <h4 className="login-title nes-pointer" onClick={handleAuthClick}>
        {authenticate ? 'LOGOUT' : 'LOGIN'}
      </h4>
    </div>
  );
};

export default Header;
