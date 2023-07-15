import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from 'Context/AuthContext';

export default function PrivateContext({ MyComponent }) {
  const { isAuth } = useAuthContext();
  const location = useLocation();

  if (!isAuth)
    return <Navigate to='/Login/login' state={{ from: location.pathname }} replace />;

  return (
    <>
      <MyComponent />
    </>
  );
}
