import { useLocation } from 'react-router-dom'
// import Collapse from '../../components/Collapse'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../styles/logement.scss'

function Slideshow({ logement }) {
  const currentlocation = useLocation()

  return (
    <main className="slideshowContainer">
      <section>
        {logement.map(({ id, title, cover, location, tags }) =>
          currentlocation.pathname.includes(`/logement/${id}`) ? (
            <div className="carrousel">
              <div className="carrousel__image" key={id}>
                <FontAwesomeIcon
                  icon={fas.faChevronLeft}
                  className="carrousel__left__arrow"
                />
                <FontAwesomeIcon
                  icon={fas.faChevronRight}
                  className="carrousel__right__arrow"
                />
                <img src={cover} alt={title} />
              </div>

              <h1>{title}</h1>
              <h2>{location}</h2>
              <ul className="carrousel__tags">
                <li>{tags}</li>
              </ul>
            </div>
          ) : null
        )}
      </section>
    </main>
  )
}

export default Slideshow
