import { Component } from "react";
import Navbar from "./navbar";

class Create extends Component {
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

export default Create;
