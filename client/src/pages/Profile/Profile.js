import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
import logout from "./logout.js";
import ColorBox from "../../components/ColorBox/ColorBox.js";
import CSS from "./Profile.css";

class Profile extends Component {
  state = {
    userName: "W Frankwich",
    colorSchemes: []
  };
  
  componentDidMount() {
    API.getColorSchemes()
      .then(res => {
        console.log(res.status);
        this.setState({ colorSchemes: res.data })
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <div className="jumbotron profile-jumbo"><br /><br />
        <h2>{this.state.userName}</h2>
        <a href="#" className="login">
        <GoogleLogout
            className="login-button inline"
            buttonText="Logout"
            onLogoutSuccess={logout}
        >
        </GoogleLogout>
        </a>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2"></div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <div className="row color-box-row">
            {this.state.colorSchemes.map(scheme => (
              <ColorBox 
                key={scheme._id}
                title={scheme.title}
                header={scheme.navbar}
                background={scheme.background}
              />
            ))}
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;