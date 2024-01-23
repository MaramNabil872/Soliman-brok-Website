import React from 'react'
import OwlCarousel from 'react-owl-carousel';
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
          
          <div className="container-fluid">
  <div className="row">
        <div className="col">
          <h2 className="font-weight-lighter suzohapp-light-blue text-center py-4">You might also be interested</h2>
        </div>
  </div>
  <div className="row">
  <div id="related-products-slider-container" className="owl-container col">
   <div className="owl-carousel owl-theme card-group">
     <div className="card bg-white border-suzohapp-light-grey h-100 related_products_card">
            <div className="card-header bg-white border-bottom-0">
              <span className="suzohapp-dark-grey font-weight-ligther">Short Description 1</span>
            </div>
            <div className="card-body card-body align-items-center d-flex justify-content-center px-3">
              <img className="card-img box-image-cover" src="http://i.imgur.com/Hw7sWGU.png"/>
            </div>
            <div className="card-footer bg-suzohapp-light-grey border-0">
              <h6 className="card-title text-uppercase suzohapp-light-blue mb-2 font-weight-light">Post Title 1</h6>
              <span className="suzohapp-dark-grey font-weight-ligther">Cat Short Description</span>
              <a href="#" className="card-link stretched-link font-weight-normal brand-link-hp">
                <span className="suzohapp-dark-grey text-capitalize">Product Categories</span>
              </a>
            </div>
     </div>
     <div className="card bg-white border-suzohapp-light-grey h-100 related_products_card">
            <div className="card-header bg-white border-bottom-0">
              <span className="suzohapp-dark-grey font-weight-ligther">Short Description 2</span>
            </div>
            <div className="card-body card-body align-items-center d-flex justify-content-center px-3">
              <img className="card-img box-image-cover" src="http://i.imgur.com/Hw7sWGU.png"/>
            </div>
            <div className="card-footer bg-suzohapp-light-grey border-0">
              <h6 className="card-title text-uppercase suzohapp-light-blue mb-2 font-weight-light">Post Title 2</h6>
              <span className="suzohapp-dark-grey font-weight-ligther">Cat Short Description</span>
              <a href="#" className="card-link stretched-link font-weight-normal brand-link-hp">
                <span className="suzohapp-dark-grey text-capitalize">Product Categories</span>
              </a>
            </div>
     </div>
     <div className="card bg-white border-suzohapp-light-grey h-100 related_products_card">
            <div className="card-header bg-white border-bottom-0">
              <span className="suzohapp-dark-grey font-weight-ligther">Short Description 3</span>
            </div>
            <div className="card-body card-body align-items-center d-flex justify-content-center px-3">
              <img className="card-img box-image-cover" src="http://i.imgur.com/Hw7sWGU.png"/>
            </div>
            <div className="card-footer bg-suzohapp-light-grey border-0">
              <h6 className="card-title text-uppercase suzohapp-light-blue mb-2 font-weight-light">Post Title 3</h6>
              <span className="suzohapp-dark-grey font-weight-ligther">Cat Short Description</span>
              <a href="#" className="card-link stretched-link font-weight-normal brand-link-hp">
                <span className="suzohapp-dark-grey text-capitalize">Product Categories</span>
              </a>
            </div>
     </div>
   </div>
   <div className="owl-theme">
     <div className="owl-controls d-block">
       <div className="custom-nav owl-nav"></div>
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