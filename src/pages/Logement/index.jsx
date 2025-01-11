import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import { logementList } from '../../data/logementList'
import '../../styles/pages/logement.scss'

function Logement() {
  let navigate = useNavigate()
  let currentData = []

  const params = useParams()
  const urlId = params.id

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
  logementList.forEach((data) => {
    if (data.id === urlId) {
      currentData = data
    }
  })

  useEffect(() => {
    if (Array.isArray(currentData)) {
      navigate('/erreur')
    }
  })
  return (
    <div className="logement">
      <Slideshow
        key={currentData.id}
        id={currentData.id}
        title={currentData.title}
        pictures={currentData.pictures}
      />
      <section className="details">
        <div className="details__main">
          <div className="details__housing">
            <h1 className="details__title">{currentData.title}</h1>
            <h2 className="details__location">{currentData.location}</h2>

            <div className="tagsContainer">
              <ul className="tags">
                {currentData.tags.map((tag, index) => (
                  <li key={index} className="tags__item">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="details__plus">
            <div className="starIcon">
              {renderStars(RatingComponent, 5, currentData.rating)}
            </div>
            <div className="details__plus__owner">
              <h3 className="details__plus__owner__name">
                <div className="details__plus__owner__name__part">
                  {currentData.host.name.split(' ')[0]}
                </div>
                <div className="details__plus__owner__name__part">
                  {currentData.host.name.split(' ')[1]}
                </div>
              </h3>
              <img
                className="details__plus__owner__picture"
                src={currentData.host.picture}
                alt={currentData.host.name}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="collapseContainer">
        <Collapse
          key="description"
          title="Description"
          content={currentData.description}
          containerDisplay="row"
        />
        <Collapse
          key="equipment"
          title="Équipements"
          content={currentData.equipments}
          containerDisplay="row"
        />
      </div>
    </div>
  )
}

export default Logement
