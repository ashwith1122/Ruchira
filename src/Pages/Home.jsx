import React from 'react'
import ruchira1 from '../assets/ruchira1.png'
import ruchira3 from '../assets/ruchira3.png'
import ruchira4 from '../assets/ruchira4.png'
import footer from '../assets/footer.png';
import './Home.css';
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate()
  function showmenu() {
    navigate("/menu")
  }
  function aboutus() {
    navigate("/aboutus")
  }
  return (
    <div className="hero">
      <img src={ruchira1} alt="noimg" style={{ height: '685px', width: '100%' }} />
      <div className='hero-buttons'>
        <button className='btn but1' style={{ backgroundColor: 'rgb(244,111,24)' }} onClick={showmenu}>Explore Menu 🍽️</button>
        <button className='btn but2' style={{ backgroundColor: 'rgb(244,111,24)' }}>BookTable📅</button>
      </div>
      <img src={ruchira3} className="view" alt="noimg" style={{ height: '350px', width: '97%' }} />
      <button className='btn viewall'>View All →</button>
      <div className='hii' style={{ backgroundColor: 'black', color: 'white', height: '20px', width: '100px' }}></div>
      <img src={ruchira4} className="harsha" alt="noimg" />
      <button className='ashu' onClick={aboutus}>Know More About Us</button>
      <img src={footer} id="footers"></img>
      <a href="tel:9581140049" className="footer-phone" >
        📞 9581140049
      </a>
      <a href="tel:8897036574" className="footer-phone1" >
        📞 8897036574
      </a>
      <a
        href="https://www.google.com/maps/search/?api=1&query=Ruchira+Restaurant+Khanapur+Nirmal+Telangana"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-location"
      >
        📍 Khanapur, Nirmal, Telangana
      </a>
      <h3 style={{ color: 'rgb(244,111,24)' }} id="me">꧁Thankyou꧂..🙏</h3>
    </div>
  )
}

export default Home
