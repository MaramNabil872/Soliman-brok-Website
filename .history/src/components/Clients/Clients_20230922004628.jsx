import React from 'react'
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
          
    <div className="p-4  mt-4 ">
         <div className=' pt-4 m-4 text-center '>
        <h2 className=' pt-4 text-center pb-4 newcolor fw-bold'>WHY SOILMAN BROK?</h2>
<p></p>

<div class="col d-flex ">
  <div class="column ">
    <div class="card ">
      <img className='w-25 h-25 icons'src={burgerking} />
      <h5 className='mt-4 Fonts titleBlue'>Experience</h5>
      <p className='titleBlue'>More Than 20 Years Of Experience In Insurance
Field</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img className='w-25 h-25 icons'src={hour} />
    <h5 className='mt-4 Fonts titleBlue'>Customer Service</h5>
      <p className='titleBlue'>24/7 Customer Service To our Clients</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img className='w-25 h-25 icons'src={heart} />
    <h5 className='mt-4 Fonts titleBlue'>loyalty</h5>
      <p className='titleBlue'>100% Of Our Loyalty is Only</p>
    </div>
  </div>
  

</div>
<div class="col d-flex pt-4">
  <div class="column">
    <div class="card">
    <img className='w-25 h-25 icons'src={money} />
    <h5 className='mt-4 Fonts titleBlue'>cost</h5>
      <p className='titleBlue'>Zero costto our Cients</p>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img className='w-25 h-25 icons'src={corporate} />
    <h5 className='mt-4 Fonts titleBlue'>Corporate</h5>
      <p className='titleBlue'>More Than 00 Corporates
Trustus</p>
    </div>
  </div>
  
  <div class="column">
    <div class="card">
    <img className='w-25 h-25 icons'src={employee} />
      <h5 className='mt-4 Fonts titleBlue'>Indivadual</h5>
      <p className='titleBlue'>More Than 5000 Clients</p>
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
    </div>

</>
  )
}

export default Clients