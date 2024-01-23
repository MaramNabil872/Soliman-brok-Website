import React from 'react'
import ContactUs from '../components/ContactUs/ContactUs'
import Location from "../components/ContactUs/Location";
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import LocationImage from "../assets/images/location1.png";
import { useLanguageContext} from "./../Contexts/LanguageContext";
import "./../App.css"
const ContactusPage = () => {
  const { setLanguage, isEnglish } =
  useLanguageContext();
  // const isEnglish = language === "English";

  return (
    <>

    <div className="row ">
        <div className="col p-4 m-4" style={{ alignSelf: "center" }}>
          <div className="container p-4  bgcolor rounded">
            <h3 className="text-center mt-4 ">  {isEnglish ? "Send us a message" : "أرسل رسالة "}</h3>
            <p className="text-center ">
            {isEnglish ? " Get in Touch for any Type of insurance Services." : " تواصل معنا للإستفسار عن انواع التأمين الأخرى .  "} 
            </p>
            <ContactUs />
          </div>
          <div className="mt-4 lightWhite">
            <Location />
          </div>
        </div>
        <div className="col" style={{ alignSelf: "center" }}>
          <div className="col">
            <div className="p-4 m-4 bgcolor rounded ">
              <h3 className=" text-center mb-4" >  {isEnglish ? "Location" : "الموقع"}</h3>
              <div className="text-center">
                <img
                  className="location rounded image-border"
                  src={LocationImage}
                ></img>
              </div>
              <div className="text-center mt-4">
                <button type="button" className="btn2">
                  <a
                    className="text-light"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    href="https://www.google.com/maps/place/Mahmoud+soliman+insurance+brokerage/@30.0579931,31.3461499,17z/data=!3m1!4b1!4m6!3m5!1s0x14583f092ea7e747:0x6bd9e1292872420d!8m2!3d30.0579885!4d31.3487248!16s%2Fg%2F11l2cr5t45?entry=ttu"
                  >
                    {isEnglish ? "  View in Google Maps" : "عرض في خرائط جوجل"}
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <PageTitle title="Contact Us" /> */}
      <Footer />
    </>
  );
};
export default ContactusPage;