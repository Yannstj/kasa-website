import montain from '../../assets/banner-montain.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { aboutData } from '../../data/aboutData'
import '../../styles/about.scss'
import '../../styles/banner.scss'

//About page
function About() {
  return (
    <div className="about">
      <Banner bannerImage={montain} />
      {aboutData.map((about, index) => (
        <Collapse key={index} title={about.title} content={about.content} />
      ))}
    </div>
  )
}

export default About
