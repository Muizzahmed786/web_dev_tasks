import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Navbar({ onAbout, onProjects, onContact }) {
  return (
    <>
      <nav className="navbar-container">
        
        
        <div className='logo'>
          <img src="./src/assets/logo.png" alt="Data Alchemists logo"/>
        </div>

        
        <div className="nav-bar">
          <ul className="navigation-links">
            <li onClick={onAbout}>About</li>
            <li onClick={onProjects}>Projects</li>
            <li onClick={onContact}>Contact</li>
          </ul>
        </div>

        
        <div className="contacts">
          <a href='https://github.com/The-Data-Alchemists-Manipal' target='_blank'>
            <FaGithub style={{marginRight: '8px'}} />
          </a>
          <a href="https://www.instagram.com/tda.manipal/?hl=en">
            <FaInstagram style={{marginRight: '8px'}} />
          </a>
          <a href="https://in.linkedin.com/company/the-data-alchemists">
            <FaLinkedin />
          </a>
        </div>
        
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
