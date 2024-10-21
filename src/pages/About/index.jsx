import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import '../../styles/about.scss'
import '../../styles/banner.scss'

function About() {
  return (
    <div className="about">
      <Banner />
      <Collapse />
      <Collapse />
      <Collapse />
      <Collapse />
      <Collapse />
      <Collapse />
      {/* test with 2 collapse elem */}
    </div>
  )
}

export default About
