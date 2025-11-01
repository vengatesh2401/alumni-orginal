import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Router } from 'react-router-dom'
import Sidebar from './pages/Sidebar.jsx'

function App() {
  
  return (
  <>
  <div className="app">
    <Sidebar />
  </div>
  </>
  )
}

export default App
