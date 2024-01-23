import React from 'react'
import "./Present.css"
import { useLanguageContext } from '../../Contexts/LanguageContext';
const Present = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
  return (
    <>
               <div className=" " id="contain">



  
   <h2 className=" big-title  text-center">
                    {" "}
                    {isEnglish ? "What We Present" : "ماذا نقدم  "}
                </h2>
                <h5 className=" newcolor text-center mb-4">
                    {" "}
                    {isEnglish ? "For Our Clients" : "لعملائنا"}
                </h5>
                <div className='row'>
                    <div className='col-4'>


                    </div>
   
</div>
</div>
</>
  )
}

export default Present