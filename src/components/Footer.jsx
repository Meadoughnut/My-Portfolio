import emailIcon from '../assets/foootericons/email.svg';
import linkedinIcon from '../assets/foootericons/linkedin.svg';
import githubIcon from '../assets/foootericons/githubfooter.svg';
import xIcon from '../assets/foootericons/x.svg';


const Footer = () => {
  return (
    <footer className="footer-section">
      <p>Designed and Developed by Meadin Menbere</p>
      <p> copyright &copy; 2024 Meadin Menbere. All rights reserved.</p>

      <a href="mailto:meadinmenbere488@gmail.com" target="_blank" rel="noopener noreferrer">
        <img src={emailIcon} alt="Email" className="footer-icon" />
      </a>
      <a href="https://github.com/Meadoughnut" target="_blank" rel="noopener noreferrer">
        <img src={githubIcon} alt="GitHub" className="footer-icon" />
      </a>
      <a href="https://www.linkedin.com/in/meadin-menbere/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
      </a>
      <a href="https://x.com/wondermeowx" target="_blank" rel="noopener noreferrer">
        <img src={xIcon} alt="X (Twitter)" className="footer-icon" />
      </a>
      
    </footer>
  );
};

export default Footer;
