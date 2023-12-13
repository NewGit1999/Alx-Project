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
                this is a website to make easier ordering a pizza with our beautiful interfaces.
            </p>
        </div>
      
    </div>
  )
}

export default About
