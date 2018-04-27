import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';
// import logout from "./logout.js";
import ColorBox from "../../components/ColorBox/ColorBox.js";
import { Modal, Button } from 'react-bootstrap';
import CSS from "./Profile.css";

class Profile extends Component {
  state = {
    name: "",
    id: "",
    pic: "",
    colorSchemes: []
  };
  
  componentDidMount() {
    API.getColorSchemes()
      .then(res => {
        console.log(res.status);
        this.setState({ colorSchemes: res.data })
      })
      .catch(err => console.log(err));
    var user = localStorage.getItem('userData');
    var userInfo = JSON.parse(user);
    this.setState({ name: userInfo.name });
    this.setState({ id: userInfo.provider_id });
    this.setState({ pic: userInfo.picture });
  };


  logout = () => {
    sessionStorage.removeItem('userData');

  }

  handleCloseCSS = () => {
    this.setState({ showCSS: false });
  };

  handleShowCSS = () => {
    this.setState({ showCSS: true });
  };

  showUser = () => {
    const userDat = sessionStorage.getItem('userData');
    console.log(JSON.stringify(userDat[0]));
  };

  render() {
    return (
      <div>
      <Modal show={this.state.showCSS} onHide={this.handleCloseCSS}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>CSS</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-css">
          {".background {"}<br />
          {"background-color: " + this.state.background + ";"}<br />
          {"}"}<br />
          {".navbar {"}<br />
          {"background-color: " + this.state.navbar + ";"}<br />
          {"}"}<br />
          {".left-sidebar {"}<br />
          {"background-color: " + this.state.left_sidebar + ";"}<br />
          {"}"}<br />
          {".right-sidebar {"}<br />
          {"background-color: " + this.state.right_sidebar + ";"}<br />
          {"}"}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleCloseCSS}>Close</Button>
        </Modal.Footer>
      </Modal>
      
        <div className="jumbotron profile-jumbo"><br /><br />
        <h2>{this.state.name}</h2>
        <a href="#" className="login">
        <div
            className="login-button inline"
            onClick={this.logout}
        >
        Logout
        </div>
        </a>
        <button onClick={this.showUser}>show user</button>
        </div>
        <div className="col-xl-2 col-lg-2 col-md-2"></div>
        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <div className="row color-box-row">
            {this.state.colorSchemes.map(scheme => (
              <ColorBox 
                key={scheme._id}
                boxID={scheme._id}
                title={scheme.title}
                header={scheme.navbar}
                background={scheme.background}
                handleModal={this.handleShowCSS}
              />
            ))}
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;