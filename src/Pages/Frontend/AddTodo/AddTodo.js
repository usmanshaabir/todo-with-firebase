import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { collection ,addDoc} from "firebase/firestore";
import db from '../../../firebase-config';

const initState = { name: '', date: '', email: '', password: '' }

export default function AddTodo() {

  const navigate = useNavigate()
  const [state, setState] = useState(initState);

  // input Fleid Datat Collect function here
  const handleChange = (e) => {
    setState((s) => ({ ...s, [e.target.name]: e.target.value }))
  }

  //  Todo Submit Function here
  const handleSubmit = async (e) => {
    e.preventDefault();
    var { name, date, email, password } = state
    const usertodo = { name, date, email, password, status: 'active', id: Math.random().toString(36).slice(2) }

    // const getTodos = JSON.parse(localStorage.getItem('getTodo')) || []
    // getTodos.push(usertodo);

    // setTimeout(() => {
    //   localStorage.setItem("getTodo", JSON.stringify(getTodos))
    //   navigate('/TodoList')
    // }, 1000)
    // handleToast('successfully Added!');
    try {
      await addDoc(collection(db, "todoUser"), usertodo);
      handleToast('successfully')
    } catch (err) {
      console.log('file not save', err)
    }


  }

  //  Toast Function Here
  const handleToast = (text) => {
    toast(text, {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

  }

  //  Navigate Todo List
  const TodoList = () => {
    navigate('/TodoList')
  }

  return (
    <>
      <div className="container">
        <div className="Row">
          <div className="col">
            <button className="btn btn-success mt-5" onClick={TodoList}>TodoList</button>
            <h1 className='text-center mt-1' >AddTodo</h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card p-5 mt-5">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Full Name</label>
                          <input type="name" name='name' onChange={handleChange} className="form-control" placeholder="Name Here" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">date</label>
                          <input type="date" name='date' onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email address</label>
                          <input type="email" name='email' onChange={handleChange} className="form-control" placeholder="name@example.com" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="password" name='password' onChange={handleChange} className="form-control" />
                        </div>
                      </div>
                      <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn btn-primary" type="button" onClick={handleSubmit}>Button</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* toast Container Here */}
      <ToastContainer toastClassName='toastBackground' />
    </>
  )
}
