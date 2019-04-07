import React, { Component } from 'react';
import ColorBox from '../Components/ColorBox';

class ControlPanel extends Component {

    Colors = ['Green', 'Gold', 'Salmon', 'LightBlue']

    render() {

        const colorBoxCollection = this.Colors.map((color) => <ColorBox key={color} color={color}></ColorBox>)

        return (
          <div>
              <p>Choose a color:</p>
              {colorBoxCollection}
          </div>
        );
      }
}

export default ControlPanel;