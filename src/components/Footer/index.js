import React from 'react';

const Footer = () => {
    const Footer = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection : "column",
        height: '70px',
        fontWeight: 700,
        background: '#150f0f',
  
        width: '100vw',
        padding: "30px"
    }
    return (
        <div style={Footer}>
            Made By AMCoder<br/>
            <small>Copyright 2021</small>
        </div>
    )
}

export default Footer
