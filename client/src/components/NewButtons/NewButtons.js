import React from "react";
import CSS from "./NewButtons.css";
import { Link } from "react-router-dom";
import { Button, DropdownButton, MenuItem } from 'react-bootstrap';

const NewButtons = props => (
    <div className="wrapper-div">
    <DropdownButton
    //   bsStyle={title.toLowerCase()}
      bsStyle="Edit"
      title="Edit"
      key="key"
      className="dropdown-menu-style"
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
        CSS
      </MenuItem>
      <MenuItem 
        eventKey="3"
        onClick={props.handleShowHelp}
      >
        Help
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">
      <Link to="/profile">Back to Profile</Link>
      </MenuItem>
    </DropdownButton>
    </div>
);

export default NewButtons;