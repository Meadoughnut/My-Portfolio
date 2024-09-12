import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <p>Meadin Menbere</p>
      <div className="menu-icon" onClick={toggleMenu}>
      {menuOpen ? '✖' : '☰'} {/* X icon when open, three dots when closed */}
      </div>
      <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>About Me</Link>
        <Link to="/portfolio" className={location.pathname === '/portfolio' ? 'active' : ''}>Portfolio</Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link>
        <Link to="/resume" className={location.pathname === '/resume' ? 'active' : ''}>Resume</Link>
      </div>
    </nav>
  );
};

export default Navigation;
