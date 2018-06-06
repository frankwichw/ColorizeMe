import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import GoogleLogin from 'react-google-login';
import ColorBox from "../../components/ColorBox/ColorBox.js";
import { Modal, Button, DropdownButton, MenuItem } from 'react-bootstrap';
import CSS from "./Profile.css";
import Navigation from "../../components/Navigation";

class Profile extends Component {
  state = {
    name: "",
    googleId: "",
    pic: "",
    showCSS1: false,
    showCSS2: false,
    currentLayout1Scheme: [],
    layout1ColorSchemes: [],
    currentLayout2Scheme: [],
    layout2ColorSchemes: []
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
    // get layout 1 color schemes based on user google id
    API.getUserColorSchemes1(this.state.googleId)
      .then(res => {
        // console.log(res.status);
        this.setState({ layout1ColorSchemes: res.data })
      })
      .catch(err => console.log(err));

    // get layout 2 color schemes based on user google id
    API.getUserColorSchemes2(this.state.googleId)
    .then(res => {
      // console.log(res.status);
      this.setState({ layout2ColorSchemes: res.data })
    })
    .catch(err => console.log(err));
  };

  // logout function
  logout = () => {
    sessionStorage.removeItem('userData');
    localStorage.removeItem('userData');
  };

  // close CSS layout 1 modal
  handleCloseCSS1 = () => {
    this.setState({ showCSS1: false });
  };

  // show CSS layout 1 modal
  handleShowCSS1 = scheme => {
    console.log(scheme);
    this.setState({currentLayout1Scheme: scheme});
    this.setState({ showCSS1: true });
  };

  // close CSS layout 2 modal
  handleCloseCSS2 = () => {
    this.setState({ showCSS2: false });
  };

  // show CSS layout 2 modal
  handleShowCSS2 = scheme => {
    console.log(scheme);
    this.setState({currentLayout2Scheme: scheme});
    this.setState({ showCSS2: true });
  };

  // delete layout 1 color scheme
  deleteScheme1 = schemeId => {
    API.deleteColorScheme1(schemeId)
    .then(res => {
      // console.log(res.status);
      // redisplay color schemes based on new data
      API.getUserColorSchemes1(this.state.googleId)
      .then(res => {
        // console.log(res.status);
        this.setState({ layout1ColorSchemes: res.data })
      })
      .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
  };

  // delete layout 2  color scheme
  deleteScheme2 = schemeId => {
    API.deleteColorScheme2(schemeId)
    .then(res => {
      // console.log(res.status);
      // redisplay color schemes based on new data
      API.getUserColorSchemes2(this.state.googleId)
      .then(res => {
        // console.log(res.status);
        this.setState({ layout2ColorSchemes: res.data })
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
      <Modal show={this.state.showCSS1} onHide={this.handleCloseCSS1}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>CSS</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-css-1">
          {".background {"}<br />
          {"background-color: " + this.state.currentLayout1Scheme.background + ";"}<br />
          {"}"}<br />
          {".navbar {"}<br />
          {"background-color: " + this.state.currentLayout1Scheme.navbar + ";"}<br />
          {"}"}<br />
          {".left-sidebar {"}<br />
          {"background-color: " + this.state.currentLayout1Scheme.left_sidebar + ";"}<br />
          {"}"}<br />
          {".right-sidebar {"}<br />
          {"background-color: " + this.state.currentLayout1Scheme.right_sidebar + ";"}<br />
          {"}"}

        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleCloseCSS1}>Close</Button>
        </Modal.Footer>
      </Modal>

      <Modal show={this.state.showCSS2} onHide={this.handleCloseCSS2}>
        <Modal.Header closeButton className="modal-header">
          <Modal.Title>CSS</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-css-1">
          {".background {"}<br />
          {"background-color: " + this.state.currentLayout2Scheme.background + ";"}<br />
          {"}"}<br />
          {".left-sidebar {"}<br />
          {"background-color: " + this.state.currentLayout2Scheme.left_sidebar + ";"}<br />
          {"}"}<br />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleCloseCSS2}>Close</Button>
        </Modal.Footer>
      </Modal>
      
        <div className="jumbotron profile-jumbo"><br /><br />
        <h1 class="users-name">{this.state.name}  {/* <img src={this.state.pic} class="user-pic"/>*/}</h1> 

        <DropdownButton
        //   bsStyle={title.toLowerCase()}
          bsStyle="New Color Scheme"
          title="New Color Scheme"
          key="key"
          className="dropdown-menu-style"
        >
          <MenuItem 
            eventKey="1"
            // onClick={}
          >
            <Link to="/layout1">Layout Style One</Link>
          </MenuItem>
          <MenuItem 
            eventKey="2"
            // onClick={}
          >
            <Link to="/layout2">Layout Style Two</Link>
          </MenuItem>
          {/* <MenuItem divider />
          <MenuItem eventKey="4">
          <Link to="/profile">Back to Profile</Link>
          </MenuItem> */}
        </DropdownButton>


        <Link to={"/"}>
        <button
            className="login color-box-btn login-button logout-button inline"
            onClick={this.logout}
        >
        Logout
        </button>
        </Link>

        </div>
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2"></div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <h2>Style One Schemes</h2>
              <div className="row color-box-row">
              {this.state.layout1ColorSchemes.map(scheme => (
                <ColorBox 
                  key={scheme._id}
                  boxID={scheme._id}
                  title={scheme.title}
                  header={scheme.navbar}
                  background={scheme.background}
                  handleModal={() => this.handleShowCSS1(scheme)}
                  handleDelete={() => this.deleteScheme1(scheme._id)}
                />
              ))}
              </div>
          </div>
        </div>

        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-2"></div>
          <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-xs-9">
            <h2>Style Two Schemes</h2>
              <div className="row color-box-row">
              {this.state.layout2ColorSchemes.map(scheme => (
                <ColorBox 
                  key={scheme._id}
                  boxID={scheme._id}
                  title={scheme.title}
                  header={scheme.left_sidebar}
                  background={scheme.background}
                  handleModal={() => this.handleShowCSS2(scheme)}
                  handleDelete={() => this.deleteScheme2(scheme._id)}
                />
              ))}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;