import React from 'react'
import "./Clients.css"
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
   

  return (
    <>
          
          <div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row container-fluid">
<div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Basic carousel</h4>
                  <div class="owl-carousel">
                    <div class="item">
                      <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204140/banner_12.jpg" alt="image"/>
                    </div>
                    <div class="item">
                      <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204172/banner_2.jpg" alt="image"/>
                    </div>
                    <div class="item">
                      <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204663/park-4174278_640.jpg" alt="image"/>
                    </div>
                     <div class="item">
                      <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image"/>
                    </div>
                     <div class="item">
                      <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204172/banner_2.jpg" alt="image"/>
                    </div>
                     <div class="item">
                      <img src="https://res.cloudinary.com/dxfq3iotg/image/upload/v1557204663/park-4174278_640.jpg" alt="image"/>
                    </div>
                     <div className="item">
                      <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image"/>
                    </div>
                     <div className="item">
                      <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image"/>
                    </div>
                     <div className="item">
                      <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image"/>
                    </div>
                     <div className="item">
                      <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image"/>
                    </div>
                     <div className="item">
                      <img src="http://www.urbanui.com/fily/template/images/carousel/banner_2.jpg" alt="image"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
              </div>
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