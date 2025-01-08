import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import Collapse from '../../components/Collapse'
import Slideshow from '../../components/Slideshow'
import { logementList } from '../../data/logementList'
import '../../styles/truelogement.scss'

function Logement() {
  const params = useParams()
  const urlId = params.id

  let navigate = useNavigate()
  let currentData = []
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
        location={currentData.location}
        tags={currentData.tags}
        host={currentData.host}
        rating={currentData.rating}
      />
      <div className="collapseContainer">
        <Collapse
          key="description"
          title="Description"
          content={currentData.description}
        />
        <Collapse
          key="equipment"
          title="Équipements"
          content={currentData.equipments}
        />
      </div>
    </div>
  )
}

export default Logement
