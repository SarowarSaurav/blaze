
import lpic from '../../../assets/images/logo.png';
import './Footer.scss';
const Footer = () => (
  <footer>
    <div>
      <a href="https://metrdive.herokuapp.com" aria-label="DigitalOcean" target="_blank" rel="noreferrer">
        <img class="digital-ocean" src={lpic} alt="Powered by Xero Extended" />
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
