import React from 'react'
import { GrMapLocation } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";
import { FcPhone } from "react-icons/fc";
import  location  from  "./../../assets/images/location1.PNG";
import "./ContactUs.css";
import { useLanguageContext } from '../../Contexts/LanguageContext';
const Location = () => {
  const { setLanguage, isEnglish } =
  useLanguageContext();

  return (
    <div className="container d-flex bgcolor rounded">
    <div className="m-4">
      <h3 className="darkBlue " style={{color:"#161837" }} >  {isEnglish ? "Contact us" : "تواصل معنا"}</h3>

      <p className="mt-4 darkblue-50" style={{ fontSize: "13px" , color:"#161837"}}>
        <GrMapLocation id="location" color="orange" /> <span></span>  {isEnglish ? " Hussien Afify-Makram Ebied Nasr City, Cairo , Egypt" : " حسين عفيفي - مكرم عبيد- مدينة نصر، القاهرة، مصر 2"}
      </p>

      <p style={{ fontSize: "13px" , color:"#161837"}} className="darkBlue-50" >
        <FcPhone id="location" color="orange" />
        <span> </span>012 8215 3333 - 012 2630 3959
      </p>
      <p style={{ fontSize: "13px" , color:"#161837"}} className="darkBlue-50">
        <GrMailOption id="location" />
        <span> </span><a href="Mahmoud@SolimanBrok.Com" className='darkBlue'>Mahmoud@SolimanBrok.Com</a>
      </p>
      <p style={{ fontSize: "13px" , color:"#161837"}} className="darkBlue-50">
        <GrMailOption id="location" />
        <span> </span><a href="Mahmoud@SolimanBrok.Com" className='darkBlue'>Mahmoud@SolimanBrok.Com</a>
      </p>
 
    </div>
    {/* <div style={{ marginLeft: "100px", marginTop: "20px" }}>
      <h5 className="lightGrey">Business Hours</h5>
      <p className="mt-4 text-white-50" style={{ fontSize: "13px" }}>
        <TbClockHour8 color="orange" /> Mon-Fri From 8 AM - 6 PM
      </p>
      <p className="text-white-50" style={{ fontSize: "13px" }}>
        <TbClockHour8 color="orange" /> Sat From 8 AM -1 PM
      </p>
      <p className="text-white-50" style={{ fontSize: "13px" }}>
        <TbClockCancel color="orange" /> Sun Closed
      </p>
    </div> */}
  </div>
);
};

export default Location