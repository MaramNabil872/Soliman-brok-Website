import React from 'react'
import "./WhoWeAre.css"
import healthcare from "./../../assets/insurance-icons/exp.png";
import hour from "./../../assets/insurance-icons/24hr.png";
import heart from "./../../assets/insurance-icons/trust.png";
import money from "./../../assets/insurance-icons/cost.png";
import corporate from "./../../assets/insurance-icons/cor.png";
import employee from "./../../assets/insurance-icons/employee.png";

import { useLanguageContext } from '../../Contexts/LanguageContext';
const WhySoliman = () => {
  const { setLanguage, isEnglish } =
  useLanguageContext();
  return (
    <div>
        <div className=' pt-4 m-4 text-center '>
        <h2 className=' pt-4 text-center pb-4 newcolor fw-bold'>  {isEnglish ? "WHY SOLIMAN BROK  " : "لماذا سليمان للتامين؟"}</h2>
<p></p>

<div class="row m-4">
  <div class="col-lg-4 col-sm-12 col-md-6  " >
    <div class="card2 ">
      <img className='w-25 h-25 icons'src={healthcare} />
      <h5 className='mt-4 Fonts lightWhite'>  {isEnglish ? "Experience" : "خبرة"}</h5>
      <p className='lightWhite'>  {isEnglish ? "More Than 20 Years Of Experience In Insurance" : "أكثر من 20 عاما من الخبرة في مجال التأمين"}
</p>
    </div>
  </div>

  <div class="col-lg-4 col-sm-12 col-md-6">
    <div class="card2 col-sm-12">
    <img className='w-25 h-25 icons'src={hour} />
    <h5 className='mt-4 Fonts lightWhite'>  {isEnglish ? "Customer Service" : "خدمة الزبائن"}</h5>
      <p className='lightWhite'>  {isEnglish ? "24/7 Customer Service To our Clients" : "خدمة العملاء على مدار 24 ساعة طوال أيام الأسبوع لعملائنا"}</p>
    </div>
  </div>
  
  <div class="col-lg-4 col-sm-12 col-md-6">
    <div class="card2">
    <img className='w-25 h-25 icons'src={heart} />
    <h5 className='mt-4 Fonts lightWhite'>  {isEnglish ? "loyalty" : "وفاء"}</h5>
      <p className='lightWhite'>  {isEnglish ? "100% Of Our Loyalty is Only For Our Clients" : "ان 100% من ولاءنا هو لعملائنا فقط"}</p>
    </div>
  </div>
  

</div>
<div class="row m-4">
  <div class="col-lg-4 col-sm-12 col-md-6">
    <div class="card3">
    <img className='w-25 h-25 icons'src={money} />
    <h5 className='mt-4 Fonts lightWhite'>  {isEnglish ? "cost" : "التكلفه"}</h5>
      <p className='lightWhite'>  {isEnglish ? "Zero cost to our Cients" : "تكلفة 0 لعملائنا"}</p>
    </div>
  </div>

  <div class="col-lg-4 col-sm-12 col-md-6">
    <div class="card3">
    <img className='w-25 h-25 icons'src={corporate} />
    <h5 className='mt-4 Fonts lightWhite'>  {isEnglish ? "Corporate" : "شركة كبرى"}</h5>
      <p className='lightWhite'>  {isEnglish ? "More Than 100 Corporates Trust us" : "أكثر من 100 شركة تثق بنا"}</p>
    </div>
  </div>
  
  <div class="col-lg-4 col-sm-12 col-md-6 ">
    <div class="card3">
    <img className='w-25 h-25 icons'src={employee} />
      <h5 className='mt-4 Fonts lightWhite'>  {isEnglish ? "individual" : "فردي"}</h5>
      <p className='lightWhite'>  {isEnglish ? "More Than 5000 Clients Trusts Us" : "أكثر من 5000 عميل يثقون بنا"}</p>
    </div>
  </div>
  

</div>

  </div>
        
        </div>
  )
}

export default WhySoliman