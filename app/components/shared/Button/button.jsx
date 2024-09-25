'use client'
import React from 'react';
import './button.css';


 


    const Button = ({ children }) => {
        const [color, setColor] = React.useState('#2B6983');
    
        const handleMouseON = () => {
            setColor('white');
        };
    
        const handleMouseOFF = () => {
            setColor('#2B6983');
        };
       

        const [color2, setColor2] = React.useState('white');
    
        const handleMouseON2 = () => {
            setColor2('#2B6983');
        };
    
        const handleMouseOFF2 = () => {
            setColor2('white');
        };

    return (
        <>
       <div className='container'>
            <button  className="button"
            style={{ backgroundColor: color }}
            onMouseDown={handleMouseON}
            onMouseUp={handleMouseOFF}
        >
            je suis expéditeur
            {children}
        </button>

        <button  className="button1"
            style={{ backgroundColor: color2 }}
            onMouseDown={handleMouseON2}
            onMouseUp={handleMouseOFF2}
        >

        
            je suis transporteur 
            {children}
            </button>
           </div>
           <div className='photocontainer'>
           
            
           </div>


            
        </>
    );
};

export default Button;