import React from 'react'
import ruchira28 from '../assets/ruchira28.png'
import ruchira29 from '../assets/ruchira29.png'
import ruchira30 from '../assets/ruchira30.png'
import ruchira31 from '../assets/ruchira31.png'
import ruchira32 from '../assets/ruchira32.png'
import ruchira33 from '../assets/ruchira33.png'
import ruchira34 from '../assets/ruchira34.png'
import ruchira35 from '../assets/ruchira35.png'
import ruchira36 from '../assets/ruchira36.png'
import ruchira37 from '../assets/ruchira37.png'
import ruchira38 from '../assets/ruchira38.png'
import ruchira39 from '../assets/ruchira39.png'
import ruchira40 from '../assets/ruchira40.png'
import ruchira46 from '../assets/ruchira46.png'
import ruchira47 from '../assets/ruchira47.png'
import ruchira48 from '../assets/ruchira48.png'
import ruchira49 from '../assets/ruchira49.png'
import ruchira50 from '../assets/ruchira50.png'
import ruchira51 from '../assets/ruchira51.png'
import ruchira52 from '../assets/ruchira52.png'
import ruchira53 from '../assets/ruchira53.png'

import './Menu.css';
import { NavLink } from 'react-router-dom'

function Menu() {
  const cat = [{ title: "Starters", image: ruchira35 }, { title: "Soups", image: ruchira36 }, { title: "Chinese", image: ruchira37 }, { title: "Breakfast", image: ruchira38 }, { title: "Meals", image: ruchira39 }, , { title: "Deserts", image: ruchira40 }, { title: "Beverages", image: ruchira47 }, , { title: "TeaCoffee", image: ruchira48 }, { title: "Fastfood", image: ruchira49 }, , { title: "Panipuri", image: ruchira50 }, { title: "Combos", image: ruchira51 }, { title: "Chapathis", image: ruchira52 }, { title: "Snacks", image: ruchira53 }]
  return (
    <div>
      <div className="container">
        <div id="carouselId" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselId" data-slide-to="0" class="active"></li>
            <li data-target="#carouselId" data-slide-to="1"></li>
            <li data-target="#carouselId" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img src={ruchira28} alt="No image" />
            </div>
            <div class="carousel-item ">
              <img src={ruchira29} alt="No image" />
            </div>
            <div class="carousel-item ">
              <img src={ruchira30} alt="No image" />
            </div>
            <div class="carousel-item ">
              <img src={ruchira31} alt="No image" />
            </div>
            <div class="carousel-item ">
              <img src={ruchira32} alt="No image" />
            </div>
            <div class="carousel-item ">
              <img src={ruchira33} alt="No image" />
            </div>
            <div class="carousel-item ">
              <img src={ruchira34} alt="No image" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselId" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselId" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>

        </div>
      </div>
      <img src={ruchira46} alt="noimg" style={{ height: '600px', width: '100%', margin: 0, padding: 0 }}></img><br /><br /><br />
      <div>
        <ul style={{ display: 'flex', gap: '50px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {
            cat.map((item) => (
              <div style={{ height: '500px', width: '550px', border: 'rgb(244,111,24) solid 2px', borderRadius: '20px' }} id="hi">
                {/* <h1 style={{ color: 'rgb(244,111,24)', textAlign: 'center' }}>{item.title}</h1> */}
                <NavLink to={`/menucards/${item.title}`}>
                  <img src={item.image} style={{ height: '497px', width: '547px', color: 'rgb(244,111,24)', display: 'flex', margin: '0 auto', borderRadius: '20px' }} ></img>
                </NavLink>
              </div>
            ))
          }
        </ul>
      </div >
    </div >
  )
}

export default Menu
