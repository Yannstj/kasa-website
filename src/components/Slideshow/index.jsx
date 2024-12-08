import { fas, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import '../../styles/logement.scss'

function Slideshow({ id, title, pictures, location, tags, host, rating }) {
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
  //Create a Rating component with a condition of display as parameter
  const RatingComponent = ({ isColored }) => (
    <FontAwesomeIcon
      className={`default__star ${isColored ? 'colored__star' : ''}`}
      icon={faStar}
    />
  )
  // Create a function that render star from one color to another using "rating"
  // data which is a string by default
  const renderStars = (Component, count, rate) => {
    const numeriseRate = parseInt(rate)
    return Array.from({ length: count }).map((_, index) => (
      <Component key={index} isColored={index < numeriseRate} />
    ))
  }
  return (
    <main className="slideshow">
      {currentLocation.pathname.includes(`/logement/${id}`)}? (
      <div>
        <section className="carrousel">
          <div className="carrousel__image">
            <img src={pictures[currentIndex]} alt={title} />
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
          </div>
        </section>
        <section className="details">
          <div className="details__main">
            <div className="details__housing">
              <h1 className="details__title">{title}</h1>
              <h2 className="details__location">{location}</h2>
            </div>
            <div className="details__owner">
              {/* séparation du nom et prénom avec split */}
              <h3 className="details__owner__name">
                <div className="details__owner__name__part">
                  {host.name.split(' ')[0]}
                </div>
                <div className="details__owner__name__part details__owner__name__part__test">
                  {host.name.split(' ')[1]}
                </div>
              </h3>
              <img
                className="details__owner__picture"
                src={host.picture}
                alt={host.name}
              />
            </div>
          </div>
          <div className="details__additional">
            <ul className="tags">
              {tags.map((tag, index) => (
                <li key={index} className="tags__item">
                  {tag}
                </li>
              ))}
            </ul>
            <div className="starIcon">
              {renderStars(RatingComponent, 5, rating)}
            </div>
          </div>

          {/* .map
                  <Mycomponent props1=fuefun props2/>
                */}
        </section>
      </div>
      ) : null
    </main>
  )
}

export default Slideshow
