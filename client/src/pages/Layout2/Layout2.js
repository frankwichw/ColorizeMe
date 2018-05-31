import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Layout2.css";
import { SliderPicker, SketchPicker } from 'react-color';
import { Modal, Button } from 'react-bootstrap';
import { Input } from "../../components/Form/Input";
import NavigationNew from "../../components/NavigationNew";

class Layout2 extends React.Component {
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
      showHelp: true,
      googleID: ""
    };
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

  handleCloseHelp = () => {
    this.setState({ showHelp: false });
  };

  // 
  handleCloseCSS = () => {
    this.setState({ showCSS: false });
  };

  handleShowCSS = (e) => {
    e.stopPropagation();
    this.setState({ showCSS: true });
  };

  handleCloseSave = () => {
    this.setState({ showSave: false });
  };

  handleShowSave = (e) => {
    e.stopPropagation();
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

        <div class="container-fluid">
          <div class="row content">
            <div class="col-sm-3 sidenav">
              <h4>Your Blog</h4>
              <ul class="nav nav-pills nav-stacked">
                <li class="active">Home</li>
                <li>Friends</li>
                <li>Family</li>
                <li>Photos</li>
              </ul><br />
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Search Blog.." />
                <span class="input-group-btn">
                  <button class="btn btn-default" type="button">
                    <span class="glyphicon glyphicon-search"></span>
                  </button>
                </span>
              </div>
            </div>

            <div class="col-sm-9">
              <h4><small>RECENT POSTS</small></h4>
              <hr />
              <h2>Post Title</h2>
              <h5><span class="glyphicon glyphicon-time"></span> Post by Jane Doe, Sep 27.</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <br />
              <h4>Leave a Comment:</h4>
              <form role="form">
                <div class="form-group">
                  <textarea class="form-control" rows="3" required></textarea>
                </div>
                <button type="submit" class="btn btn-success">Submit</button>
              </form>
          
            </div>
          </div>
        </div>

        <footer class="container-fluid">
          <p>Footer Text</p>
        </footer>

      </div>
    );
  }
};

export default Layout2;