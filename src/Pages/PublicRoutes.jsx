import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Frontend from './Frontend';
import Dashboard from './Dashboard';
import Login from './Login';
import PrivateContext from 'Components/PrivateContext';
import { useAuthContext } from 'Context/AuthContext';

export default function PublicRoutes() {
  const { isAuth } = useAuthContext();

  return (
    <>
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/Dashboard/*' element={<PrivateContext MyComponent={Dashboard} />} />
        <Route path='/Login/*' element={!isAuth ? <Login /> : <Navigate to='/' />} />
        <Route path='*' element={<h1>404 Pages Not Found</h1>} />
      </Routes>
    </>
  );
}
