import { useLocation } from 'react-router-dom';
import styles from '../styles/Info.module.css';
import React from "react";

export default function Info(){
        const location = useLocation();
        const { text, color } = location.state || {}; // Use default values if no state is passed
        const items = [];

        for (let i = 0; i < text.length; i++) {
            items.push(<li key={i}>{text[i]}</li>);
          }
        

        // if (color == "pink"){
        //     return ( 
        //         <div style={{ color: color }}>
        //             <p>{items}</p>
        //         </div>
        //     );
        // }
        if (color == "pink"){
            return ( 
                <div>
      <h1>Fruits List</h1>
      <ul>
        {items.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
            );
        }

        else {
            return (
                <div>
                    <h1>BRUHHHH</h1>
                </div>
            )
        }
        
}