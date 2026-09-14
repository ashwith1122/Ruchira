import React from 'react'
import ruchira45 from '../assets/ruchira45.png'
import { useNavigate } from 'react-router-dom'
import "./Gratitude.css";
function Gratitude() {
    const navigate = useNavigate()
    function handleme() {
        navigate("/")
    }
    return (
        <div>
            <img src={ruchira45} alt="no image" style={{ height: '1000px', width: '100%' }}></img>
            <button onClick={handleme} id="namaste">Visit Again</button>
        </div>
    )
}

export default Gratitude
