import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import CSS from "./Main.css";

class Main extends Component {
  state = {
    book: {}
  };

  render() {
    return (
      <div>
      <div className="jumbotron">
      <h2 className="auth-user"><a href="#" className="login">Get started!</a></h2>
      </div>
      <div className="content">
      <p>Vivamus sollicitudin felis sed felis elementum feugiat molestie at turpis. Ut et risus vitae dui bibendum ultrices faucibus in arcu. Curabitur semper rutrum pellentesque. Proin tempor non odio vitae tempor. Donec nec dui leo. Duis in viverra quam, a cursus ex. Sed vitae rutrum orci.</p>
      </div>
      </div>
    );
  }
}

export default Main;
