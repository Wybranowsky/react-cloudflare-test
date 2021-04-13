import React, {Component} from 'react';
import './App.css';
import User from './User/User'

class App extends Component {
  render(){
    return(
      <div className='App'>
        <h1>Komponent klasowy</h1>
        <h1>Komponent klasowy</h1>
        <User name="admin"/>
      </div>
    )
  }
}
export default App