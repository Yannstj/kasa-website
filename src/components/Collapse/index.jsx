import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import '../../styles/collapse.scss'

function Collapse({ collapseContent }) {
  return (
    <div>
      {collapseContent.map(({ title, content, key }) => (
        <section className="collapse" key={key}>
          <div className="collapse__title">
            <h2>{title}</h2>
            <button className="collapse__button" type="button">
              <FontAwesomeIcon icon={faChevronUp} className="collapse__icon" />
            </button>
          </div>
          <div className="collapse__content">
            <p>{content}</p>
          </div>
        </section>
      ))}
    </div>
  )
}

Collapse.propTypes = {
  collapseContent: PropTypes.array,
}

export default Collapse
