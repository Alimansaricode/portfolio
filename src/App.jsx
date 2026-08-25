import React from 'react'
import Nav from './nav/Nav'
import Home from './pages/Home'
import Project from './pages/Project'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/Skill' element={<Skill />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
