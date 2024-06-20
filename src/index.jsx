import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Logement from './pages/Logement';
import About from './pages/About';
import Error from './pages/Error';
//import Footer from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
<Router>
  <Header />
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/logement' element={<Logement />} />
    <Route path='/about' element={<About />} />
    <Route path="*" element={<Error />} />
  </Routes>
  {/* <Footer /> */}
</Router>
  </React.StrictMode>,
  document.getElementById('root'),

);
