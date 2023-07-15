import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer ,toast } from 'react-toastify';

const initState = { name: '', date: '', email: '', password: '' }

export default function AddTodo() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [state, setState] = useState(initState);

  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  const handleChangeStatus = (e) => {
    setState(s => ({ ...s, [e.target.name]: e.target.value }))
  }
  useEffect(() => {
    const todoId = JSON.parse(localStorage.getItem('getTodo')) || []
    const todo = todoId.find(item => item.id === id)
    setState(todo)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    // var { name, date, email, password, status } = state
    // const usertodo = { ...state, name, date, email, password, status, id: Math.random().toString(36).slice(2) }

    const getTodos = JSON.parse(localStorage.getItem('getTodo')) || []

    const updatedtodo = getTodos.map((oldTodo) => {
      console.log(oldTodo.id, state.id)
      if (oldTodo.id === state.id) {
        return state
      }
      return oldTodo

    })
    setTimeout(() => {
      localStorage.setItem("getTodo", JSON.stringify(updatedtodo))
      navigate('/TodoList')
    }, 1000)
    handleToast('Update successfully!')
  }
  // Toast Function Here
  const handleToast = (text) => {
    toast(text, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const TodoList = () => {
    navigate('/TodoList')
  }
  return (
    <>
      <div className="container">
        <div className="Row">
          <div className="col">
            <button className="btn btn-success mt-5" onClick={TodoList}>TodoList</button>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card p-5 mt-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input type="name" name='name' value={state.name} onChange={handleChange} className="form-control" placeholder="Name Here" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">date</label>
                          <input type="date" name='date' value={state.date} onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" name='email' value={state.email} onChange={handleChange} className="form-control" placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" name='password' value={state.password} onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label">status</label>
                        <select className="form-select" name="status" value={state.status} onChange={handleChangeStatus} >
                          {
                            ['active', 'inactive'].map((status, index) => {
                              return <option key={index} value={status} >{status}</option>
                            })
                          }

                        </select>
                      </div>
                      <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Update</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer toastClassName='updateToastBackground' />
    </>
  )
}
