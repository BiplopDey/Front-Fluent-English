import { Component } from "react";
import Card from "./card";

class Cards extends Component {
  render() {
    return (
      <div className="cards">
        {this.props.data.cards.map((card, index) => {
          return (
            <Card
              imgURL={card.imgURL}
              title={card.imgName}
              name={card.userName}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Cards;
