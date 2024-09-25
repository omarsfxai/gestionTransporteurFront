import React from "react";
import './button2.css';

const Button2 = ({ children }) => {
    const [color, setColor] = React.useState('#2B6983');

    const handleMouseON = () => {
        setColor('white');
    };

    const handleMouseOFF = () => {
        setColor('#2B6983');
    };
    
    return (
       <>
            <button className="button2"
                style={{ backgroundColor: color }}
                onMouseDown={handleMouseON}
                onMouseUp={handleMouseOFF}
            >
                Modifier
                {children}
            </button>
            </>
    );
}

export default Button2;