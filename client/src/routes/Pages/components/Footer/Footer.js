
import logo from '../../../assets/images/logo.png';
import './Footer.scss';
const Footer = () => (
  <footer>
    <div>
      <a href="https://metrdive.herokuapp.com" aria-label="DigitalOcean" target="_blank" rel="noreferrer">
      <img
            src={logo}
            alt="Xero Extended"
            style="width: 250px; height: 54px;"
            width="250px"
            height="54px"
          />
      </a>
    </div>

    <div>
      <span>
        © 2022 - present&nbsp;
        <a href="https://sarowarsaurav.com" target="_blank" rel="noreferrer">
          Xero Extended
        </a>
        .&nbsp;
      </span>
      
      <div>
        Designed & Developed for Battle of Minds 2022
      </div>
    </div>
  </footer>
);

export default Footer;
