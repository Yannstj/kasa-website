import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import '../src/styles/app.scss'
import '../src/styles/global.scss'
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logement" element={<Logement />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  )
}

export default App
