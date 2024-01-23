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
          
          <div id="myCarousel" class="carousel slide container" data-bs-ride="carousel">
  <div class="carousel-inner w-100">
    <div class="carousel-item active">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=1">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=2">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=3">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=4">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=5">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=6">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=7">
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="col-md-3">
        <div class="card card-body">
          <img class="img-fluid" src="http://placehold.it/380?text=8"/>
        </div>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
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