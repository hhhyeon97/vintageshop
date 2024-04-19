import React from 'react';
import Payment from '../page/Payment';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  return authenticate === true ? <Payment /> : <Navigate to="/login" />;
};

export default PrivateRoute;
