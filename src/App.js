import React, { Component } from 'react';
import SideBar from './SideBar'
import AppBar from './AppBar'

class App extends Component {
  render(){
    return (
      <div>
        <AppBar />
        <SideBar/>
      </div>
    );
  }
}

export default App;
