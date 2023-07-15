import { useAuthContext } from 'Context/AuthContext'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const initValue = { name: '', date: '', email: '', password: '', }

export default function Login() {
  const { dispatch } = useAuthContext()
  const navigate = useNavigate()
  const [state, setState] = useState(initValue);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let { name, date, email, password } = state;

    const userData = { name, date, email, password }
    setTimeout(() => {
      dispatch({ type: 'LOGIN', payload: { userData } })
      localStorage.setItem('todos', JSON.stringify(userData))
      navigate('/')
    }, 1000)
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className='text-center mt-5'>Login Area</h1>
            <div className="card p-5 mt-5">
              <div className="row">
                <div className="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Full Name</label>
                    <input type="name" name='name' onChange={handleChange} class="form-control" placeholder="Name Here" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">date</label>
                    <input type="date" name='date' onChange={handleChange} class="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Email address</label>
                    <input type="email" name='email' onChange={handleChange} class="form-control" placeholder="name@example.com" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div class="mb-3">
                    <label class="form-label">Password</label>
                    <input type="password" name='password' onChange={handleChange} class="form-control" />
                  </div>
                </div>
                <div class="d-grid gap-2 col-6 mx-auto mt-3">
                  <button class="btn btn-primary" type="button" onClick={handleSubmit}>Button</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
