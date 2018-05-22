import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import GoogleLogin from 'react-google-login';
import ColorBox from "../../components/ColorBox/ColorBox.js";
import { Modal, Button } from 'react-bootstrap';
import CSS from "./Profile.css";
import Navigation from "../../components/Navigation";

class Profile extends Component {
  state = {
    name: "",
    googleId: "",
    pic: "",
    currentScheme: [],
    colorSchemes: []
  };

  constructor(props) {
    super(props);
    this.renderData();
  }

  
  renderData = () => {
    // get user data from local storage 
    const user = localStorage.getItem('userData');
    const userInfo = JSON.parse(user);
    const userProviderId = userInfo.provider_id.toString();
    this.state.name = userInfo.name;
    this.state.googleId = userProviderId;
    this.state.pic = userInfo.provider_pic;
    // get color schemes based on user google id
    API.getUserColorSchemes(this.state.googleId)
      .then(res => {
        // console.log(res.status);
        this.setState({ colorSchemes: res.data })
      })
      .catch(err => console.log(err));
  };

  // logout function
  logout = () => {
    sessionStorage.removeItem('userData');
    localStorage.removeItem('userData');
  };

  // close CSS modal
  handleCloseCSS = () => {
    this.setState({ showCSS: false });
  };

  // show CSS modal
  handleShowCSS = scheme => {
    console.log(scheme);
    this.setState({currentScheme: scheme});
    this.setState({ showCSS: true });
  };

  // delete color scheme
  deleteScheme = schemeId => {
    API.deleteColorScheme(schemeId)
    .then(res => {
      // console.log(res.status);
      // redisplay color schemes based on new data
      API.getUserColorSchemes(this.state.googleId)
      .then(res => {
        // console.log(res.status);
        this.setState({ colorSchemes: res.data })
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  };

  render() {
    
    return (
      <div>
      <Navigation 
        editButtons={this.props.editButtonsHidden} 
      />
      <Modal show={this.state.showCSS} onHide={this.handleCloseCSS}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>CSS</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-css">
          {".background {"}<br />
          {"background-color: " + this.state.currentScheme.background + ";"}<br />
          {"}"}<br />
          {".navbar {"}<br />
          {"background-color: " + this.state.currentScheme.navbar + ";"}<br />
          {"}"}<br />
          {".left-sidebar {"}<br />
          {"background-color: " + this.state.currentScheme.left_sidebar + ";"}<br />
          {"}"}<br />
          {".right-sidebar {"}<br />
          {"background-color: " + this.state.currentScheme.right_sidebar + ";"}<br />
          {"}"}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleCloseCSS}>Close</Button>
        </Modal.Footer>
      </Modal>
      
        <div className="jumbotron profile-jumbo"><br /><br />
        <h1 class="users-name">{this.state.name}  <img src={this.state.pic} class="user-pic"/></h1>
        <a href="/layout1">
        <button 
          className="login color-box-btn color-scheme-button"
        >
        New Color scheme
        </button>
        </a>
        <Link to={"/"}>
        <button
            className="login color-box-btn login-button logout-button inline"
            onClick={this.logout}
        >
        Logout
        </button>
        </Link>

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
                handleModal={() => this.handleShowCSS(scheme)}
                handleDelete={() => this.deleteScheme(scheme._id)}
              />
            ))}
            </div>
          </div>
      </div>
    );
  }
}

export default Profile;