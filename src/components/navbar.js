import { Component } from "react";
import { Link } from "react-router-dom";
import home from "../assets/ico/casa.png";
import create from "../assets/ico/page.png";

class Navbar extends Component {
  render() {
    return (
      <div className="ct-header">
        <Link to="/">
          <img className="img-logo" src={home} alt="logo" />
        </Link>
        <Link to="/create">
          <img className="img-logo" src={create} alt="logo" />
        </Link>
      </div>
    );
  }
}

export default Navbar;
