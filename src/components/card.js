import { Component } from "react";
import eye from "../assets/ico/eye.svg";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="ct-card">
          <img
            src={this.props.imgURL}
            className="image-card"
            alt={this.props.name}
          />
          <div>
            <button>
              <i class="bi-alarm"></i>
            </button>
          </div>
          <h1>{this.props.title}</h1>
          <h3>{this.props.name}</h3>
        </div>
      </div>
    );
  }
}

export default Card;
