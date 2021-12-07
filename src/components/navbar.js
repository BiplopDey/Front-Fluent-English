import { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ico/casa.png";

class Navbar extends Component {
  render() {
    return (
      <div className="ct-header">
        <Link to="/" className="img-logo" src={logo} alt="logo"></Link>
      </div>
    );
  }
}
