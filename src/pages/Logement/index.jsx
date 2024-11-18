import Slideshow from '../../components/Slideshow'
import { logementList } from '../../data/logementList'


function Logement() {
  return (
    <div className="logement">
      <Slideshow logement={logementList} />
     
    </div>
  )
}

export default Logement
