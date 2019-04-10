import React, { Component } from 'react';
import Tile from '../Components/Tile'

class TileContainer extends Component {

  constructor(props){
    super(props);

    this.props.tileContainerRef(this);
  }

    state = {
      tiles: [
        {color: "Salmon"}
      ]
    }

    addTile = (tileColor) => {
      const updatedTiles = [...this.state.tiles];

      updatedTiles.push({color: tileColor});

      this.setState({
        tiles: updatedTiles
      })
    }

    render() {

      const tilesToRender = this.state.tiles.map((tile) => <Tile key={tile.color} color={tile.color}></Tile>)

      const tileContainerStyle = {
        backgroundColor: 'DimGray',
        width: '100%',
        padding: '15px',
        overflow: 'auto'
      }

        return (
          <div style={tileContainerStyle}>
            {tilesToRender}
          </div>
        );
      }
}

export default TileContainer;