import React, { Component } from 'react';

class TileContainer extends Component {

    render() {

      const tileContainerStyle = {
        backgroundColor: 'DimGray',
        width: '100%',
        height: '200px'
      }

        return (
          <div style={tileContainerStyle}></div>
        );
      }
}

export default TileContainer;