import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeBanner from "../components/HomeBanner/HomeBanner";
import Service from "../components/Service/Service";
import AboutUs from "../components/AboutUs/AboutUs";
import Footer from "../components/Footer/Footer";
import LocationImage from "../assets/images/location1.png";
import ContactUs from "../components/ContactUs/ContactUs";
import Location from "../components/ContactUs/Location";
import Reviews from "../components/Reviews/Reviews";
import Clients from "../components/Clients/Clients";
import Carousel from "../components/HomeBanner/Carousel";


const HomePage = () => {
    return (
        <div>
     <Carousel/>
            <HomeBanner />
            
            <Service />
            <AboutUs />
         <Clients/>
            {/* <div className="row bgcolor">
        <div className="col p-4 m-4 darkBlue" style={{ alignSelf: "center" }}>
          <div className="container p-4 darkBlue  rounded">
            <h1 className="text-center mt-4 darkBlue">Company Location</h1>
            <p className="text-center darkBlue">
              Get in Touch for any Type of insurance Services.
            </p>
        
          </div>
          <div className="mt-4 lightWhite">
         
          </div>
        </div>
        <div className="col" style={{ alignSelf: "center" }}>
          <div className="col">
            <div className="p-4 m-4 bgcolor rounded ">
            
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
                    View in Google Maps
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
            <Footer />
        </div>
    );
};

export default HomePage;
