import { NavLink } from 'react-router-dom'
import HomeIcon from '@material-ui/icons/Home';

const Footer = () => {
    return (
        <nav className="navbar">
          <h6>All rights reserved &#169; {new Date().getFullYear()} </h6>
          <div className="links">
            <NavLink to="/">
          <HomeIcon />
             </NavLink>
          </div>
        </nav>
      );
    }

export default Footer;