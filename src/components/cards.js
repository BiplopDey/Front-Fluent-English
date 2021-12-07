import { Component } from "react";
import Card from "./card";

class Cards extends Component {
  render() {
    return (
      <div>
        {this.props.data.cards.map((card, index) => {
          return (
            <Card
              imgURL={card.imgURL}
              title={card.imgName}
              user={card.imgUser}
              index={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Cards;
