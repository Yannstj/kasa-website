import { NavLink } from 'react-router-dom'
import '../../styles/pages/error.scss'

function Error() {
  return (
    <main className="errorContainer">
      <section className="error">
        <h1 className="error__title">404</h1>
        <h2 className="error__subtitle">
          Oups! La page que vous demandez n'existe pas.
        </h2>
        <NavLink to="/" className="error__navlink">
          Retourner sur la page d'accueil
        </NavLink>
      </section>
    </main>
  )
}

export default Error
