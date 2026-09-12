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

import './Menu.css';
import { NavLink } from 'react-router-dom'

function Menu() {
  const cat = [{ title: "Starters", image: ruchira35 }, { title: "Meals", image: ruchira36 }, { title: "Deserts", image: ruchira37 }, { title: "Starters", image: ruchira35 }, { title: "Starters", image: ruchira35 }]
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
      <div>
        <ul style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {
            cat.map((item) => (
              <div style={{ height: '400px', width: '400px', border: 'rgb(244,111,24) solid 2px', borderRadius: '20px' }}>
                <h1 style={{ color: 'rgb(244,111,24)', textAlign: 'center' }}>{item.title}</h1>
                <NavLink to={`/menucards/${item.title}`}>
                  <img src={item.image} style={{ height: '300px', width: '350px', color: 'rgb(244,111,24)' }} ></img>
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
