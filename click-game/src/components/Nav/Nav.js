import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav className="navbar">
      <ul>
        <li>
          <a className="Brand">Clicky Game</a>
        </li>
        <li>
        </li>
        <li>
          <strong>Score: {props.count}</strong> 
        </li>
      </ul>
  </nav>
);

export default Nav;
