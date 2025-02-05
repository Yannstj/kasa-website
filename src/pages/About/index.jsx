import montain from '../../assets/banner-montain.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { aboutData } from '../../data/aboutData'
import '../../styles/pages/about.scss'

function About() {
  return (
    <div className="about">
      <Banner bannerImage={montain} />
      <div className="collapseContainer">
        {aboutData.map((about, index) => (
          <Collapse
            key={index}
            title={about.title}
            content={about.content}
            containerDisplay="column"
            cssProp="collapse__column"
            cssOpen="columnOpen"
          />
        ))}
      </div>
    </div>
  )
}

export default About
