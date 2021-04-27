import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Facebook from "./components/Facebook/Facebook";

class App extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Facebook />
        </header>
      </div>
    );
  }
}
export default App;
