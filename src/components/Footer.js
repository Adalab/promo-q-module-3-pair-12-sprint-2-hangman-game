import '../styles/Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink
              to="/faq"
              className={(isActive) =>
                "footer__menu-link active" 
                 + (!isActive ? ' unselected' : 'footer__menu-link ')
              }
            >
              FAQs
            </NavLink>
            
          </li>
          <li className="footer__menu-item">
          <NavLink
              to="/instructions"
              className={(isActive) =>
                "footer__menu-link active" 
                 + (!isActive ? 'unselected ' : 'active')
              }
            >
              ¿Como  se  juega?
            </NavLink>
          </li>
          <li className="footer__menu-item">
          <NavLink
              to="/options"
              className={(isActive) =>
                "footer__menu-link" 
                 + (!isActive ? ' unselected' : '')
              }
            >
              Más opciones
            </NavLink>
          </li>
        </ul>
      </nav>
      <small className="footer__copy">© Adalab</small>
    </footer>
  );
};
export default Footer;
