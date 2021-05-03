import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Facebook from "./components/Facebook/Facebook";
import {
  facebookProvider,
  googleProvider,
  githubProvider,
} from "./config/AuthMethod";
import Auth from "./services/Auth";
const handleOnClick = async (provider) => {
  const res = await Auth(provider);
  console.log(res);
};
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="container">
            <div className="d-flex justify-content-center mb-3 ">
              <button
                className="btn btn-primary mr-2"
                onClick={() => handleOnClick(facebookProvider)}
              >
                <i className="fa fa-facebook-square mr-2"></i>
                Facebook
              </button>
              <button
                className="btn btn-danger mr-2"
                onClick={() => handleOnClick(googleProvider)}
              >
                <i className="fa fa-google mr-2" aria-hidden="true"></i>
                Google
              </button>
              <button
                className="btn btn-success mr-2"
                onClick={() => handleOnClick(githubProvider)}
              >
                <i className="fa fa-github mr-2" aria-hidden="true"></i>
                Github
              </button>
            </div>
          </div>

          <Facebook />
        </header>
      </div>
    );
  }
}
export default App;
