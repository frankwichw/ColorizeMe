import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Main extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

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
