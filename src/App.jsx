import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/authentication/Login'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/login' element={<Login />} />
        </Routes>
    </Router>
  )
}
