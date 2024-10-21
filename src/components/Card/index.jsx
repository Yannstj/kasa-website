import PropTypes from 'prop-types'
import '../../styles/card.scss'

function Card({ logement }) {
  return (
    <div className="cardContainer">
      <section className="cardWrapper">
        {logement.map(({ id, cover, title }) => (
          <figure className="card" key={id}>
            <img src={cover} alt="tempAlt" className="card__cover" />
            <figcaption className="card__title">{title}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  )
}

Card.propTypes = {
  logement: PropTypes.array,
}

export default Card
