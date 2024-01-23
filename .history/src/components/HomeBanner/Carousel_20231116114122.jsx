import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";

const Carousel = () => {
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
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
      };
  return (
    <div>
    <div id="myCarousel" class="carousel slide" data-ride="carousel">
  
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner" role="listbox">
            <div class="item active">
                <img class="first-slide" style={{ backgroundImage:  `url(${Banner1})`}}/>
            </div>
            <div class="item">
                <img class="second-slide"  style={{ backgroundImage:  `url(${Banner1})`}}/>
            </div>
            <div class="item">
                <img class="third-slide"  style={{ backgroundImage:  `url(${Banner1})`}}/>
            </div>
        </div>
        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>

</div>
  )
}

export default Carousel