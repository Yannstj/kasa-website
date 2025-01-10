import cliff from '../../assets/banner-cliff.jpg'
import Banner from '../../components/Banner'
import Card from '../../components/Card'
import { logementList } from '../../data/logementList'
import '../../styles/pages/home.scss'

function Home() {
  return (
    <div className="home">
      <Banner bannerImage={cliff} />
      <div className="cardContainer">
        {logementList.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            cover={logement.cover}
            title={logement.title}
          />
        ))}
      </div>
    </div>
  )
}

export default Home
