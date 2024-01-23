import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useLanguageContext } from '../../Contexts/LanguageContext';

   
      
    },
  };
const Carousel = () => {
    const { setLanguage, isEnglish } =
    useLanguageContext()
  return (
    
    <>

<OwlCarousel className="" {...options}>
                     
                      <div class="item " ><img src={Banner1}/>   <h5>bdhyv byudfbv</h5></div>
                 
                      <div class="item"><img src={Banner1}/></div> 
                      <div class="item"><img src={Banner1}/></div>
                     
                     
                    
                  </OwlCarousel>

</>
  )
}

export default Carousel