import "./App.css";
import React, { Component } from "react";
import robot from "./robot.png";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Wajih Bou Ali",
        imgSRC: robot,
        bio: "This is me",
        profession: "Student",
      },
      show: false,
      time: 0,
    };
    this.handleShow = () => {
      this.setState({ show: !this.state.show });
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState(() =>
        this.state.show ? { time: this.state.time + 1 } : 0
      );
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleShow} className="but">
          {" "}
          SHOW ME
        </button>
        {this.state.show ? (
          <div>
            <h1
              style={{
                fontStyle: "bold",
                color: "brown",
                textAlign: "center",
              }}
            >
              {this.state.person.fullName}
            </h1>
            <img
              src={this.state.person.imgSRC}
              alt="pic"
              style={{
                fontStyle: "bold",
                color: "aqua",
                width: "300px",
                height: "300px",
                borderRadius: "20px",
                textAlign: "center",
              }}
            />
            <h1
              style={{
                fontStyle: "bold",
                color: "brown",
                textAlign: "center",
              }}
            >
              {this.state.person.bio}
            </h1>
            <h1
              style={{
                fontStyle: "bold",
                color: "brown",
                textAlign: "center",
              }}
            >
              {this.state.person.profession}
            </h1>
          </div>
        ) : null}
        <h3
          style={{
            fontStyle: "bold",
            color: "red",
            textAlign: "center",
          }}
        >
          Timing:{this.state.time}
        </h3>
      </div>
    );
  }
}

export default App;
