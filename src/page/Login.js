import React, { useState, useRef } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const idRef = useRef(null);
  const pwRef = useRef(null);

  const loginCheck = (event) => {
    event.preventDefault();

    if (id.trim() === '') {
      alert('아이디를 입력하세요!');
      idRef.current.focus();
      return;
    }
    if (password.trim() === '') {
      alert('비밀번호를 입력하세요!');
      pwRef.current.focus();
      return;
    }

    setAuthenticate(true);
    navigate('/');
  };

  const handleFocus = (ref) => {
    if (ref.current.value.trim() === '') {
      ref.current.value = ''; // 입력란의 값 초기화
    }
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
      <form onSubmit={(event) => loginCheck(event)}>
        <div className="nes-field">
          <input
            type="id"
            id="id_field"
            className="nes-input"
            placeholder="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            ref={idRef}
            onFocus={() => handleFocus(idRef)}
          />
        </div>
        <div className="nes-field">
          <input
            type="password"
            id="pw_field"
            className="nes-input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            ref={pwRef}
            onFocus={() => handleFocus(pwRef)}
          />
        </div>
        <button type="submit" className="nes-btn login-btn">
          login
        </button>
      </form>
    </Container>
  );
};

export default Login;
