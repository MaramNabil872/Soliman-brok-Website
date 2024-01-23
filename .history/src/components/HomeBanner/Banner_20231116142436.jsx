import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


import Banner1 from "./../../assets/images/background-banner1.jpeg";
const options = {
    margin:100,
    responsiveClass: true,
    nav: true,
    touchDrag:true,
    autoplay: false,
    navText: ["" , ""],

    smartSpeed: 1000,
    loop:true,
    center:true,
    autoplay:true,
    responsive: {
        0: {
            items: 1,
        },
    
    },
  };
const Banner = () => {
  return (
    <div>
          <Carousel fade  {...options}>
      <Carousel.Item>
        <img src={Banner1} text="First slide" class="item" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Banner1} text="First slide" class="item" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={Banner1} text="First slide" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner