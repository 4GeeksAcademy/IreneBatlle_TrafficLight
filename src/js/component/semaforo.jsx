import React, { useState } from "react";
import '../../styles/index.css';

const Semaforo = () => {
    const [color, setColor] = useState('red'); 
    const selectColor = (colorSelected) => {
        setColor(colorSelected); 
    };

    return (
        <div className="trafficLight">
            <div
                className={`light redLight ${color === "red" ? "active" : ""}`}
                onClick={() => selectColor("red")}
            ></div>
            <div
                className={`light yellowLight ${color === "yellow" ? "active" : ""}`}
                onClick={() => selectColor("yellow")}
            ></div>
            <div
                className={`light greenLight ${color === "green" ? "active" : ""}`}
                onClick={() => selectColor("green")}
            ></div>
        </div>
    );
};

export default Semaforo;