import React from 'react';

const tile = (input) => {     

    const tileStyle = {
        backgroundColor: input.color,
        width: input.width,
        height: '200px',
        float: 'left'
    }

    return <div style={tileStyle}></div>;
}

export default tile;