import { useLocation } from 'react-router-dom';
import styles from '../styles/Info.module.css';

export default function Info(){
        const location = useLocation();
        const { text, color } = location.state || {}; // Use default values if no state is passed

        if (color == "pink"){
            return (
                <div style={{ color: color }}>
                    <p>{text}</p>
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