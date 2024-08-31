import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import Leaders from './pages/Leaders'
import Login from './pages/Login'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/transactions`} element={<Transactions />} />
          <Route path={`/leaders`} element={<Leaders />} />
          <Route path={`/login`} element={<Login />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
