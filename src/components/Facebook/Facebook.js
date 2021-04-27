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
    console.log(res);
  };
  componentClicked = () => {
    console.log("clicked");
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = null;
    } else {
      fbContent = (
        <FacebookLogin
          appId="402629930511006"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
