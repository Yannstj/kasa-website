import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/collapse.scss'

function Collapse() {
  return (
    <section className="collapse">
      <div className="collapse__title">
        <h2>Fiabilité</h2>
        <button className="collapse__button" type="button">
          <FontAwesomeIcon icon={faChevronUp} className="collapse__icon" />
        </button>
      </div>
      <div className="collapse__content">
        <p>
          Les annonces postées sur Kasa garantissent une fiabilité total. Les
          photos sont conformes aux logements, et toutes les information sont
          régulièrement vérifiées par nos équipes.
        </p>
      </div>
    </section>
  )
}

export default Collapse
