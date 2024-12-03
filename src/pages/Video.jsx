import styles from '../styles/Video.module.css'
import { useNavigate, useLocation } from 'react-router-dom';


export default function Video() {
    const navigate = useNavigate();
    const location = useLocation();
    const { video, text, color } = location.state || {}; // Use default values if no state is passed

    const moreButton = (text, color) => {
        const link = `/info/${color}`
        navigate(link, { state: { text: text, color: color } });
    }

    const backButton = () => {
        navigate('/');
    }

    return (
        <div className={styles.VideoPage}>
            <div className={styles.Overlay}>
                <div onClick={() => moreButton(text, color)} className={styles.moreButton}>
                    <p>show</p>
                    <p>me</p>
                    <p>more</p>
                </div>
                <div onClick={() => backButton()} className={styles.backButton}>
                    <p>take</p>
                    <p>me</p>
                    <p>back</p>
                </div>
            </div>
            <div className={styles.videoPlayer}>
                <video className={styles.video} autoPlay controls>
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}