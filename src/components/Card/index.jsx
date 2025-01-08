import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../styles/card.scss'

function Card({ id, cover, title }) {
  return (
    <section className="cardWrapper">
      <NavLink to={`/logement/${id}`} className="">
        <figure className="card">
          <img src={cover} alt="housing" className="card__cover" />
          <figcaption className="card__title">{title}</figcaption>
        </figure>
      </NavLink>
    </section>
  )
}

Card.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
