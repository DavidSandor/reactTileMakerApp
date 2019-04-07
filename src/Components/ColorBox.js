import React from 'react';

const colorBox = (input) => {

    const style = {
        width: '20px',
        height: '20px',
        backgroundColor: input.color
    }

    return <div style={style}></div>;
}

export default colorBox;