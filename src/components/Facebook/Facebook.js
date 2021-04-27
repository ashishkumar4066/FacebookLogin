import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
export default class Facebook extends Component {
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
          <h4>Welcome {this.state.name} </h4>
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
    return <div>{fbContent}</div>;
  }
}
