import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand" to="/">
      Happy Hour Pal
    </Link>
    <div>
      <ul className="navbar-nav">
        <li
          className={
            window.location.pathname === "/" ||
              window.location.pathname === "/loading"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/loading" className="nav-link">
            Loading
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/access"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/access" className="nav-link">
            Access
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/businessListings"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/businessListings" className="nav-link">
            (Business Listings)
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/listresults"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/listresults" className="nav-link">
            List Results
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/mapresults"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/mapresults" className="nav-link">
            Map Results
          </Link>
        </li>
        <li
          className={
            window.location.pathname === "/businessdetails"
              ? "nav-item active"
              : "nav-item"
          }
        >
          <Link to="/businessdetails" className="nav-link">
            Business Details
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
