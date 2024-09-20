import '../../styles/banner.scss'
//import bannerImage from '../../assets/porco_rosso.webp'

function Banner() {
    return(
       <section className="bannerWrapper">
        <div className="banner">
            {/* <img src={bannerImage} alt="en recherche d'inspi" className="banner__background"></img> */}
            <h1 className="banner__title">Chez vous partous ailleurs</h1>
        </div>
       </section>
    )
}

export default Banner