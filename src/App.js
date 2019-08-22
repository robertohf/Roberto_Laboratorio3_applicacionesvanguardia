import React, { Component } from 'react';
import SideBar from './SideBar'
import AppBar from './AppBar'

class App extends Component {
  render(){
    return (
      <div>
                <div><AppBar /></div>
        <div><SideBar/></div>
      </div>
    );
  }
}

export default App;
