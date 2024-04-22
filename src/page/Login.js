import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const loginCheck = (event) => {
    event.preventDefault();

    if (id.trim() === '') {
      alert('아이디를 입력하세요!');
      return;
    }
    if (password.trim() === '') {
      alert('비밀번호를 입력하세요!');
      return;
    }

    setAuthenticate(true);
    // console.log('id/pw', id, password);
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
      <form onSubmit={(event) => loginCheck(event)}>
        <div className="nes-field">
          <input
            type="id"
            id="id_field"
            className="nes-input"
            placeholder="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div class="nes-field">
          <input
            type="password"
            id="pw_field"
            class="nes-input"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
