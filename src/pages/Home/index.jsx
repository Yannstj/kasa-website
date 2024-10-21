import cliff from '../../assets/banner-cliff.jpg'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { logementList } from '../../data/logementList'
import '../../styles/card.scss'
import '../../styles/home.scss'

function Home() {
  return (
    <div className="home">
      <Banner bannerImage={cliff} />
      <Card logement={logementList} />
    </div>
  )
}

export default Home
