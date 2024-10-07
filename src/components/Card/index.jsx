import { logementList } from '../../data/logementList'
import '../../styles/card.scss'

function Card() {
  return (
    <div className="cardContainer">
      <section className="cardWrapper">
        {logementList.map((logement) => (
          <figure className="card" key={logement.id}>
            <img src={logement.cover} alt="tempAlt" className="card__cover" />
            <figcaption className="card__title">{logement.title}</figcaption>
          </figure>
        ))}
      </section>
    </div>
  )
}

export default Card
