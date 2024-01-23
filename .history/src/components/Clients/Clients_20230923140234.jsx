import React from 'react'
import "./Clients.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
// import Mövenpick from "./../../assets/clients/Mövenpick-Logo.png";
// import burgerking from "./../../assets/clients/burgerking.png";
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
                      <div class="item"><img src="https://mma.prnewswire.com/media/621161/GPX_Global_Systems_Inc.jpg?p=facebook"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
                      <div class="item"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"/></div>
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