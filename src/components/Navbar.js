import React from "react";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left">
            Logo
          </Link>
          <ul id="nav-mobile" className="right">
            <li>
              <Link to="sass.html">Sass</Link>
            </li>
            <li>
              <Link to="badges.html">Components</Link>
            </li>
            <li>
              <Link to="collapsible.html">JavaScript</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
