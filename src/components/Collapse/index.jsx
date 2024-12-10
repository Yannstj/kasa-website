import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import '../../styles/collapse.scss'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <details className="collapse" open={isOpen}>
      <summary className="collapse__title" onClick={(e) => e.preventDefault()}>
        <h2 className="collapse__title__content">{title}</h2>
        <span className="collapse__button" onClick={toggleCollapse}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`collapse__icon ${
              isOpen ? 'collapse__icon__rotate' : ''
            }`}
          />
        </span>
      </summary>
      {isOpen && (
        <div className="collapse__content">
          <p>{content}</p>
        </div>
      )}
    </details>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  //content can be JSX or texte
}

export default Collapse
