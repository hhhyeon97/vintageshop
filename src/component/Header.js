import React from 'react';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };
  const goToLogin = () => {
    navigate('/login');
  };

  const search = (event) => {
    // console.log("let's search!");
    if (event.key === 'Enter') {
      // console.log('we click this key!', event.key);
      let keyword = event.target.value;
      // console.log('keyword', keyword);
      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div className="header-area">
      <div className="header-wrap">
        <svg
          className="svg-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="40"
          width="40"
          id="Music-Headphones-Human--Streamline-Pixel"
        >
          <desc>
            Music Headphones Human Streamline Icon: https://streamlinehq.com
          </desc>
          <title>music-headphones-human</title>
          <g>
            <path
              d="M22.28625 9.71625h1.1400000000000001v4.5675h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="m7.428749999999999 9.71625 1.1400000000000001 0 0 -1.1475 1.1475 0 0 -1.1400000000000001 4.5675 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 3.4275 0 0 1.1400000000000001 1.1400000000000001 0 0 9.1425 1.1475 0 0 -2.2800000000000002 1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 -4.5675 1.1400000000000001 0 0 -1.1475 -1.1400000000000001 0 0 -4.5675 -1.1475 0 0 1.1400000000000001 -1.1400000000000001 0 0 -1.1400000000000001 -2.2874999999999996 0 0 -1.1475 -8.0025 0 0 1.1475 -1.1400000000000001 0 0 1.1400000000000001 -1.1400000000000001 0 0 2.2874999999999996 -1.1475 0 0 -3.4275 -1.1400000000000001 0 0 3.4275 -1.1400000000000001 0 0 1.1400000000000001 4.5675 0 0 1.1475z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M18.85875 17.71125h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M18.85875 2.8537500000000002h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M17.71125 15.431249999999999h1.1475v1.1400000000000001h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M17.71125 11.99625h1.1475v2.2874999999999996h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M17.71125 1.71375h1.1475v1.1400000000000001h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M8.568750000000001 18.85875V21.15h-2.2800000000000002v1.1400000000000001h-2.2874999999999996v1.1400000000000001h18.285v-1.1400000000000001h-2.2874999999999996V21.15h-2.2874999999999996v-1.1475h1.1475v-1.1400000000000001Zm8.0025 3.4275h-4.5675V21.15h-2.2874999999999996v-1.1475H16.575000000000003Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M14.283750000000001 16.57125h3.4275v1.1400000000000001h-3.4275Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M13.143749999999999 15.431249999999999h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M12.00375 11.99625h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M12.00375 8.568750000000001h2.2800000000000002v1.1475h-2.2800000000000002Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M8.568750000000001 9.71625h1.1475v4.5675h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M7.428749999999999 0.57375h10.2825v1.1400000000000001H7.428749999999999Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M7.428749999999999 17.71125h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M7.428749999999999 14.283750000000001h1.1400000000000001v1.1475h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="m2.86125 15.431249999999999 0 1.1400000000000001 3.4275 0 0 1.1400000000000001 1.1400000000000001 0 0 -2.2800000000000002 -4.5675 0z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M6.28875 1.71375h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M5.14125 2.8537500000000002h1.1475v1.1475h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M4.00125 9.71625h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M2.86125 10.85625h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M1.71375 14.283750000000001h1.1475v1.1475h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M1.71375 8.568750000000001h1.1475v1.1475h-1.1475Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
            <path
              d="M0.57375 9.71625h1.1400000000000001v4.5675H0.57375Z"
              fill="#ffffff"
              stroke-width="1"
            ></path>
          </g>
        </svg>
        <h2 className="header-title nes-pointer" onClick={goToHome}>
          WaveHub
        </h2>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="36"
        width="36"
        id="Interface-Essential-Search-1--Streamline-Pixel"
        className="search-icon"
      >
        <desc>
          Interface Essential Search 1 Streamline Icon: https://streamlinehq.com
        </desc>
        <title>interface-essential-search-1</title>
        <g>
          <path
            d="m18.285 14.857499999999998 -1.1475 0 0 2.2874999999999996 -2.2800000000000002 0 0 1.1400000000000001 -2.2874999999999996 0 0 1.1400000000000001 3.4275 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 1.1475 1.1400000000000001 0 0 1.1400000000000001 1.1475 0 0 -1.1400000000000001 1.1400000000000001 0 0 -1.1475 1.1400000000000001 0 0 -1.1400000000000001 1.1475 0 0 -1.1475 -1.1475 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1400000000000001 -1.1400000000000001 0 0 -1.1475 -1.1475 0 0 -3.4275 -1.1400000000000001 0 0 2.2874999999999996z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M19.424999999999997 8.0025h1.1475v4.5675H19.424999999999997Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M18.285 5.715h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M17.137500000000003 3.4275h1.1475v2.2874999999999996h-1.1475Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M15.997499999999999 9.1425h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M14.857499999999998 6.855h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M14.857499999999998 2.2874999999999996h2.2800000000000002v1.1400000000000001h-2.2800000000000002Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M12.57 5.715h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M12.57 1.1400000000000001h2.2874999999999996v1.1475h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M10.2825 4.574999999999999h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M7.995 19.424999999999997h4.574999999999999v1.1475h-4.574999999999999Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M7.995 0h4.574999999999999v1.1400000000000001h-4.574999999999999Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M5.715 18.285h2.2800000000000002v1.1400000000000001H5.715Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M5.715 1.1400000000000001h2.2800000000000002v1.1475H5.715Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M3.4275 17.145h2.2874999999999996v1.1400000000000001H3.4275Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M3.4275 2.2874999999999996h2.2874999999999996v1.1400000000000001H3.4275Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M2.2874999999999996 14.857499999999998h1.1400000000000001v2.2874999999999996H2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M2.2874999999999996 3.4275h1.1400000000000001v2.2874999999999996H2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M1.1400000000000001 12.57h1.1475v2.2874999999999996H1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M1.1400000000000001 5.715h1.1475v2.2874999999999996H1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M0 8.0025h1.1400000000000001v4.5675H0Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
        </g>
      </svg> */}
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        height="38"
        width="38"
        id="Interface-Essential-Heart-Favorite--Streamline-Pixel"
        className="dibs-icon"
      >
        <desc>
          Interface Essential Heart Favorite Streamline Icon:
          https://streamlinehq.com
        </desc>
        <title>interface-essential-heart-favorite</title>
        <g>
          <path
            d="M22.8525 6.285H24V12h-1.1475Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M21.7125 12h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M21.7125 5.1450000000000005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M20.572499999999998 14.287500000000001h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M20.572499999999998 7.425000000000001h1.1400000000000001v2.2874999999999996h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M20.572499999999998 3.9975h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M19.424999999999997 6.285h1.1475V7.425000000000001H19.424999999999997Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M18.285 15.4275h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M17.137500000000003 5.1450000000000005h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M15.997499999999999 16.5675h2.2874999999999996v1.1475h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M14.857499999999998 2.8575h5.715v1.1400000000000001h-5.715Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M13.71 17.715h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M13.71 3.9975h1.1475v1.1475h-1.1475Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M12.57 18.855h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M12.57 5.1450000000000005h1.1400000000000001v1.1400000000000001h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M11.43 19.995h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M11.43 6.285h1.1400000000000001V7.425000000000001h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M10.2825 18.855h1.1475v1.1400000000000001h-1.1475Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M10.2825 5.1450000000000005h1.1475v1.1400000000000001h-1.1475Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M7.995 17.715h2.2874999999999996v1.1400000000000001h-2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M9.1425 3.9975h1.1400000000000001v1.1475h-1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M5.715 16.5675h2.2800000000000002v1.1475H5.715Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M3.4275 15.4275h2.2874999999999996v1.1400000000000001H3.4275Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M3.4275 2.8575h5.715v1.1400000000000001H3.4275Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M2.2874999999999996 14.287500000000001h1.1400000000000001v1.1400000000000001H2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M2.2874999999999996 3.9975h1.1400000000000001v1.1475H2.2874999999999996Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M1.1400000000000001 12h1.1475v2.2874999999999996H1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M1.1400000000000001 5.1450000000000005h1.1475v1.1400000000000001H1.1400000000000001Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
          <path
            d="M0 6.285h1.1400000000000001V12H0Z"
            fill="#ffffff"
            stroke-width="1"
          ></path>
        </g>
      </svg> */}
      <input
        type="search"
        className="search-input"
        placeholder="상품을 검색해보아요 : )"
        onKeyPress={(event) => search(event)}
      />
      <h4 className="login-title nes-pointer" onClick={goToLogin}>
        LOGIN
      </h4>
    </div>
  );
};

export default Header;
