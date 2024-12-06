import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img
            src="/logo.png"
            alt="logo"
            width="170"
            height="150"
            className="d-inline-block align-text-top"
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/celdas"
                className="nav-link"
                activeClassName="active"
                end
              >
                Celdas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/vehiculos"
                className="nav-link"
                activeClassName="active"
              >
                Vehículos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/usuarios"
                className="nav-link"
                activeClassName="active"
              >
                Usuarios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/pagos"
                className="nav-link"
                activeClassName="active"
              >
                Pagos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
