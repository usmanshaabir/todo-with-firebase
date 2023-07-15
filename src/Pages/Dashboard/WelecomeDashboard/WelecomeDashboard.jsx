import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function WelecomeDashboard() {

  const Navigate = useNavigate();
  const handleDashboard = () => {
    Navigate('/')
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center mt-5'>welecome to Dashboard </h1>
            <div className='text-center'>
              <button className="btn btn-lg btn-primary" onClick={handleDashboard}>GoHome</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
