import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/banner.scss'

function Banner() {
  const location = useLocation()
  return (
    <div
      className={`bannerBox ${
        location.pathname === '/about' ? 'bannerAbout' : 'bannerHome'
      }`}
    >
      <section className="bannerWrapper">
        <div className="banner">
          <h1 className="banner__title">Chez vous partous ailleurs</h1>
        </div>
      </section>
    </div>
  )
}

export default Banner
