import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import '../../styles/card.scss'

function Card({ logement }) {
  return (
    <div className="cardContainer">
      <section className="cardWrapper">
        {logement.map(({ id, cover, title }) => (
          <NavLink to={`/logement/${id}`} className="" key={id}>
            <figure className="card">
              <img src={cover} alt="housing" className="card__cover" />
              <figcaption className="card__title">{title}</figcaption>
            </figure>
          </NavLink>
        ))}
      </section>
    </div>
  )
}

Card.propTypes = {
  logement: PropTypes.array,
}

export default Card
