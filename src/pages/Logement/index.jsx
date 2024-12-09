import Slideshow from '../../components/Slideshow'
//import Collapse from '../../components/Collapse'

import { logementList } from '../../data/logementList'

function Logement() {
  return (
    <div className="logement">
      {logementList.map((data) => (
        <Slideshow
          key={data.id}
          id={data.id}
          title={data.title}
          pictures={data.pictures}
          location={data.location}
          tags={data.tags}
          host={data.host}
          rating={data.rating}
          description={data.description}
          equipments={data.equipments}
        />
      ))}
    </div>
  )
}

export default Logement
