import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../styles/components/card.scss'

function Card({ id, cover, title }) {
  return (
    <section className="cardWrapper">
      <NavLink to={`/logement/${id}`}>
        <figure className="card">
          <img src={cover} alt="housing" className="card__cover" />
          <figcaption className="card__title">{title}</figcaption>
        </figure>
      </NavLink>
    </section>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
