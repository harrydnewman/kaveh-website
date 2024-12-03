import { useLocation } from 'react-router-dom';

export default function Info(){
        const location = useLocation();
        const { text, color } = location.state || {}; // Use default values if no state is passed
    
        return (
            <div style={{ color: color }}>
                <h1>I am the info page</h1>
                <p>{text}</p>
            </div>
        );
}