import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Transactions from './pages/Transactions'
import Leaders from './pages/Leaders'
import Login from './pages/Login'
import Signup from './pages/Signup'
import JoinPools from './pages/JoinPools'
import HelpCenter from './pages/HelpCenter'
import FindAgents from './pages/FindAgents'
import Signals from './pages/SIgnals'
import Learn from './pages/Learn'

function App() {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/transactions`} element={<Transactions />} />
          <Route path={`/leaders`} element={<Leaders />} />
          <Route path={`/joinPools`} element={<JoinPools />} />
          <Route path={`/learn`} element={<Learn />} />
          <Route path={`/signals`} element={<Signals />} />
          <Route path={`/helpCenter`} element={<HelpCenter />} />
          <Route path={`/findAgents`} element={<FindAgents />} />
          <Route path={`/login`} element={<Login />} />
          <Route path={`/signup`} element={<Signup />} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
