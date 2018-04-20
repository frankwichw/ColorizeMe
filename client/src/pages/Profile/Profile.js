import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import logout from "./logout.js";
import CSS from "./Profile.css";

class Profile extends Component {
  state = {
    colorSchemes: [{
      title: "color scheme 1"
    }]
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getColorSchemes(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <div className="jumbotron profile-jumbo"></div>
        <a href="#" className="login">
        <GoogleLogout
            className="login-button inline"
            buttonText="Logout"
            onLogoutSuccess={logout}
        >
        </GoogleLogout>
        </a>
      </div>
    );
  }
}

export default Profile;