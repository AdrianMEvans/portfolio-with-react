import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Adrian Evans Profile</h1>
      <div className="links">
        <NavLink
          to="/portfolio"
          activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "#f1356d"
          }}
        >
          Portfolio
          </NavLink>
        <NavLink 
        to="/contact"
        activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "#f1356d"
          }}
        >
          Contact
          </NavLink>
          <NavLink 
        exact to="/knowledgebase"
        activeClassName="selected"
        >
          Knowledgebase
          </NavLink>
        <NavLink 
        exact to="/"
        activeClassName="selected"
          activeStyle={{
            fontWeight: "bold",
            color: "#f1356d"
          }}
        >
          Home
          </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;