import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Login from './components/authentication/Login'

import Authenticate from './components/authentication/Authenticate'

export default function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomePage />} exact />
          <Route path='/login' element={<Authenticate />} />
        </Routes>
    </Router>
  )
}
