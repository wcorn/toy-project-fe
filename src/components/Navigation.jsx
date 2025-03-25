// src/components/Navigation.jsx
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <ul className="navbar-nav ms-auto">
      <li className="nav-item">
        <NavLink to="/time" className="nav-link">
          Time Page
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/notes" className="nav-link">
          Notes Page
        </NavLink>
      </li>
    </ul>
  );
}
