import React from 'react';
import Payment from '../page/Payment';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  if (authenticate === true) {
    return <Payment />;
  } else {
    alert('로그인 후 이용 가능합니다.');
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;
