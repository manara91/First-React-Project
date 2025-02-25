import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../assets/images/logo.png";

import NavItem, { NavItemDropdown } from "../../Components/NavItem/NavItem";

const Header = (props) => {
  return (
    <>
      <div className="navbar navbar-expand-md navbar-dark cyrog-navbar ">
        <div className="container">
        <Link to="/" className="navbar-brand">
        <img src={logo} alt="Logo" />
                </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <NavItem>
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </NavItem>
              <NavItem>

                <Link to="/browse" className="nav-link">
                  Browse
                </Link>
              </NavItem>

              <NavItemDropdown>
                <a
                  href="/#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="/#" className="dropdown-item">
                      Fortnite
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="dropdown-item">
                      Call of Duty
                    </a>
                  </li>
                </ul>
              </NavItemDropdown>

              <NavItem>
                <a href="#hero" className="nav-link">
                  Streams
                </a>
              </NavItem>

              <NavItem>
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </NavItem>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
