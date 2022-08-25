import '../styles/Footer.scss';
import { NavLink } from 'react-router-dom';
import Instructions from './Instructions';
import Options from './Options';


const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li className="footer__menu-item">
            <NavLink
              to="/"
              className={(isActive) =>
                "footer__menu-link active" 
                 + (!isActive ? ' unselected' : 'footer__menu-link ')
              }
            >
              ¡A jugar! 
            </NavLink>
            
          </li>
          <li className="footer__menu-item">
          <NavLink
              to="/instructions"
              className={(isActive) =>
                "footer__menu-link active" 
                 + (!isActive ? 'unselected ' : 'active')
              }
              element={<Instructions />}
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
              element={<Options />}
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
