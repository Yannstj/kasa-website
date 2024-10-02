import { logementList } from '../../data/logementList'
import '../../styles/card.scss'

// function Card() {
//   return (
//     <div className="cardBox">
//       <figure className="cardWrapper">
//         {logementList.map((logement) => (
//           <div className="card" key={logement.id}>
//             <img src={logement.cover} alt="tempAlt" className="card__cover" />
//             <figcaption className="card__title">{logement.title}</figcaption>
//           </div>
//         ))}
//       </figure>
//     </div>
//   )
// }

function Card() {
  return (
    <div className="cardBox">
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
