import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Transactions from './pages/Transactions'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/transactions`} element={<Transactions />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
