import React from "react";
import CSS from "./EditButtons.css";
import { Link } from "react-router-dom";
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

const EditButtons = props => (
    <div className="wrapper-div">
    <DropdownButton
    //   bsStyle={title.toLowerCase()}
      bsStyle="Edit"
      title="Edit"
      key="key"
      className="dropdown-menu-stylized"
    >
      <MenuItem 
        eventKey="1"
        onClick={props.handleShowSave}
      >
        Save
      </MenuItem>
      <MenuItem 
        eventKey="2"
        onClick={props.handleShowCSS}
      >
        Get CSS
      </MenuItem>
      <MenuItem 
        eventKey="3"
        onClick={props.handleShowHelp}
      >
        Help
      </MenuItem>
      <MenuItem 
        eventKey="4"
        onClick={() => window.location.assign('/profile')}
      >
        Back to Profile
      </MenuItem>
    </DropdownButton>
    </div>
);

export default EditButtons;