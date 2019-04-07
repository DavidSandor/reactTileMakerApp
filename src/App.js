import React, { Component } from 'react';
import TileContainer from './Containers/TileContainer'
import ControlPanel from './Containers/ControlPanel'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <ControlPanel></ControlPanel>
        <TileContainer></TileContainer>
      </div>     
    );
  }
}

export default App;
