import Header from 'Components/Header/Header';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import UpdateTodo from './TodoList/UpdateTodo';

export default function index() {
  return (
    <>
    <Header />
      <Routes>
        <Route index  element={<Home/>} />
        <Route path='About'  element={<About/>} />
        <Route path='Contact'  element={<Contact/>} />
        <Route path='AddTodo'  element={<AddTodo/>} />
        <Route path='TodoList'  element={<TodoList/>} />
        <Route path='TodoList/:id'  element={<UpdateTodo/>} />
      </Routes>
    </>
  )
}
