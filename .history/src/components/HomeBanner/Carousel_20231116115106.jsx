import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLanguageContext } from '../../Contexts/LanguageContext';
const options = {
    margin:100,
  
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
                   
                      <div class="item"><img src={Banner1}/></div> 
                      <div class="item"><img src={Banner1}/></div>
                     
                     
                    
                  </OwlCarousel>

</>
  )
}

export default Carousel