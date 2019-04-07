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

    addButtonClickHandler = () => {
        //add logic
    }

    render() {

        const controlPanelStyle = {
            padding: '15px',
            overflow: 'auto'           
        }

        const addButtonStyle = {
            height: '30px',
            float: 'left',
            margin: '5px 20px',
            padding: '0 10px',
            cursor: 'pointer',
            backgroundColor: 'DimGray',
            color: 'WhiteSmoke',
            border: 'none',
            borderRadius: '15px'
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
              <button style={addButtonStyle} onClick={this.addButtonClickHandler}>Add a new tile</button>
          </div>
        );
      }
}

export default ControlPanel;