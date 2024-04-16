import React from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const loginCheck = () => {
    //유효성검증 추가하기
    navigate('/');
  };

  return (
    <Container className="d-flex justify-content-center align-items-center login-wrap">
      <h2
        class="login-head"
        style={{
          fontSize: '30px',
          color: 'white',
        }}
      >
        Login
      </h2>
      <div className="nes-field">
        <input type="id" id="id_field" className="nes-input" placeholder="id" />
      </div>
      <div class="nes-field">
        <input
          type="password"
          id="pw_field"
          class="nes-input"
          placeholder="password"
        />
      </div>
      <button className="nes-btn login-btn" onClick={loginCheck}>
        login
      </button>
    </Container>
  );
};

export default Login;
