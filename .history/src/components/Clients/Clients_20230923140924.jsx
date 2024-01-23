import React from 'react'
import "./Clients.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
import redcon from "./../../assets/clients/redcon.png";

import german from "./../../assets/clients/german.png";
import modern from "./../../assets/clients/modern.jfif";
import smartglass from "./../../assets/clients/smartglass.jpg";
import system1 from "./../../assets/clients/system1.png";
import foodlover from "./../../assets/clients/foodlover.png";
import bricks from "./../../assets/clients/bricks.png";
import Fujifilm from "./../../assets/clients/Fujifilm.png";

const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
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
const Clients = () => {
   

  return (
    <>
          
         
    
    
    
    <div>
  <h1>Reactjs OwlCarousel Working</h1>
<OwlCarousel className="slider-items owl-carousel" {...options}>
                      <div class="item"><img src="https://1000logos.net/wp-content/uploads/2020/02/Movenpick-Logo-2003.png"/></div>
                      <div class="item"><img src="https://logowik.com/content/uploads/images/310_burgerking.jpg"/></div>
                      <div class="item "><img src={redcon}/></div>
                      <div class="item mt-4"><img src="https://mma.prnewswire.com/media/621161/GPX_Global_Systems_Inc.jpg?p=facebook"/></div>
                      <div class="item  mt-4"><img src="https://getlogo.net/wp-content/uploads/2019/09/htds-hi-tech-detection-systems-logo-vector-xs.png"/></div>
                      <div class="item"><img src="https://mgmt.manhom.com/images/33881/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D8%A5%D9%8A%D8%AC%D8%A7%D8%AA.webp"/></div>
                      <div class="item"><img src="data:image/png;base64,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"/></div>
                      <div class="item"><img src="data:image/jpeg;base64,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"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
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