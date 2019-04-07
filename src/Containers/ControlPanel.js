import React, { Component } from 'react';
import ColorBox from '../Components/ColorBox';

class ControlPanel extends Component {
 
    colors = ['Green', 'Gold', 'Salmon', 'LightBlue']


    state = {
        selectedColor: this.colors[0]
    }
    
    colorBoxClickHandler = (event, color) => {
        this.setState(
            {selectedColor: color}
        )
    }

    render() {

        const controlPanelStyle = {
            padding: '15px'
        }

        const colorBoxCollection = this.colors.map((color) =>
            <ColorBox key={color} color={color} 
                      click={(event) => this.colorBoxClickHandler(event, color)} 
                      isSelected={this.state.selectedColor === color}>
            </ColorBox>)

        return (
          <div style={controlPanelStyle}>
              <p>Choose a color:</p>
              {colorBoxCollection}
          </div>
        );
      }
}

export default ControlPanel;