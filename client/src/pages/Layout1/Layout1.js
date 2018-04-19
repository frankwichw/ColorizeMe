import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Layout1.css";
import { ChromePicker, SketchPicker } from 'react-color';

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
    <div style={{backgroundColor: this.state.background}}>
    <ChromePicker
      className={this.state.navbarHidden ? "nav-color hide" : "nav-color"}
      name="navbar"
      hide-value={this.state.navbarHidden}
      onChange={ this.handleChangeNavbar } 
    />
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
          {/* <span style={{color: "#000"}}>Color:</span> 
          <input 
            className="jscolor nav-color" 
            value={this.state.navbar}
            onChange={this.handleInputChange}
            name="navbar"
          /> */}
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav black-text">
            <li className="list-items">Home</li>
            <li className="list-items">About</li>
            <li className="list-items">Projects</li>
            <li className="list-items">Contact</li>
          </ul>
          <span className="glyphicon glyphicon-bell"
          onClick={this.handleNavClick}></span>
        </div>
      </div>
    </nav>
      
    <div className="container-fluid text-center">  
      <div className="row content">
        <div className="col-sm-2 sidenav" style={{backgroundColor: this.state.left_sidebar}}>
          <p>Link</p>
          <p>Link</p>
          <p>Link</p>
        </div>
        <div className="col-sm-8 text-left"> 
          <h1>Welcome</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="col-sm-2 sidenav" style={{backgroundColor: this.state.right_sidebar}}>
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
