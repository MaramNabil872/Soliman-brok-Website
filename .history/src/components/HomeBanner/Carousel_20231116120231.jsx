import React from 'react'
import Banner1 from "./../../assets/images/background-banner2.jpg";

import { useLanguageContext } from '../../Contexts/LanguageContext';

   
      
 
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