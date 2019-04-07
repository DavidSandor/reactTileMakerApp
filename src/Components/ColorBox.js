import React from 'react';

const colorBox = (input) => {   

    const style = {
        width: '30px',
        height: '30px',
        backgroundColor: input.color,
        float: 'left',
        margin: '5px',
        boxSizing: 'border-box',
        cursor: 'pointer',
        border: input.isSelected ? '2px solid black' : 'none'
    }

    return <div style={style} onClick={input.click} title={input.color}></div>;
}

export default colorBox;