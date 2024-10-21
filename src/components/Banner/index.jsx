import React from 'react'
import { useLocation } from 'react-router-dom'
import cliff from '../../assets/banner-cliff.jpg'
import montain from '../../assets/banner-montain.jpg'
import '../../styles/banner.scss'

function Banner() {
  const location = useLocation()
  return (
    <div className="banner">
      <div className="banner__image">
        <img
          src={`${location.pathname === '/about' ? `${montain}` : `${cliff}`}`}
          alt={`${location.pathname === '/about' ? 'montain' : 'cliff'}`}
        />
        <div className="banner__overlay"></div>
      </div>
      <div className={`${location.pathname === '/' ? `banner__title` : null}`}>
        <h1>Chez vous partous ailleurs</h1>
      </div>
    </div>
  )
}

export default Banner
