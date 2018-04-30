import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Layout1.css";
import { SliderPicker, SketchPicker } from 'react-color';
import { Modal, Button } from 'react-bootstrap';
import { Input } from "../../components/Form/Input";

class Layout1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      layout_type: "layout1",
      displayColorPicker: true,
      background: "#fff",
      backgroundHidden: true,
      navbar: "#f1f1f1",
      navbarHidden: true,
      right_sidebar: "#f1f1f1",
      rightSidebarHidden: true,
      left_sidebar: "#f1f1f1",
      leftSidebarHidden: true,
      showCSS: false,
      showSave: false,
      googleID: ""
    };

    this.handleChangeLeftSidebar2 = this.handleChangeLeftSidebar2.bind(this);
  };

  // handle saving color scheme through api route
  handleSave = () => {
    var user = localStorage.getItem('userData');
    var userData = JSON.parse(user);
    var providerID = userData.provider_id;

    if (this.state.title){
      API.saveColorScheme({
        title: this.state.title,
        google_id: providerID,
        layout_type: this.state.layout_type,
        background: this.state.background,
        navbar: this.state.navbar,
        right_sidebar: this.state.right_sidebar,
        left_sidebar: this.state.left_sidebar
      })
        .catch(err => console.log(err));
    }
    // close modal
    this.setState({ showSave: false });
  };

  // handling input in the name field of naming 
  handleInputChange = event => {
    // grabbing name of input and value of input
    const { name, value } = event.target;
    // set state
    this.setState({
      [name]: value
    });
  };

  // 
  handleCloseCSS = () => {
    this.setState({ showCSS: false });
  };

  handleShowCSS = () => {
    this.setState({ showCSS: true });
  };

  handleCloseSave = () => {
    this.setState({ showSave: false });
  };

  handleShowSave = () => {
    this.setState({ showSave: true });
  };


  handleGetCSS = event => {
    event.preventDefault();
    this.handleShow();
  };

  handleNavClick = event => {
    if (this.state.navbarHidden){
      this.setState({
        navbarHidden: false
      })
    } else {
      this.setState({
        navbarHidden: true
      })
    }
  };

  handleBackgroundClick = event => {
    if (this.state.backgroundHidden){
      this.setState({
        backgroundHidden: false
      })
    } else {
      this.setState({
        backgroundHidden: true
      })
    }
  };

  handleLeftClick = event => {
    if (this.state.leftSidebarHidden){
      this.setState({
        leftSidebarHidden: false
      })
    } else {
      this.setState({
        leftSidebarHidden: true
      })
    }
  };

  handleRightClick = event => {
    if (this.state.rightSidebarHidden){
      this.setState({
        rightSidebarHidden: false
      })
    } else {
      this.setState({
        rightSidebarHidden: true
      })
    }
  };

  handleChangeNavbar = ({hex}) => {
    this.setState({ navbar: hex });
  };

  handleChangeBackground = ({hex}) => {
    this.setState({ background: hex });
  };

  handleChangeRightSidebar = ({hex}) => {
    this.setState({ right_sidebar: hex });
  };

  handleChangeLeftSidebar = ({hex}) => {
    this.setState({ left_sidebar: hex });
  };
  
  handleChangeLeftSidebar2(event) {
    // grabbing name of input and value of input
    console.log('Correct Method!');
    const { name, value } = event.target;
    console.log(value);
    console.log(name);
    // set state
    this.setState({
      [name]: value
    });
  }
  
  render() {
    return (
    <div className="wrapper" style={{backgroundColor: this.state.background}}>

    <Modal show={this.state.showSave} onHide={this.handleCloseSave}>
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>Save Color Scheme</Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-css">
            <h4>Give your color scheme a name!</h4>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title"
              />
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="save-btn" onClick={this.handleSave}>Save</Button> 
            <Button onClick={this.handleCloseSave}>Cancel</Button>
          </Modal.Footer>
        </Modal>

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

    <SketchPicker
      className={this.state.navbarHidden ? "nav-color hide" : "nav-color"}
      name="navbar"
      hide-value={this.state.navbarHidden}
      onChange={ this.handleChangeNavbar } 
      color={ this.state.navbar }
    />
    <SketchPicker
      className={this.state.backgroundHidden ? "nav-color hide" : "nav-color"}
      name="background"
      hide-value={this.state.backgroundHidden}
      onChange={ this.handleChangeBackground } 
      color={ this.state.background }
    />
    <SketchPicker
      className={this.state.rightSidebarHidden ? "nav-color hide" : "nav-color"}
      name="right_sidebar"
      hide-value={this.state.rightSidebarHidden}
      onChange={ this.handleChangeRightSidebar } 
      color={ this.state.right_sidebar }
    />
    <SketchPicker
      className={this.state.leftSidebarHidden ? "nav-color hide" : "nav-color"}
      name="left_sidebar"
      hide-value={this.state.leftSidebarHidden}
      onChange={ this.handleChangeLeftSidebar } 
      color={ this.state.left_sidebar }
    />
    <nav className="navbar layout-nav" style={{backgroundColor: this.state.navbar}}>
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <span className="navbar-brand black-text">Logo</span>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav black-text">
            <li className="list-items">Home</li>
            <li className="list-items">About</li>
            <li className="list-items">Projects</li>
            <li className="list-items">Contact</li>
          </ul>
          <Button className="nav-button" onClick={this.handleShowSave}>
          Save
          </Button> 
          <Button className="nav-button" onClick={this.handleShowCSS}>
          CSS
          </Button>
          <a href="/profile">
          <button 
            className="nav-button"
          >
          Back to Profile
          </button>
          </a>
          <a href="#" className="hover"><span className="glyphicon glyphicon-nav glyphicon-bell"
          onClick={this.handleNavClick}></span></a>
        </div>
      </div>
    </nav>
      
    <div className="container-fluid text-center">  
      <div className="row content">
        <div className="col-sm-2 sidenav" style={{backgroundColor: this.state.left_sidebar}}>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
          <a href="#" className="hover">
          <span className="glyphicon glyphicon-left glyphicon-bell"
          onClick={this.handleLeftClick}></span></a>
        </div>
        <div className="col-sm-8 text-left"> 
          <h1>Welcome <a href="#" className="hover">
          <span className="glyphicon glyphicon-background glyphicon-bell"
          onClick={this.handleBackgroundClick}></span></a></h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-sm-2 sidenav" style={{backgroundColor: this.state.right_sidebar}}>
          <div className="well">
            <p>ADS</p>
          </div>
          <div className="well">
            <p>ADS</p>
          </div>
          <a href="#" className="hover">
          <span className="glyphicon glyphicon-nav glyphicon-bell"
          onClick={this.handleRightClick}></span></a>
        </div>
      </div>
    </div>
    

    <footer className="container-fluid text-center">
      <p>Footer Text</p>
    </footer>
    </div>
    );
  }
}

export default Layout1;
