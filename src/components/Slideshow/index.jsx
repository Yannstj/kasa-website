import { fas, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { useLocation } from 'react-router-dom'
import Collapse from '../../components/Collapse'
import '../../styles/logement.scss'

function Slideshow({
  id,
  title,
  pictures,
  location,
  tags,
  host,
  rating,
  description,
  equipments,
}) {
  const currentLocation = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)
  let navigate = useNavigate()

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

  const RatingComponent = ({ isColored }) => (
    <FontAwesomeIcon
      className={`default__star ${isColored ? 'colored__star' : ''}`}
      icon={faStar}
    />
  )

  const renderStars = (Component, count, rate) => {
    const numeriseRate = parseInt(rate)
    return Array.from({ length: count }).map((_, index) => (
      <Component key={index} isColored={index < numeriseRate} />
    ))
  }

  return currentLocation.pathname.includes(`/logement/${id}`) ? (
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
      <section className="details">
        <div className="details__main">
          <div className="details__housing">
            <h1 className="details__title">{title}</h1>
            <h2 className="details__location">{location}</h2>
          </div>
          <div className="details__owner">
            <h3 className="details__owner__name">
              <div className="details__owner__name__part">
                {host.name.split(' ')[0]}
              </div>
              <div className="details__owner__name__part">
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
        <div className="collapseContainer">
          <Collapse
            key="description"
            title="Description"
            content={description}
          />
          <Collapse key="equipment" title="Équipements" content={equipments} />
        </div>
      </section>
    </main>
  ) : (
    () => {
      navigate('/erreur')
    }
  )
}

export default Slideshow
