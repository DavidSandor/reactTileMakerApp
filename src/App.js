import React, { Component } from 'react';
import TileContainer from './Containers/TileContainer'
import ControlPanel from './Containers/ControlPanel'

import './App.css';

class App extends Component {

  addButtonClickHandler = (tileColor) => {
    this.tileContainerRef.addTile(tileColor);
  }

  render() {

    const headerStyle = {
      padding: '15px',
      fontSize: '22px',
      fontWeight: 'bold'
    }

    return (
      <div className='App'>
        <header style={headerStyle}>TileMakerApp</header>
        <ControlPanel addButtonClickHandler={this.addButtonClickHandler}></ControlPanel>
        <TileContainer tileContainerRef={ref => (this.tileContainerRef = ref)}></TileContainer>
      </div>     
    );
  }
}

export default App;
