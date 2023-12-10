import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from "../assets/top-view-baked-pizza.jpg"
import "../design/Home.css"


function Home() {
  return (
    <div className='home'>
      <div className='headerContainer' style={{ backgroundImage: `url(${BannerImage})` }}>
        <h1> Jasmin Pizzaria</h1>
        <p>Slice of Happiness</p>
        <Link to="/Menu">
          <button> Make order</button>
        </Link>
      </div>
      
    </div>
  )
}

export default Home
