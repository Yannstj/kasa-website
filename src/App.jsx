import React from 'react'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
// Default was BrowserRouter but it doesn't work for github page and send 404 first
import '../src/index.scss'
import Footer from './components/Footer'
import Header from './components/Header'
import About from './pages/About'
import Error from './pages/Error'
import Home from './pages/Home'
import Logement from './pages/Logement'

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <Header />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/logement/:id" element={<Logement />} />
              <Route path="/about" element={<About />} />
              <Route path="/erreur" element={<Error />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  )
}

export default App
