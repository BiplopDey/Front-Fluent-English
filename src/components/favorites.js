import { Component } from "react";
import Navbar from "./navbar";

class Favorites extends Component {
  render() {
    return (
      <div>
        <Navbar />
        Create
        <input type="text"></input>
      </div>
    );
  }
}

export default Favorites;
