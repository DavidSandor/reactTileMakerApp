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

    stretchedTileWidth(tile){
      const tileWidth = 1 / this.state.tiles.length * 100;
      return tileWidth + '%';
    }

    render() {

      const tilesToRender = this.state.tiles.map((tile) => <Tile key={tile.color} color={tile.color} width={this.stretchedTileWidth(tile)}></Tile>)

      const tileContainerStyle = {
        backgroundColor: 'DimGray',
        width: '100%',
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