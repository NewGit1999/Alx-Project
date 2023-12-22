import React from 'react'
import PizzaCut from "../assets/pizza-group.jpeg";
import "../design/About.css";

function About() {
  return (
    <div  className='about'>
        <div className='aboutTop' style={{ backgroundImage: `url(${PizzaCut})` }}> 

        </div>
        <div className='aboutBottom'>
            <h1>ABOUT US</h1>
            <p>
            Welcome to Jasmin Pizzaria ! Here, we celebrate the art and diversity of pizza. Our site is dedicated to showcasing an array of tantalizing pizza types from across the globe, offering a virtual feast for pizza enthusiasts.
At our sapce , we're passionate about the universal love for pizza. We curate an extensive collection of pizza varieties, each representing a unique culinary tradition, flavor profile, and cultural heritage
            </p>
        </div>
      
    </div>
  )
}

export default About
