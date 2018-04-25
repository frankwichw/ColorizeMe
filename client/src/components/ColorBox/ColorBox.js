import React from "react";
import CSS from "./ColorBox.css";
import { Link } from "react-router-dom";

const ColorBox = props => (
    <div className="color-box col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12" style={{backgroundColor: props.background}} id={props.boxID}>
        <h2 style={{backgroundColor: props.header, color: props.header === "#000000" ? "#fff" : "#000"}} className="color-box-header">{props.title}</h2>
        <button className="color-box-btn login"><Link to={`/layout1/${props.boxID}`}> Edit</Link></button> <button onClick={props.handleModal} className="color-box-btn login">CSS</button>
    </div>
);

export default ColorBox;