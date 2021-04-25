import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://jsonplaceholder.typicode.com/users", true);

    xhr.onload = () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({ users });
      }
    };

    xhr.send(null);
  }

  render() {
    return <div></div>;
  }
}

export default App;
