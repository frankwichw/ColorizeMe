import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Profile extends Component {
  state = {
    colorSchemes: [{
      title: "color scheme 1"
    }]
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  // componentDidMount() {
  //   API.getColorSchemes(this.props.match.params.id)
  //     .then(res => this.setState({ book: res.data }))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div>
        <br /><br /><br />
      <h1>Hewwo</h1>
      <span>{this.state.title}</span>
      </div>
    );
  }
}

export default Profile;