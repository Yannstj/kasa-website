import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../styles/components/star.scss'

function Star({ isColored }) {
  return (
    <FontAwesomeIcon
      icon={faStar}
      className={`star ${isColored ? 'star__colored' : ''} `}
    />
  )
}

export default Star
