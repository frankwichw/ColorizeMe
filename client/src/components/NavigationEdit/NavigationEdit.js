import React, { Component } from "react";
import CSS from "./NavigationEdit.css";
import EditButtons from "../EditButtons/EditButtons";

const Navigation = props => (
    <nav className="navbar navbar-default navbar-fixed-top inline">
    <div className="row">
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-4"></div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
            <h1 className="brand"><a href="/" className="brand-link">COLORIZEme</a></h1>
        </div>
        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <EditButtons 
            handleShowSave={props.handleShowSave} 
            handleShowCSS={props.handleShowCSS}
            handleShowHelp={props.handleShowHelp}
        />
        </div>
    </div>
    </nav>
  );
  
  export default Navigation;
  