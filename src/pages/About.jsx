import styles from '../styles/About.module.css'
import { useNavigate } from 'react-router-dom';

export default function About() {
        const navigate = useNavigate();

           const backButton = () => {
        navigate('/');
    }
    return (
        <>
 <div className={styles.aboutPage}>
 <div className={styles.Overlay}>
                 <div onClick={() => backButton()} className={styles.backButton}>
                     <p>take</p>
                     <p>me</p>
                     <p>back</p>
                 </div>
             </div>
            <div className={styles.aboutPageText}>
                <p>I present three poems in conversation with one another; where I dissect my experiences of queerness, immigration, of isolation and belonging, using a digital documentation of colour and shape as my medium of expression. My short film trilogy serves as a video diary, presented in the form of a collage.</p>
                <p>The works negate the necessity of a specific time and place.</p>
                <p>You may choose your own timeline, and decide for yourself how you want to meet me.</p>
                <p>[There is no chronological order in which the films must be viewed]</p>
            </div>
        </div>
        </>
       
    )
}