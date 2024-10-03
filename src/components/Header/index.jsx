import { NavLink } from 'react-router-dom'
import companyLogo from '../../assets/logo.svg'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <img src={companyLogo} alt="logo de Kasa" className="navbar__logo" />
        </div>
        <ul className="navbar__link">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `navbar__homepage ${isActive ? 'navbar__active' : ''}`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `navbar__about ${isActive ? 'navbar__active' : ''}`
              }
            >
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
