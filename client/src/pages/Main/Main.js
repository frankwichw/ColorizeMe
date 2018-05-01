import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import {PostData} from '../../utils/restAPI.js';
import {Redirect} from 'react-router-dom';
import API from "../../utils/API";
import CSS from "./Main.css";
import keys from "./keys.js";

class Main extends Component {
  constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false,
       redirect_url: ""
      };
    this.signup = this.signup.bind(this);
  }

  signup = (res, type) => {
    let postData;
    if (type === 'google' && res.w3.U3) {
      postData = {
        name: res.w3.ig,
        provider: type,
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
      
    }

  if (postData) {
    PostData('signup', postData).then((result) => {
       let responseJson = result;
       sessionStorage.setItem("userData", responseJson);
       this.setState({redirect: true});
    });
    } else {}
  };

  render() {
    if (sessionStorage.getItem('userData')) {
      return (<Redirect to={'/profile'}/>)
    }
    
    const responseGoogle = (response) => {
        // console.log(response);
        this.signup(response, 'google');
    }
    return (
      <div>
      <div className="jumbotron main-jumbo">
      <h2 className="auth-user"><a href="#" className="login">
      <GoogleLogin
        clientId={keys.google.clientID}
        buttonText="Sign in with Google+"
        className="login-button"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </a></h2>
      </div>
      <div className="content">
      <p>Use ColorizeMe to create color schemes, save them for later, and generate CSS useable in projects and web apps. Simple interface makes it easy to make color schemes with the click of a button.</p>
      </div>
      </div>
    );
  };
}

export default Main;
