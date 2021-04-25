import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };

  requestData = () => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "http://jsonplaceholder.typicode.com/users", true);

    // xhr.onload = () => {
    //   if (xhr.status === 200) {
    //     const users = JSON.parse(xhr.response);
    //     this.setState({ users });
    //   }
    // };

    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        this.setState({ users });
      }
    });

    xhr.send(null);
  };

  componentDidMount() {
    this.requestData();
  }

  render() {
    const users = this.state.users.map((user) => (
      <div className="user" key={user.id}>
        <h4>{user.name}</h4>
        <p>{user.address.city}</p>
      </div>
    ));

    return <div>{users}</div>;
  }
}

export default App;
