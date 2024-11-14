import React, { useState } from 'react';

function ColorChanger() {
    const [bgColor, setBgColor] = useState('#FFFFFF'); // Initial background color is white

    // Function to generate a random hex color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Function to change the background color
    const changeColor = () => {
        const randomColor = getRandomColor();
        setBgColor(randomColor);
    };

    return (
        <div
            style={{
                backgroundColor: bgColor,        // Set the background color
                height: '100vh',                 // Full viewport height
                width: '100vw',                  // Full viewport width
                display: 'flex',                 // Enable flexbox for centering
                justifyContent: 'center',        // Center horizontally
                alignItems: 'center',            // Center vertically
            }}
        >
            <button
                onClick={changeColor}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer',
                    border: 'none',
                    boxShadow: '#00000080 2px 2px 4px 4px', // Corrected here
                    borderRadius: '8px',
                    backgroundColor: '#333',
                    color: '#fff',
                }}
            >
                Change Background Color: {bgColor}
            </button>


        </div >
    );
}

export default ColorChanger;
