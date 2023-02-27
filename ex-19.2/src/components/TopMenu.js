import React from "react";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : undefined)}
            to="/"
          >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default TopMenu;
