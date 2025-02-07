import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './pages/header'
import Footer from './pages/footer'
import HomePage from './pages/HomePage'
import Monsters from './pages/Monsters'
import Classes from './pages/Classes'
import SingleMonster from './pages/SingleMonster'
import GameMechanics from './pages/GameMechanics'
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
              <Route path='/monster/:index' element={<SingleMonster />}></Route>
              <Route path='/classes' element={<Classes />}></Route>
              <Route path='/game-mechanics' element={< GameMechanics />}></Route>
            </Routes>
          </div>
          <Footer></Footer>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
