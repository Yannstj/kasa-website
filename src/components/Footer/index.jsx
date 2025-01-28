import companyLogo from '../../assets/logo.svg'
import '../../styles/components/footer.scss'
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-elements">
        <img src={companyLogo} alt="logo de Kasa" className="footer__logo" />
      </div>
      <span className="footer__copyright">
        © 2020 Kasa. All rights reserved
      </span>
    </footer>
  )
}

export default Footer
