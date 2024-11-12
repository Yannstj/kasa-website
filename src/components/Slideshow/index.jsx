import '../../styles/logement.scss'

function Slideshow({ logement }) {
  return (
    <main className="slideshowContainer">
      <section>
        <div className="carrousel">
          {logement.map(({ id, title, cover }) => (
            <div className="carrousel__image" key={id}>
              {' '}
              <img src={cover} />
              <h1>{title}</h1>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Slideshow
