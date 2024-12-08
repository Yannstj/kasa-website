import Slideshow from '../../components/Slideshow'
//import Collapse from '../../components/Collapse'
import { logementList } from '../../data/logementList'

function Logement() {
  return (
    <div className="logement">
      {logementList.map((id, title, pictures, location, tags, host, rating) => (
        <Slideshow
          key={id}
          title={title}
          src={pictures}
          location={location}
          tags={tags}
          host={host}
          rating={rating}
        />
      ))}
      {/* <Slideshow logement={logementList} /> */}
      {/* <Collapse
            className="collapseSideshow"
            //use new params for collapse component content
            collapseContent={[
              {
                title: 'Description',
                content: <p>{description}</p>,
                key: 'description',
              },
              {
                title: 'Équipements',
                // mapping equipements to get them all
                content: (
                  <ul>
                    {equipments.map((equipment, index) => (
                      <li key={index}>{equipment}</li>
                    ))}
                  </ul>
                ),
                key: 'equipments',
              },
            ]}
          /> */}
    </div>
  )
}

export default Logement
