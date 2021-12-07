import { Component } from "react";
import Card from "./card";
import Navbar from "./navbar";

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Card title="hola" name="Mundo" imgURL="https://img.theculturetrip.com/450x/smart/wp-content/uploads/2017/06/barcelona-959076_1280.jpg" />
      </div>
    );
  }
}

export default Home;
