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
                      <div class="item"><img src="https://1000logos.net/wp-content/uploads/2020/02/Movenpick-Logo-2003.png"/></div>
                      <div class="item"><img src="https://logowik.com/content/uploads/images/310_burgerking.jpg"/></div>
                      <div class="item "><img src={Banner1}/></div>
                      <div class="item mt-4"><img src="https://mma.prnewswire.com/media/621161/GPX_Global_Systems_Inc.jpg?p=facebook"/></div>
                      <div class="item"><img src="https://logowik.com/content/uploads/images/fujifilm-value-from-innovation9423.logowik.com.webp"/></div>
                      <div class="item"><img src="https://www.foodlover-eg.com/site_assets/images/foodlover-logo.png"/></div>
                      <div class="item  mt-4"><img src="https://getlogo.net/wp-content/uploads/2019/09/htds-hi-tech-detection-systems-logo-vector-xs.png"/></div>
                      <div class="item"><img src={Banner1}/></div>
                   
                      <div class="item"><img src={Banner1}/></div> 
                      <div class="item mb-4"><img src={Banner1}/></div>
                     
                     
                    
                  </OwlCarousel>
</div>
</div>
  )
}

export default Carousel