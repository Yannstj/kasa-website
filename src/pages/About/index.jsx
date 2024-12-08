import montain from '../../assets/banner-montain.jpg'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import { aboutData } from '../../data/aboutData'
import '../../styles/about.scss'
import '../../styles/banner.scss'

//About page
function About() {
  const aboutCollapse = aboutData.map((about) => (
    <Collapse
      title={about.title}
      content={about.content}
      key={about.key}
      //collapseKey={about.key}
    />
  ))

  return (
    <div className="about">
      <Banner bannerImage={montain} />
      <div className="collapseContainer">{aboutCollapse}</div>
    </div>
  )
}

export default About
