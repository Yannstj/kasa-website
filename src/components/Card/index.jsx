import { logementList } from '../../data/logementList'
import '../../styles/card.scss'

function Card() {
    return(
        <section className='cardWrapper'>
            {logementList.map((logement) => (<div className="card" key={logement.id}>
            <h2 className="card__title">{logement.title}</h2>
        </div>))

            }
        
        </section>
    )
}
export default Card