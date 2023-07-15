import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../Context/AuthContext';


export default function Header() {

  const { isAuth, dispatch } = useAuthContext()
  const navigate = useNavigate();


  const handleLogOut = () => {
    dispatch({ type: 'LOGOUT' })
    // localStorage.removeItem('todos')
    navigate('/Login/login')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary navbar-dark">
        <div className="container">
          <Link to='/' className="navbar-brand">Login</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/About' className="nav-link active" aria-current="page">About</Link>
              </li>
              <li className="nav-item">
                <Link to='/Contact' className="nav-link active" aria-current="page">Contact</Link>
              </li>
              <li className="nav-item">
                <Link to='/AddTodo' className="nav-link active" aria-current="page">AddTodo</Link>
              </li>
              <li className="nav-item">
                <Link to='/TodoList' className="nav-link active" aria-current="page">TodoList</Link>
              </li>
            </ul>
            <div>
              {
                !isAuth ?
                  <Link to='/Login/login' className='btn btn-lg btn-danger me-3'>Login</Link> :
                  <>
                    <Link to='/Dashboard/welecomeDashboard' className='btn btn-lg btn-success me-3'>Dashboard</Link>
                    <button className='btn btn-lg btn-info' onClick={handleLogOut}>Logout</button>
                  </>
              }
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
