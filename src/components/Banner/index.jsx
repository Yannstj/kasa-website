import PropTypes from 'prop-types'
import React from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/banner.scss'

function Banner({ bannerImage }) {
  const location = useLocation()
  return (
    <div className="banner">
      <div className="banner__image">
        <img
          src={bannerImage}
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

Banner.propTypes = {
  bannerImage: PropTypes.string,
}

export default Banner
