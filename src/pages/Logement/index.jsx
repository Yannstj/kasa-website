import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import Star from '../../components/Star'
import { logementList } from '../../data/logementList'
import '../../styles/pages/logement.scss'

function Logement() {
  let navigate = useNavigate()
  let currentData = null

  const params = useParams()
  const urlId = params.id
  // Trouver les données correspondantes
  currentData = logementList.find((data) => data.id === urlId)

  useEffect(() => {
    // Si aucune donnée n'est trouvée, redirige vers la page d'erreur
    if (!currentData) {
      navigate('/erreur')
    }
  }, [currentData, navigate])

  // Si currentData est null (en attente de redirection), retourner null
  if (!currentData) {
    return null
  }
  const rate = parseInt(currentData.rating)
  const stars = Array.from({ length: 5 }, (_, index) => (
    <Star key={index} isColored={index < rate} />
  ))

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
            <div className="ratingContainer">{stars}</div>
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
