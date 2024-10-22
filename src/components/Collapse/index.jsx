import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import '../../styles/collapse.scss'

function Collapse({ collapseContent }) {
  return (
    <div>
      {collapseContent.map(({ title, content, key }) => (
        <details className="collapse" key={key}>
          <summary className="collapse__title">
            <h2>{title}</h2>
            <span className="collapse__button">
              <FontAwesomeIcon icon={faChevronUp} className="collapse__icon" />
            </span>
          </summary>
          <div className="collapse__content">
            <p>{content}</p>
          </div>
        </details>
      ))}
    </div>
  )
}

Collapse.propTypes = {
  collapseContent: PropTypes.array,
}

export default Collapse
