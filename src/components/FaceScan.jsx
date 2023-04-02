import { useState, useEffect } from 'react';
import '../styles/App.css';


function FaceScan() {

    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };


    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const lineAnim = (scroll) => {
        if (scroll < 400) {
            return scroll - 50;
        }

        return 350;
    }

    const faceAnim = (scroll) => {
        if (scroll < 50) {
            return 0;
        }

        if (scroll < 350) {
            return scroll - 50;
        }

        return 300;
    }

    const faceLineAnim = (scroll) => {
        if (scroll > 750) {
            return 300;
        }

        if (scroll > 450) {
            return scroll - 450;
        }
    }

    const scanOut = (scroll, line) => {
        if (scroll > 750) {
            if ((1 - ((scroll - 750) / 300)) > 0.03) {
                return (1 - ((scroll - 750) / 300));
            }

            if (line) {
                return 0;
            }

            return 0.03;
        }

        return 1;
    }

    const scanScale = (scroll) => {
        if (scroll > 750) {
            if (scroll / 750 > 1.2) {
                return 1.2;
            }

            return scroll / 750;
        }

        return 1;
    }




    return (
        <div className="scan-wrapper">

            <div className="scan" style={{
                opacity: `${scanOut(scroll)}`,
                transform: `scale(${scanScale(scroll)})`,

            }}>

                <div className="first-face">
                    <div className="line" style={{
                        top: `${lineAnim(scroll)}px`,
                        opacity: `${scanOut(scroll, true)}`,
                    }} />
                </div>

                <div className="second-face" style={{
                    height: `${faceAnim(scroll)}px`
                }} />

                <div className="dot-face" style={{
                    height: `${faceAnim(scroll)}px`
                }} />

                <div className="line-face" style={{
                    height: `${faceLineAnim(scroll)}px`,
                    opacity: `${scroll > 450 ? 1 : 0}`
                }} />

                <div className="arrow" style={{
                    opacity: scroll ? "0" : "1",
                    transition: "all 1s",
                    visibility: scroll ? "hidden" : "visible",
                }} >
                    <div />
                    <div />
                    <div />
                </div>

            </div >

        </div >
    );
}


export default FaceScan;
