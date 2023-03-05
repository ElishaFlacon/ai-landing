import { useEffect, useState } from 'react'
import './App.css';


function Header() {

    const [scroll, setScroll] = useState(0);
    let windowSize = window.screen.width;

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const pointer = (scroll, pos, max) => {

        if (windowSize > 800) {
            if (scroll > pos && scroll < max) {
                return {
                    borderBottom: '#60c0ff solid 4px',
                    borderRadius: '8px',
                    animation: 'headerLineAnimation 0.2s linear'
                };
            }
        }

        return {
            borderBottom: '#60c0ff solid 4px',
            borderRadius: '8px',
            animation: 'headerLineReverseAnimation 0.2s linear',
            transition: "visibility 0.2s",
            visibility: 'hidden',
        };
    }


    return (
        <nav className='header' style={{ background: scroll > 1000 ? '#0E1525' : 'none' }}>
            <div className="container">
                <a href='#main' className="box">О нас<div style={pointer(scroll, 1400, 2400)} /></a>
                <a href='#team' className="box">Команда<div style={pointer(scroll, 2400, 3300)} /></a>
                <a href='#test' className="box">Тест<div style={pointer(scroll, 3300, 8000)} /></a>
            </div>
        </nav>
    )
}

export default Header