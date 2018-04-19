import React, { Component } from "react";
import { Link } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import {PostData} from '../../utils/restAPI.js';
import {Redirect} from 'react-router-dom';
import API from "../../utils/API";
import CSS from "./Main.css";

class Main extends Component {
  constructor(props) {
    super(props);
       this.state = {
       loginError: false,
       redirect: false
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
       sessionStorage.setItem("userData", JSON.stringify(responseJson));
       this.setState({redirect: true});
    });
    } else {}
  };

  render() {
    if (this.state.redirect || sessionStorage.getItem('userData')) {
      return (<Redirect to={'/profile'}/>)
    }
    
    const responseGoogle = (response) => {
        console.log("google console");
        console.log(response);
        this.signup(response, 'google');
    }
    return (
      <div>
      <div className="jumbotron">
      <h2 className="auth-user"><a href="#" className="login">
      <GoogleLogin
        clientId="Your Google ID"
        buttonText="Get Started with Google+"
        className="login-button"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </a></h2>
      </div>
      <div className="content">
      <p>Vivamus sollicitudin felis sed felis elementum feugiat molestie at turpis. Ut et risus vitae dui bibendum ultrices faucibus in arcu. Curabitur semper rutrum pellentesque. Proin tempor non odio vitae tempor. Donec nec dui leo. Duis in viverra quam, a cursus ex. Sed vitae rutrum orci.</p>
      </div>
      </div>
    );
  };
}

export default Main;
