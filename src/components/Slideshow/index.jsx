// import { useLocation } from 'react-router-dom'
// // import Collapse from '../../components/Collapse'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import '../../styles/logement.scss'

// function Slideshow({ logement }) {

//   const currentlocation = useLocation()

//   function carrouselSilde(pictures) {
//     for (let i = 0; i < pictures.lenght; i++) {
//       let currentPicture = pictures[i]
//       //return currentPicture
//       //console.log(i)
//     }
//   }

//   return (
//     <main className="slideshowContainer">
//       <section>
//         {logement.map(({ id, title, cover, pictures, location, tags }) =>
//           currentlocation.pathname.includes(`/logement/${id}`) ? (
//             <div className="carrousel">
//               <div className="carrousel__image" key={id}>
//                 <FontAwesomeIcon
//                   icon={fas.faChevronLeft}
//                   className="carrousel__left__arrow"
//                   onClick={carrouselSilde(pictures)}
//                 />
//                 <FontAwesomeIcon
//                   icon={fas.faChevronRight}
//                   className="carrousel__right__arrow"
//                 />
//                 <img src={cover} alt={title} />
//               </div>

//               <h1>{title}</h1>
//               <h2>{location}</h2>
//               <ul className="carrousel__tags">
//                 <li>{tags}</li>
//               </ul>
//             </div>
//           ) : null
//         )}
//       </section>
//     </main>
//   )
// }

// export default Slideshow
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import '../../styles/logement.scss'

function Slideshow({ logement }) {
  const currentLocation = useLocation()
  const [currentIndex, setCurrentIndex] = useState(0)

  function handleNext(pictures) {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  function handlePrevious(pictures) {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  return (
    <main className="slideshow">
      {logement.map(({ id, title, pictures, location, tags, host, rating }) =>
        currentLocation.pathname.includes(`/logement/${id}`) ? (
          <div key={id}>
            <section className="carrousel">
              <div className="carrousel__image">
                <img src={pictures[currentIndex]} alt={title} />
                <FontAwesomeIcon
                  icon={fas.faChevronLeft}
                  className="carrousel__left__arrow"
                  onClick={() => handlePrevious(pictures)}
                />
                <FontAwesomeIcon
                  icon={fas.faChevronRight}
                  className="carrousel__right__arrow"
                  onClick={() => handleNext(pictures)}
                />
              </div>
            </section>
            <section className="details">
              <div className="details__main">
                <h1 className="details__title">{title}</h1>
                <h2 className="details__location">{location}</h2>
                <div className="details__owner">
                  <h3>{host.name}</h3>
                  <img src={host.picture} alt={host.name} />
                </div>
              </div>
              <div className="details__additional">
                <ul className="tags">
                  {tags.map((tag, index) => (
                    <li key={index} className="tags__item">
                      {tag}
                    </li>
                  ))}
                </ul>
                <span>{rating}</span>
              </div>
            </section>
          </div>
        ) : null
      )}
    </main>
  )
}

export default Slideshow
