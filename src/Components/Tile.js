import React from 'react';

const tile = (input) => {     

    const tileStyle = {
        backgroundColor: input.color,
        width: '100px',
        height: '100px',
        float: 'left',
        margin: '5px'   
    }

    return <div style={tileStyle}></div>;
}

export default tile;