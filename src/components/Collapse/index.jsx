// import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PropTypes from 'prop-types'
// import { useState } from 'react'
// import '../../styles/collapse.scss'
// //import '..styles/collapseSideshow.scss'

// function Collapse({ title, content}) {
//   //const title = title
//   const [isOpen, setIsOpen] = useState({})
//   const toggleCollapse = (key) => {
//     setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }))
//   }
//   return (
//     <details className="collapse" key={key} open={setIsOpen[key]}>
//       <summary className="collapse__title" onClick={(e) => e.preventDefault()}>
//         <h2 className="collapse__title__content">{title}</h2>
//         <span
//           className="collapse__button"
//           onClick={(e) => {
//             e.stopPropagation()
//             toggleCollapse(key)
//           }}
//         >
//           <FontAwesomeIcon
//             icon={faChevronUp}
//             className={`collapse__icon ${
//               isOpen[key] ? 'collapse__icon__rotate' : ''
//             }`}
//           />
//         </span>
//       </summary>
//       {isOpen[key] && (
//         <div className="collapse__content">
//           <p>{content}</p>
//         </div>
//       )}
//     </details>
//   )
// }

// Collapse.propTypes = {
//   collapseContent: PropTypes.array,
// }

// export default Collapse
// import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import PropTypes from 'prop-types'
// import { useState } from 'react'
// import '../../styles/collapse.scss'

// function Collapse({ title, content, collapseKey }) {
//   const [isOpen, setIsOpen] = useState({})

//   const toggleCollapse = (key) => {
//     setIsOpen((prev) => ({ ...prev, [key]: !prev[key] }))
//   }

//   return (
//     <details className="collapse" open={isOpen[collapseKey]}>
//       <summary className="collapse__title" onClick={(e) => e.preventDefault()}>
//         <h2 className="collapse__title__content">{title}</h2>
//         <span
//           className="collapse__button"
//           onClick={(e) => {
//             e.stopPropagation()
//             toggleCollapse(collapseKey)
//           }}
//         >
//           <FontAwesomeIcon
//             icon={faChevronUp}
//             className={`collapse__icon ${
//               isOpen[collapseKey] ? 'collapse__icon__rotate' : ''
//             }`}
//           />
//         </span>
//       </summary>
//       {isOpen[collapseKey] && (
//         <div className="collapse__content">
//           <p>{content}</p>
//         </div>
//       )}
//     </details>
//   )
// }

// Collapse.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string.isRequired,
//   collapseKey: PropTypes.string.isRequired,
// }

// export default Collapse

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
        <span
          className="collapse__button"
          onClick={(e) => {
            //e.stopPropagation()
            toggleCollapse()
          }}
        >
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
  content: PropTypes.string.isRequired,
}

export default Collapse
