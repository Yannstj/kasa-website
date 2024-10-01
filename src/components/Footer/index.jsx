import companyLogo from '../../assets/logo.svg'
import '../../styles/footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div>
        <img src={companyLogo} alt="logo de Kasa" className="footer__logo" />
      </div>
      <span className="footer__copyright">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  )
}

export default Footer
