import { useLocation, useNavigate } from 'react-router-dom';
import styles from '../styles/Info.module.css';
import React, { useEffect } from "react";

export default function Info() {
    const location = useLocation();
    const navigate = useNavigate();
    const { text, color } = location.state || {}; // Use default values if no state is passed

    // Redirect to Home if color is not valid
    useEffect(() => {
        if (color !== "pink" && color !== "blue" && color !== "white") {
            navigate("/"); // Redirect to Home
        }
    }, [color, navigate]);

    // Dynamically adjust #root styles for scrolling
    useEffect(() => {
        const rootElement = document.getElementById("root");

        if (color === "white") {
            rootElement.style.overflow = "auto"; // Enable scrolling
            rootElement.style.height = "auto";   // Adjust height for content
        } else {
            rootElement.style.overflow = "hidden"; // Disable scrolling
            rootElement.style.height = "100%";     // Reset height
        }

        return () => {
            // Cleanup: reset styles when leaving the page
            rootElement.style.overflow = "hidden";
            rootElement.style.height = "100%";
        };
    }, [color]);

    const renderTextWithLineBreaks = (content) => {
        return content.split('\n').map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    const backButton = () => {
        navigate('/');
    }

    const paragraphs = Array.isArray(text)
        ? text.map((item, index) => (
            <p key={index}>{renderTextWithLineBreaks(item)}</p>
        ))
        : [];
    if (color != "white") {
        return (
            <>
            <div className={styles.Overlay}>
            <div onClick={() => backButton()} className={styles.backButton}>
                                <p>take</p>
                                <p>me</p>
                                <p>back</p>
                            </div>
             </div>
<div className={styles.bluePinkPage}>
            
            
                <div className={styles.textHolder}>
                    {color === "pink" ? ( 
                        <div className={styles.pinkText}>
                            {paragraphs}
                        </div>
                    ) : color === "blue" ? (
                        <div className={styles.blueText}>
                            {paragraphs}
                        </div>
                    ) : (
                        <div className={styles.defaultText}>
                            <h1>BRUHHHH</h1>
                        </div>
                    )}
               
                </div>
            </div>
            </>
            
        );
    }
    else {
        return (
            <>
            <div className={styles.Overlay}>
            <div onClick={() => backButton()} className={styles.backButton}>
                                <p>take</p>
                                <p>me</p>
                                <p>back</p>
                            </div>
                             </div>
<div className={styles.whitePage}>
            
                           
                <div className={styles.textHolder}>
                    <div className={styles.whiteText}>
                        {paragraphs}
                    </div>
                </div>
            </div>
            
            </>
            
        )
    }
}
