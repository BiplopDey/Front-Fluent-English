import { Component } from "react";
import Card from "./card";
import Cards from "./cards";
import Navbar from "./navbar";
import data from "../assets/data/cards.json";
class Home extends Component {
  state = {
    cards: data,
  };
  render() {
    return (
      <div>
        <Navbar />
        <Cards data={this.state.cards} />
      </div>
    );
  }
}

export default Home;
