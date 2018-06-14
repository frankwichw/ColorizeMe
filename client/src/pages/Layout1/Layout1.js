import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Layout1.css";
import { SliderPicker, SketchPicker } from 'react-color';
import { Modal, Button } from 'react-bootstrap';
import { Input } from "../../components/Form/Input";
import NavigationNew from "../../components/NavigationNew";

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
      navbar_text: "#000",
      navbarTextHidden: true,
      left_sidebar_text: "#000",
      leftSidebarTextHidden: true,
      main_text: "#000",
      mainTextHidden: true,
      showCSS: false,
      showSave: false,
      showHelp: true,
      googleID: "",
      editButtonsHidden: "true"
    };
  };

  // handle saving color scheme through api route
  handleSave = () => {
    var user = localStorage.getItem('userData');
    var userData = JSON.parse(user);
    var providerID = userData.provider_id;

    if (this.state.title){
      API.saveColorScheme1({
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

  // closes help modal
  handleCloseHelp = () => {
    this.setState({ showHelp: false });
  };

  // shows help modal
  handleShowHelp = (e) => {
    e.stopPropagation();
    this.setState({ showHelp: true });
  };

  // closes CSS modal
  handleCloseCSS = () => {
    this.setState({ showCSS: false });
  };

  // shows CSS modal
  handleShowCSS = (e) => {
    e.stopPropagation();
    this.setState({ showCSS: true });
  };

  // closes save modal
  handleCloseSave = () => {
    this.setState({ showSave: false });
  };

  // shows save modal
  handleShowSave = (e) => {
    e.stopPropagation();
    this.setState({ showSave: true });
  };

  // showing or hiding color palette for navbar
  handleNavClick = () => {
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

  // showing or hiding color palette for background
  handleBackgroundClick = () => {
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

  // showing or hiding color palette for left sidebar
  handleLeftClick = () => {
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

  // showing or hiding color palette for right sidebar
  handleRightClick = () => {
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

  // changing navbar text
  handleNavText = e => {
    e.stopPropagation(); 
    if (this.state.navbarTextHidden){
      this.setState({
        navbarTextHidden: false
      })
    } else {
      this.setState({
        navbarTextHidden: true
      })
    }
  };

  pullUpPicker = () => {
    if (this.state.leftSidebarTextHidden){
      this.setState({
        leftSidebarTextHidden: false
      })
    } else {
      this.setState({
        leftSidebarTextHidden: true
      })
    }
  };
  // changing left sidebar text
  handleLeftText = event => {
    event.stopPropagation(); 
    this.pullUpPicker();
  };

  // changing main text
  handleMainText = e => {
    // e.stopPropagation(); 
    if (this.state.mainTextHidden){
      this.setState({
        mainTextHidden: false
      })
    } else {
      this.setState({
        mainTextHidden: true
      })
    }
  };

  // setting state of navbar color
  handleChangeNavbar = ({hex}) => {
    this.setState({ navbar: hex });
  };

  // setting state of background color
  handleChangeBackground = ({hex}) => {
    this.setState({ background: hex });
  };

  // setting state of right sidebar color
  handleChangeRightSidebar = ({hex}) => {
    this.setState({ right_sidebar: hex });
  };

  // setting state of left sidebar color
  handleChangeLeftSidebar = ({hex}) => {
    this.setState({ left_sidebar: hex });
  };
  
  render() {
    return (
    <div className="wrapper" style={{backgroundColor: this.state.background}}>

    <NavigationNew
        handleShowSave={this.handleShowSave} 
        handleShowCSS={this.handleShowCSS}
        handleShowHelp={this.handleShowHelp}
    />

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
            &nbsp;&nbsp;&nbsp;&nbsp;{"background-color: " + this.state.background + ";"}<br />
            {"}"}<br />
            {".navbar {"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"background-color: " + this.state.navbar + ";"}<br />
            {"}"}<br />
            {".left-sidebar {"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"background-color: " + this.state.left_sidebar + ";"}<br />
            {"}"}<br />
            {".right-sidebar {"}<br />
            &nbsp;&nbsp;&nbsp;&nbsp;{"background-color: " + this.state.right_sidebar + ";"}<br />
            {"}"}

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseCSS}>Close</Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showHelp} onHide={this.handleCloseHelp}>
          <Modal.Header closeButton className="modal-header">
            <Modal.Title>Help</Modal.Title>
          </Modal.Header>
          <Modal.Body className="help">
            <p>Click on the area you would like to change the color of. You can change the color of the navbar, left and right sidebars, and main content.</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleCloseHelp}>Close</Button>
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
    <SketchPicker
      className={this.state.navbarTextHidden ? "nav-color hide" : "nav-color"}
      name="navbar-text"
      hide-value={this.state.navbarTextHidden}
      onChange={ this.handleNavText } 
      color={ this.state.navbar_text }
    />
    <SketchPicker
      className={this.state.leftSidebarTextHidden ? "nav-color hide" : "nav-color"}
      name="left-text"
      hide-value={this.state.leftSidebarTextHidden}
      onChange={ this.handleLeftText } 
      color={ this.state.left_sidebar_text }
    />
    <SketchPicker
      className={this.state.mainTextHidden ? "nav-color hide" : "nav-color"}
      name="main-text"
      hide-value={this.state.mainTextHidden}
      onChange={ this.handleMainText } 
      color={ this.state.main_text }
    />
    <nav 
      className="navbar layout-nav" 
      style={{backgroundColor: this.state.navbar}}
      onClick={this.handleNavClick}
    >
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>                        
          </button>
          <span 
            className="navbar-brand black-text" 
            onClick={this.handleNavText}
            style={{color: this.state.navbar_text}}
          >
            Logo
          </span>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar" 
          // onClick={this.handleNavText}
        >
          <ul 
            className="nav navbar-nav black-text"
            
            style={{color: this.state.navbar_text}}
          >
            <li className="list-items">Home</li>
            <li className="list-items">About</li>
            <li className="list-items">Projects</li>
            <li className="list-items">Contact</li>
          </ul>

        </div>
      </div>
    </nav>
      
    <div className="container-fluid text-center">  
      <div className="row content">
        <div 
          className="col-sm-2 sidenav" 
          style={{backgroundColor: this.state.left_sidebar}}
          onClick={this.handleLeftClick}
        >
          <p 
            // onClick={this.handleLeftText}
            style={{color: this.state.left_sidebar_text}}>Link</p>
          <p 
            // onClick={this.handleLeftText}
            style={{color: this.state.left_sidebar_text}}>Link</p>
          <p 
            // onClick={this.handleLeftText}
            style={{color: this.state.left_sidebar_text}}>Link</p>
          <p 
            // onClick={this.handleLeftText}
            style={{color: this.state.left_sidebar_text}}>Link</p>
          <p 
            // onClick={this.handleLeftText}
            style={{color: this.state.left_sidebar_text}}>Link</p>
        </div>
        <div 
          className="col-sm-8 text-left"
          onClick={this.handleBackgroundClick}
          > 
          <h1
            // onClick={this.handleMainText}
            style={{color: this.state.main_text}}
          >
            Welcome
          </h1>
          <p 
            // onClick={this.handleMainText}
            style={{color: this.state.main_text}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div 
          className="col-sm-2 sidenav" 
          style={{backgroundColor: this.state.right_sidebar}}
          onClick={this.handleRightClick}
        >
          <div className="well">
            <p>ADS</p>
          </div>
          <div className="well">
            <p>ADS</p>
          </div>
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
