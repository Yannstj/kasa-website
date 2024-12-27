// import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PropTypes from 'prop-types'
// import { useState } from 'react'
// import '../../styles/collapse.scss'

// function Collapse({ title, content }) {
//   const [isOpen, setIsOpen] = useState(false)
//   const toggleCollapse = () => {
//     setIsOpen(!isOpen)
//   }
//   return (
//     <details className="collapse" open={isOpen}>
//       <summary className="collapse__title" onClick={(e) => e.preventDefault()}>
//         <h2 className="collapse__title__content">{title}</h2>
//         <span className="collapse__button" onClick={toggleCollapse}>
//           <FontAwesomeIcon
//             icon={faChevronUp}
//             className={`collapse__icon ${
//               isOpen ? 'collapse__icon__rotate' : ''
//             }`}
//           />
//         </span>
//       </summary>
//       {isOpen && (
//         <div className="collapse__content">
//           <p>{content}</p>
//         </div>
//       )}
//     </details>
//   )
// }

// Collapse.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.node.isRequired,
//   //content can be JSX or texte
// }

// export default Collapse

// import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PropTypes from 'prop-types'
// import { useState } from 'react'
// import '../../styles/collapse.scss'

// function Collapse({ title, content }) {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleCollapse = () => {
//     setIsOpen(!isOpen)
//   }

//   // function CollapseItem({content}){

//   // }

//   return (
//     <div className="collapse">
//       {/* basicaly this was details summary tag but this was create conflict
//       with open stat */}
//       <div className="collapse__title">
//         <h2 className="collapse__title__content">{title}</h2>
//         <span className="collapse__button" onClick={toggleCollapse}>
//           <FontAwesomeIcon
//             icon={faChevronUp}
//             className={`collapse__icon ${
//               isOpen ? 'collapse__icon__rotate' : ''
//             }`}
//           />
//         </span>
//       </div>
//       {isOpen && (
//         <div className="collapse__content">
//           {/* <p>{content}</p> */}
//         </div>
//       )}
//     </div>
//   )
// }

// Collapse.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.node.isRequired,
// }

// export default Collapse
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="collapse">
      <div className="collapse__title">
        <h2 className="collapse__title__content">{title}</h2>
        <span className="collapse__button" onClick={toggleCollapse}>
          <FontAwesomeIcon
            icon={faChevronUp}
            className={`collapse__icon ${
              isOpen ? 'collapse__icon__rotate' : ''
            }`}
          />
        </span>
      </div>
      {isOpen && (
        <div className="collapse__content">
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
      )}
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string, // Une chaîne de caractères
    PropTypes.arrayOf(PropTypes.node), // Un tableau d'éléments React ou de chaînes
  ]).isRequired,
}

export default Collapse
