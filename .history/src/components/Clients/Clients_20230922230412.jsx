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
          
          <div className="owl-carousel owl-theme">
  <div className="carousel-item">
    <a href="#">
      <div className="carousel-item-image">
        <img src="https://f.i.uol.com.br/fotografia/2016/03/11/594620-970x600-1.jpeg" class="item-image"/>
      </div>
      <div className="carousel-item-text">
        <span className="item-kicker">Restaurante de São Paulo</span>
        <h3 className="item-title">Mani</h3>
      </div>
    </a>
  </div>
  <div className="carousel-item">
    <a href="#">
      <div className="carousel-item-image">
        <img src="https://f.i.uol.com.br/fotografia/2016/03/11/594616-970x600-1.jpeg" class="item-image"/>
      </div>
      <div className="carousel-item-text">
        <span className="item-kicker">Restaurante de São Paulo</span>
        <h3 className="item-title">Tordesilhas</h3>
      </div>
    </a>
  </div>
  <div className="carousel-item">
    <a href="#">
      <div className="carousel-item-image">
        <img src="https://f.i.uol.com.br/fotografia/2016/03/11/594617-970x600-1.jpeg" class="item-image"/>
      </div>
      <div className="carousel-item-text">
        <span className="item-kicker">Restaurante que você já foi</span>
        <h3 className="item-title">Bar do Luiz Fernandes</h3>
      </div>
    </a>
  </div>
  <div className="carousel-item">
    <a href="#">
      <div className="carousel-item-image">
        <img src="https://f.i.uol.com.br/fotografia/2016/03/11/594619-970x600-1.jpeg" class="item-image"/>
      </div>
      <div className="carousel-item-text">
        <span className="item-kicker">Para ir a dois</span>
        <h3 className="item-title">A Figueira Rubaiyat</h3>
      </div>
    </a>
  </div>
  <div class="carousel-item">
    <a href="#">
      <div class="carousel-item-image">
        <img src="https://f.i.uol.com.br/fotografia/2016/03/11/594618-970x600-1.jpeg" class="item-image"/>
      </div>
      <div class="carousel-item-text">
        <span class="item-kicker">Coxinha</span>
        <h3 class="item-title">Ragazzo</h3>
      </div>
    </a>
  </div>
  <div class="carousel-item">
    <a href="#">
      <div class="carousel-item-image">
        <img src="https://f.i.uol.com.br/fotografia/2016/03/11/594615-970x600-1.jpeg" class="item-image"/>
      </div>
      <div class="carousel-item-text">
        <span class="item-kicker">Cafeteria</span>
        <h3 class="item-title">Starbucks</h3>
      </div>
    </a>
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