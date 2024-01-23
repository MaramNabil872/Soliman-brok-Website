import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLanguageContext } from '../../Contexts/LanguageContext';
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
const Carousel = () => {
    const { setLanguage, isEnglish } =
    useLanguageContext()
  return (
    <div className=' container'>
    <div>

<OwlCarousel className="slider-items owl-carousel slide" {...options}>
                     
                      <div class="item"><img src={Banner1}/></div>
                   
                      <div class="item"><img src={Banner1}/></div> 
                      <div class="item mb-4"><img src={Banner1}/></div>
                     
                     
                    
                  </OwlCarousel>
</div>
</div>
  )
}

export default Carousel