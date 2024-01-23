import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";

const Carousel = () => {
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