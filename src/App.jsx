import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import '../src/index.scss'
import '../src/styles/footer.scss'
import '../src/styles/global.scss'
import '../src/styles/header.scss'
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
