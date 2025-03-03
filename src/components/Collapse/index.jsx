import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import '../../styles/components/collapse.scss'

function Collapse({
  title,
  content,
  containerDisplay = 'column',
  cssProp,
  cssOpen,
}) {
  const [isOpen, setIsOpen] = useState(false)
  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="collapse">
      <div className="collapse__title">
        <h2 className="collapse__title__content">{title}</h2>
        <span
          className={`collapse__button ${
            containerDisplay === 'row' ? 'collapse__button__flexrow' : ''
          }`}
          onClick={toggleCollapse}
        >
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`collapse__icon ${
              isOpen ? 'collapse__icon__rotate' : ''
            }`}
          />
        </span>
      </div>
      {/* here we use ternery operateur because there is basically two states, 
      but if we had to deal with more better use a function instead */}
      <div
        className={`${cssProp} ${isOpen ? cssOpen : ''}
        }`}
      >
        {typeof content === 'string' ? (
          <p>{content}</p>
        ) : Array.isArray(content) ? (
          <ul className="collapse__list">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string, // Une chaîne de caractères
    PropTypes.arrayOf(PropTypes.node), // Un tableau d'éléments React ou de chaînes
  ]).isRequired,
  containerDisplay: PropTypes.string.isRequired,
  cssProp: PropTypes.string.isRequired,
  cssOpen: PropTypes.string.isRequired,
}

export default Collapse
