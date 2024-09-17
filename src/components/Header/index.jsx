import { Link } from "react-router-dom"
import '../../styles/navbar.scss'
import companyLogo from "../../assets/logo.svg"

function Header() {
    return(
        <header>
        <nav className="navbar">
            <img src={companyLogo} alt="logo de Kasa" className="navbar__logo"/>
            <div>
            <Link to='/' className="navbar__link">Acceuil</Link>
            <Link to='/about' className="navbar__link">À propos</Link>
            </div>
        </nav>
        </header>
    )

}

export default Header