import React, { Component } from "react";
import "./App.css";
import AppCards from "./components/AppCards/AppCards";
import screen from "./screens.json";
import Wrapper from "./components/Wrapper/Wrapper";

let highPointCount = 0;

class App extends Component {
  state = {
    screen,
    Point: 0,
    highPoint: 0,
    status: "Click each screen view content!"
  };

  handleClickedScreen = id => {
    const screenPicked = this.state.screen.filter(screen => screen.id === id);
    console.log(screenPicked);

    if (this.state.Point < 11 && !screenPicked[0].chosenScreen) {
      screenPicked[0].chosenScreen = true;
      console.log(screenPicked);
      this.setState({ screen });
      console.log(screen);
      screen.sort(() => Math.random() - 0.5);
      this.setState({ Point: this.state.Point + 1 });
      this.setState({ status: "You're doing great!" });
      if (this.state.highPoint <= this.state.Point) {
        highPointCount++;
        this.setState({ highPoint: highPointCount });
      }
    } else if (this.state.Point <= 11 && screenPicked[0].chosenScreen) {
      this.setState({
        status: "That wasn't a fresh screen! Try selecting a new screen again!"
      });
      this.setState({ Point: 0 });
      screen.forEach(screen => {
        screen.chosenScreen = false;
      });
      this.setState({ screen });
      console.log(screen);
    } else if (this.state.Point === 11 && !screenPicked[0].chosenScreen) {
      this.setState({ status: "Congratulations! You have the highest Point!" });
      this.setState({ highPoint: 12 });
      this.setState({ Point: 0 });

      screen.forEach(screen => {
        screen.chosenScreen = false;
      });

      this.setState({ screen });
      console.log(screen);

      screen.sort(() => Math.random() - 0.5);
    }
  };

  render() {
    return (
      <React.Fragment>
        <nav className="nav-container">
          <h1 className="main-header">Best Life!!!</h1>
          <ul className="nav-elements">
            <li className="each-nav-element">Points: {this.state.Point}</li>
            <li className="each-nav-element">
              Highest Points: {this.state.highPoint}
            </li>
            <li className="each-nav-element">{this.state.status}</li>
          </ul>
        </nav>
        <Wrapper>
          {this.state.screen.map(screen => (
            <AppCards
              handleClickedScreen={this.handleClickedScreen}
              id={screen.id}
              key={screen.id}
              name={screen.name}
              image={screen.image}
            />
          ))}
        </Wrapper>
        <footer className="footer-container">
          <p className="footer-content">
            © 2019{" "}
            <a className="github-link" href="#">
              Mongolicious
            </a>
          </p>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
