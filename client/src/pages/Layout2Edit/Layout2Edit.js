import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Layout2Edit.css";
import { SketchPicker } from 'react-color';
import { Modal, Button } from 'react-bootstrap';
import { Input } from "../../components/Form/Input";
import NavigationNew from "../../components/NavigationNew";

class Layout2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            layout_type: "layout2",
            displayColorPicker: true,
            background: "#fff",
            backgroundHidden: true,
            left_sidebar: "#f1f1f1",
            leftSidebarHidden: true,
            showCSS: false,
            showSave: false,
            showHelp: true,
            googleID: ""
        };
    };

  // on all components load, load color scheme
  componentDidMount() {
    // get id of color scheme from url
    const id = this.props.match.params.id;
    API.getcolorScheme2(id)
      .then(res => {
        console.log(res.status);
        this.setState({ title: res.data.title, googleID: res.data.google_id, background: res.data.background, navbar: res.data.navbar, left_sidebar: res.data.left_sidebar, colorSchemeId: res.data._id});
      })
      .catch(err => console.log(err));
  };

  // handle saving color scheme through api route
  handleSave = () => {
    if (this.state.title){
      API.updateColorScheme2(this.state.colorSchemeId, {
        title: this.state.title,
        google_id: this.state.googleID,
        layout_type: this.state.layout_type,
        background: this.state.background,
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

  // closes CSS modal
  handleCloseCSS = () => {
    this.setState({ showCSS: false });
  };

  // shows CSS modal
  handleShowCSS = (e) => {
    e.stopPropagation();
    this.setState({ showCSS: true });
  };

  // shows help modal
  handleShowHelp = (e) => {
    e.stopPropagation();
    this.setState({ showHelp: true });
  };

  // closes save modal
  handleCloseSave = () => {
    this.setState({ showSave: false });
  };

  // shows save modal
  handleShowSave = (e) => {
    e.stopPropagation();
    this.setState({ showSave: true });
    this.setState({
      navbarHidden: true
    })
  };

  // showing or hiding color palette for background
  handleBackgroundClick = event => {
    if (this.state.backgroundHidden){
      this.setState({
        backgroundHidden: false,
        leftSidebarHidden: true
      })
    } else {
      this.setState({
        backgroundHidden: true
      })
    }
  };

  // showing or hiding color palette for left sidebar
  handleLeftClick = event => {
    if (this.state.leftSidebarHidden){
      this.setState({
        leftSidebarHidden: false,
        backgroundHidden: true
      })
    } else {
      this.setState({
        leftSidebarHidden: true
      })
    }
  };

  // setting state of background color
  handleChangeBackground = ({hex}) => {
    this.setState({ background: hex });
  };

  // setting state of left sidebar color
  handleChangeLeftSidebar = ({hex}) => {
    this.setState({ left_sidebar: hex });
  };
  
  render() {
    return (
      <div className="wrapper"
        style={{backgroundColor: this.state.background}}
      >
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
                {".left-sidebar {"}<br />
                &nbsp;&nbsp;&nbsp;&nbsp;{"background-color: " + this.state.left_sidebar + ";"}<br />
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
                <p>Click on the area you would like to change the color of. You can change the color of the left sidebar, and main content.</p>
    
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={this.handleCloseHelp}>Close</Button>
              </Modal.Footer>
            </Modal>
    
        <SketchPicker
          className={this.state.backgroundHidden ? "nav-color hide" : "nav-color"}
          name="background"
          hide-value={this.state.backgroundHidden}
          onChange={ this.handleChangeBackground } 
          color={ this.state.background }
        />
        <SketchPicker
          className={this.state.leftSidebarHidden ? "nav-color hide" : "nav-color"}
          name="left_sidebar"
          hide-value={this.state.leftSidebarHidden}
          onChange={ this.handleChangeLeftSidebar } 
          color={ this.state.left_sidebar }
        />

        <div className="container-fluid">
          <div className="row content">
            <div 
              className="col-sm-3 sidenav"
              style={{backgroundColor: this.state.left_sidebar}}
              onClick={this.handleLeftClick}
            >
              <h4>Your Blog</h4>
              <ul className="nav nav-pills nav-stacked">
                <li className="active">Home</li>
                <li>Friends</li>
                <li>Family</li>
                <li>Photos</li>
              </ul><br />
            </div>

            <div class="col-sm-9"
              onClick={this.handleBackgroundClick}
            >
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
