import logo from "./logo.svg";
import "./App.css";
import FacebookLogin from "react-facebook-login";
import React, { Component } from "react";

class App extends Component {
  state = {
    isLoggedIn: false,
    userId: "",
    name: "",
    email: "",
    picture: "",
  };
  responseFacebook = (res) => {
    this.setState({
      isLoggedIn: true,
      userId: res.userId,
      name: res.name,
      email: res.email,
      picture: res.picture.data.url,
    });
  };
  componentClicked = () => {
    console.log("clicked");
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "grey",
            padding: "20px",
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="402629930511006"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {fbContent}
        </header>
      </div>
    );
  }
}
export default App;
