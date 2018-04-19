import React, { Component } from "react";
import CSS from "./Navigation.css";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
// import keys from "../../main/keys.js";
import logout from "./logout.js";

const Navigation = () => (
    <nav className="navbar navbar-default navbar-fixed-top">
        <h1 className="brand"><a href="/" className="brand-link">COLORIZEme</a></h1>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-2 col-xs-2">
        <GoogleLogout
            // clientId={keys.google.clientID}
            buttonText="Logout"
            onLogoutSuccess={logout}
        >
        </GoogleLogout>
        </div>
    </nav>
  );
  
  export default Navigation;
  