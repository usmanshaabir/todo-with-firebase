import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import WelecomeDashboard from './WelecomeDashboard';

export default function index() {
  return (
    <>
      <Routes>
        <Route path='WelecomeDashboard' element={<WelecomeDashboard/>} />
      </Routes>
    </>
  )
}
