import React from 'react'
import Login from './pages/login/Login.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/register/Register.jsx'
import Home from './components/home/Home.jsx'
import UploadImg from './pages/upload/UploadImg.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='home' element={<Home />} />
        <Route path='upload' element={<UploadImg />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App