import React, { useEffect, useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.scss';
import { useNavigate } from 'react-router-dom';

export default function TodoList() {
  const [state, setState] = useState([]);
  const [status, setStatus] = useState("active");
  const navigate = useNavigate()

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('getTodo')) || [];
    const filteredDocuments = todos.filter(todo => todo.status === status);
    setState(filteredDocuments);
  }, [status]);


  const handleDelete = (item) => {
    const todo=JSON.parse(localStorage.getItem('getTodo'))||[]
    const deleteTodo=todo.filter(items=>items.id !== item.id);
    setState(deleteTodo)
    localStorage.setItem('getTodo',JSON.stringify(deleteTodo))
  };
  const handleAddTodo = () => {
    navigate('/AddTodo')
  }
  return (
    <>
      <div className="container">
        <div className="Row">
          <div className="col">
            <h1 className="text-center mt-5">TodoList</h1>
            <div>
              <button className="btn btn-info" onClick={handleAddTodo}>Add Todo</button>
            </div>
            <div className='text-center mb-4'>
              <label className="form-label">status</label>
              <select className="form-select" onChange={(event) => { setStatus(event.target.value) }}>
                {
                  ['active', 'inactive'].map((status, index) => {
                    return <option key={index} value={status} >{status}</option>
                  })
                }

              </select>
            </div>
            <div className="table-responsive">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(state) && state.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{index + 1}</th>
                        <td>{item.name}</td>
                        <td>{item.date}</td>
                        <td>{item.email}</td>
                        <td>{item.password}</td>
                        <td>{item.status}</td>
                        <td className="text-center">
                          <span>
                            <i
                              className="bi bi-archive me-2"
                              data-bs-toggle="tooltip"
                              data-bs-placement="top"
                              data-bs-title="Tooltip on top"
                              onClick={() => handleDelete(item)}
                            ></i>
                          </span>
                          <span>
                            <i className="bi bi-pencil-square" onClick={() => navigate(`/TodoList/${item.id}`)}></i>
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
