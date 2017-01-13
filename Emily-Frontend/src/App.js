import React, { Component } from 'react';
import './App.css';
import 'whatwg-fetch'

class App extends Component {

  constructor() {
    super()

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/users')
    .then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ users: data })

      // setTimeout(() => console.log('STATE:', this.state), 5000)
    })
  }

  addItem(name) {
    fetch('http://localhost:8080/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name
      })
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState({ users: data })
      // setTimeout(() => console.log('STATE:', this.state), 5000)
    })

  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addItem.bind(this, 'JIM BOB')}>Click me!</button>
        <ul>
          {this.state.users.map((user, index) => (
            <li key={index}>{user.name}, {user.age}, {user.location}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
