import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLanguageContext } from '../../Contexts/LanguageContext';
const options = {
    navigation : true, // Show next and prev buttons
 
    slideSpeed : 300,
    paginationSpeed : 400,

    items : 1, 
    itemsDesktop : false,
    itemsDesktopSmall : false,
    itemsTablet: false,
    itemsMobile : false,

    responsiveClass: true,
    nav: true,
    touchDrag:true,
  
    navText: ["" , ""],
    autoWidth:true,

    smartSpeed: 800,
    loop:true,
    center:true,
    autoplay:true,
    responsive: {
        800: {
            items: 1,
        },
   
      
    },
  };
const Carousel = () => {
    const { setLanguage, isEnglish } =
    useLanguageContext()
  return (
    
    <>

<OwlCarousel className="" {...options}>
                     
                      <div class="item " ><img src={Banner1}/></div>
                      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                      <div class="item"><img src={Banner1}/></div> 
                      <div class="item"><img src={Banner1}/></div>
                     
                     
                    
                  </OwlCarousel>

</>
  )
}

export default Carousel