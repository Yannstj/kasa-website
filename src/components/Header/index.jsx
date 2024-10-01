import { Link } from 'react-router-dom'
import companyLogo from '../../assets/logo.svg'
import '../../styles/header.scss'

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div>
          <img src={companyLogo} alt="logo de Kasa" className="navbar__logo" />
        </div>
        <ul className="navbar__link">
          <li>
            <Link to="/" className="navbar__homepage">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/about" className="navbar__about">
              À propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
