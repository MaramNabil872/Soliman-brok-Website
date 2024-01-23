import React from 'react'
import "./Clients.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
import Mövenpick from "./../../assets/clients/Mövenpick-Logo.png";
import burgerking from "./../../assets/clients/burgerking.png";
import redcon from "./../../assets/clients/redcon.png";
import gpx from "./../../assets/clients/gpx-logo.jpg";
import hi from "./../../assets/clients/hi.png";
import german from "./../../assets/clients/german.png";
import modern from "./../../assets/clients/modern.jfif";
import smartglass from "./../../assets/clients/smartglass.jpg";
import system1 from "./../../assets/clients/system1.png";
import foodlover from "./../../assets/clients/foodlover.png";
import bricks from "./../../assets/clients/bricks.png";
import Fujifilm from "./../../assets/clients/Fujifilm.png";


const Clients = () => {
   
    const options = {
        margin: 250,
        responsiveClass: true,
        loop:true,
        mergeFit:true,
        padding:39,
        nav: true,
        autoplay: false,
        navText: ["⬅️ ", " ➡️"],
        smartSpeed: 1000,
        center: true,

        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 5,
            }
        },
      };
  return (
    <>
          
         
    
    
        
          <div className=''>
          <h1 className='text-center darkBlue m-4 pt-4'>Clients who trusted us </h1>
<OwlCarousel className="slide" {...options}>
                      <div className=" client-logo d-flex"><img src={Mövenpick}/></div>
                      <div className=" client-logo"><img src={burgerking}/></div>
                      <div className=" client-logo "><img src={redcon}/></div>
                      <div className=" client-logo"><img src={german}/></div>
                      <div className=" client-logo"><img src={gpx}/></div>
                      <div className=" client-logo"><img src={system1}/></div>
                      <div className=" client-logo"><img src={modern}/></div>
                      <div className=" client-logo"><img src={bricks}/></div>
                      <div className=" client-logo "><img src={foodlover}/></div>
                      <div className=" client-logo"><img src={hi}/></div>
                      <div className=" client-logo"><img src={smartglass}/></div>
                      <div className="item client-logo"><img src={Fujifilm}/></div>
                  </OwlCarousel>
</div>
 
        
        {/* <div className="row ">
            <h1
              
                className="text-center my-4 newcolor  "
                style={{fontWeight:"bold", fontSize:"40px"  }}
            >
                Our Clients
            </h1>
        </div>
        <div className='item3 '>
        <div className="row justify-content-center text-center h-50 ">
            <ClientsItems
            
        
                imageSource={Mövenpick}
            />
            <ClientsItems
          
                imageSource={burgerking}
            />
            <ClientsItems
            
                imageSource={redcon}
            />
            <ClientsItems
               
                imageSource={german}
            />
        </div>
        <div className="row justify-content-center text-center h-25">
            <ClientsItems
          
                imageSource={gpx}
            />
            <ClientsItems
                 imageSource={system1}
            />
            <ClientsItems title="Life Insurance" imageSource={modern} />
            <ClientsItems
               
                imageSource={bricks}
            />
                                <ClientsItems
              
                imageSource={foodlover}
            />
            <ClientsItems
              
              imageSource={smartglass}
          />
          <ClientsItems
              
              imageSource={hi}
          />
          <ClientsItems
              
              imageSource={Fujifilm}
          />
            
        </div>
        </div> */}
  

</>
  )
}

export default Clients