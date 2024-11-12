import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import '../../styles/collapse.scss'

function Collapse({ collapseContent }) {
  const [isOpen, setIsOpen] = useState({})

  const toggleCollapse = (key) => {
    setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div>
      {collapseContent.map(({ title, content, key }) => (
        <details className="collapse" key={key} open={setIsOpen[key]}>
          <summary
            className="collapse__title"
            onClick={(e) => e.preventDefault()}
          >
            <h2>{title}</h2>
            <span
              className="collapse__button"
              onClick={(e) => {
                e.stopPropagation()
                toggleCollapse(key)
              }}
            >
              <FontAwesomeIcon
                icon={faChevronUp}
                className={`collapse__icon ${
                  isOpen[key] ? 'collapse__icon__rotate' : ''
                }`}
              />
            </span>
          </summary>
          {isOpen[key] && (
            <div className="collapse__content">
              <p>{content}</p>
            </div>
          )}
        </details>
      ))}
    </div>
  )
}

Collapse.propTypes = {
  collapseContent: PropTypes.array,
}

export default Collapse
