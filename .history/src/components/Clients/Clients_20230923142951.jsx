import React from 'react'
import "./Clients.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
import redcon from "./../../assets/clients/redcon.png";
import smartglass from "./../../assets/clients/glass1.jpg";
import bricks from "./../../assets/clients/bricko.jpg";
import bricks from "./../../assets/clients/bricko.jpg";

const options = {
    margin: 30,
    responsiveClass: true,
    nav: true,
    autoplay: false,
    navText: ["Prev", "Next"],
    smartSpeed: 1000,
    loop:true,
    center:true,
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
                      <div class="item"><img src="https://logowik.com/content/uploads/images/fujifilm-value-from-innovation9423.logowik.com.webp"/></div>
                      <div class="item"><img src="https://www.foodlover-eg.com/site_assets/images/foodlover-logo.png"/></div>
                      <div class="item  mt-4"><img src="https://getlogo.net/wp-content/uploads/2019/09/htds-hi-tech-detection-systems-logo-vector-xs.png"/></div>
                      <div class="item"><img src={smartglass}/></div>
                      <div class="item mt-4"><img src="https://www.tanqeeb.com/img/uploads/592a8f3dae173_IMG_4129.JPG"/></div>
                      <div class="item"><img src="https://mgmt.manhom.com/images/33881/%D9%85%D8%AC%D9%85%D9%88%D8%B9%D8%A9-%D8%B4%D8%B1%D9%83%D8%A7%D8%AA-%D8%A5%D9%8A%D8%AC%D8%A7%D8%AA.webp"/></div>
                      <div class="item"><img src="data:image/png;base64,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"/></div> 
                      <div class="item mb-4"><img src={bricks}/></div>
                     
                     
                    
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