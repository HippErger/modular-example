import React, { PureComponent } from 'react'
import Users from './components/Users'
import logo from './logo.svg'
import './App.css'

export default class App extends PureComponent {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Users />
      </div>
    )
  }
}
