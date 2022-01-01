import { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <img
            className="main-img-card"
            src={this.props.imgURL}
            className="image-card"
            alt={this.props.name}
          />
          <div className="buttons-container">
            <button>
              <i className="bi-alarm"></i>
            </button>
            <button>
              <i className="bi bi-trash"></i>
            </button>
            <button>
              <i className="bi bi-eye"></i>
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
