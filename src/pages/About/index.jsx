import montain from '../../assets/banner-montain.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { aboutData } from '../../data/aboutData'
import '../../styles/about.scss'
import '../../styles/banner.scss'

function About() {
  return (
    <div className="about">
      <Banner bannerImage={montain} />
      <Collapse collapseContent={aboutData} />
    </div>
  )
}

export default About
