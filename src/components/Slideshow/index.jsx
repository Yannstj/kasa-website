import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/components/slideshow.scss'
//

function Slideshow({ id, title, pictures }) {
  const currentLocation = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleNext(pictures) {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  function handlePrevious(pictures) {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  return (
    currentLocation.pathname.includes(`/logement/${id}`) && (
      <main className="slideshow">
        <section className="carrousel">
          <div className="carrousel__image">
            <img src={pictures[currentIndex]} alt={title} />
            {pictures.length > 1 && (
              <>
                <FontAwesomeIcon
                  icon={fas.faChevronLeft}
                  className="carrousel__left__arrow"
                  onClick={() => handlePrevious(pictures)}
                />
                <FontAwesomeIcon
                  icon={fas.faChevronRight}
                  className="carrousel__right__arrow"
                  onClick={() => handleNext(pictures)}
                />
                <div className="carrousel__index">
                  <p>{`${currentIndex + 1}/${pictures.length}`}</p>
                </div>
              </>
            )}
          </div>
        </section>
      </main>
    )
  )
}

Slideshow.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  pictures: PropTypes.array.isRequired,
}

export default Slideshow
