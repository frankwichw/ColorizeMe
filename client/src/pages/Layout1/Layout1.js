import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Layout1.css";
import { SliderPicker, SketchPicker } from 'react-color';

class Layout1 extends Component {
  state = {
    background: "#fff",
    backgroundHidden: true,
    navbar: "#f1f1f1",
    navbarHidden: true,
    right_sidebar: "#f1f1f1",
    rightSidebarHidden: true,
    left_sidebar: "#f1f1f1",
    leftSidebarHidden: true
  };

  handleGetCSS = event => {
    event.preventDefault();
    const css = ".background {\nbackground-color: " + this.state.background + ";\n}\n.navbar {\nbackground-color: " + this.state.navbar + ";\n}\n.left-sidebar {\nbackground-color: " + this.state.left_sidebar + ";\n}\n.right-sidebar {\nbackground-color: " + this.state.right_sidebar + ";\n}";
    console.log(css);
  };

  handleNavClick = event => {
    console.log(event.target);
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
    console.log(event.target);
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
    console.log(event.target);
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
    console.log(event.target);
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

  handleInputChange = event => {
    console.log(event);
    const { name, value } = event.target;
    this.setState({
      [name]: "#" + value
    });
  };

  handleChangeNavbar = (color, event) => {
    // const { name, color.hex } = event.target;
    this.setState({ navbar: color.hex });
  };

  handleChangeBackground = (color, event) => {
    // const { name, color.hex } = event.target;
    this.setState({ background: color.hex });
  };

  handleChangeRightSidebar = (color, event) => {
    // const { name, color.hex } = event.target;
    this.setState({ right_sidebar: color.hex });
  };

  handleChangeLeftSidebar = (color, event) => {
    // const { name, color.hex } = event.target;
    this.setState({ left_sidebar: color.hex });
  };
  
  
  render() {

    return (
    <div className="wrapper" style={{backgroundColor: this.state.background}}>


    <SketchPicker
      className={this.state.backgroundHidden ? "nav-color hide" : "nav-color"}
      name="background"
      hide-value={this.state.backgroundHidden}
      onChange={ this.handleChangeBackground } 
    />
    <SketchPicker
      className={this.state.rightSidebarHidden ? "nav-color hide" : "nav-color"}
      name="right_sidebar"
      hide-value={this.state.rightSidebarHidden}
      onChange={ this.handleChangeRightSidebar } 
    />
    <SketchPicker
      className={this.state.leftSidebarHidden ? "nav-color hide" : "nav-color"}
      name="left_sidebar"
      hide-value={this.state.leftSidebarHidden}
      onChange={ this.handleChangeLeftSidebar } 
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
          <button 
            className="nav-button"
          >
          Save
          </button> 
          <button 
            className="nav-button"
            onClick={this.handleGetCSS}
          >
          CSS
          </button> 
          <button 
            className="nav-button"
          >
          Back to Profile
          </button>
          <SliderPicker
      className={this.state.navbarHidden ? "nav-color hide" : "nav-color"}
      name="navbar"
      hide-value={this.state.navbarHidden}
      onChange={ this.handleChangeNavbar } 
    />
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
