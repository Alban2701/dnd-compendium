import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './pages/header'
import Footer from './pages/footer'
import HomePage from './pages/home'
import Monsters from './pages/Monsters'
// import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column min-vh-100">
          <Header></Header>
          <div className="flex-grow-1">
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/monsters' element={<Monsters />}></Route>
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
