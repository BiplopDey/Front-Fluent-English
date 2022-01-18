import { Component } from "react";
import { Link } from "react-router-dom";
import home from "../assets/ico/casa.png";
import create from "../assets/ico/page.png";

function Navbar() {
  const navbar = (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <button className="nav-link active" aria-current="page">
              <Link to="/">Home</Link>
            </button>
            <button className="nav-link">
              <Link to="/create">Create</Link>
            </button>
            <button className="nav-link">
              <Link to="/favorites">Favorites</Link>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );

  const oldNavbar = (
    <div className="ct-header">
      <Link to="/">
        <img className="img-logo" src={home} alt="logo" />
      </Link>
      <Link to="/create">
        <img className="img-logo" src={create} alt="logo" />
      </Link>
    </div>
  );
  return navbar;
}

export default Navbar;
