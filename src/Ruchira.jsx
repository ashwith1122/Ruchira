import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import "./Ruchira.css"

function Ruchira() {
    return (
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark " style={{ backgroundColor: 'black', color: 'rgb(244,111,20)' }}>
                <Link class="navbar-brand">✦Ruchira🍝</Link>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/menu">Menu🍴</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <Link class="nav-link dropdown-toggle" to="/categories" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">FoodCards</Link>
                            <div class="dropdown-menu" aria-labelledby="dropdownId">
                                <Link class="dropdown-item" to="/categories/starters">Starters🥗</Link>
                                <Link class="dropdown-item" to="/categories/soups">Soups🍲</Link>
                                <Link class="dropdown-item" to="/categories/chinese">Chinese🍜</Link>
                                <Link class="dropdown-item" to="/categories/breakfast">Breakfast</Link>
                                <Link class="dropdown-item" to="/categories/meals">Meals🍛🍚</Link>
                                <Link class="dropdown-item" to="/categories/deserts">Deserts🍰</Link>
                                <Link class="dropdown-item" to="/categories/beverages">Beverages🥤</Link>
                                <Link class="dropdown-item" to="/categories/teacoffee">Tea&Coffees☕️</Link>
                                <Link class="dropdown-item" to="/categories/fastfood">FastFood🍔</Link>
                                <Link class="dropdown-item" to="/categories/panipuri">PaniPuri🥙</Link>
                                <Link class="dropdown-item" to="/categories/snacks">Snacks🫓</Link>
                                <Link class="dropdown-item" to="/categories/combos">Combos🍱</Link>
                            </div>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/aboutus">AboutUs</Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link" to="/login">Login</Link>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" style={{ backgroundColor: 'rgb(244,111,20)', color: 'black' }} type="submit">Search</button>
                    </form>
                </div>
            </nav>
            <Outlet />
        </div>
    )
}

export default Ruchira
