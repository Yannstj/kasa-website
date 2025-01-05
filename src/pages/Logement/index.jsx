import Slideshow from '../../components/Slideshow'
//import Collapse from '../../components/Collapse'
//import { useEffect } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import { logementList } from '../../data/logementList'

function Logement() {
  let navigate = useNavigate()
  let params = useParams()
  const urlId = params.id

  console.log(urlId)

  let currentData = []
  logementList.forEach((data) => {
    if (data.id === urlId) {
      currentData = data
    }
  })

  console.log(currentData)

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
        description={currentData.description}
        equipments={currentData.equipments}
      />
    </div>
  )
}

export default Logement
