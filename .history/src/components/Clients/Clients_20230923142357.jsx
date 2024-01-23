import React from 'react'
import "./Clients.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
import redcon from "./../../assets/clients/redcon.png";
import smartglass from "./../../assets/clients/glass1.jpg";
import foodlover from "./../../assets/clients/foodlover.png";


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
                      <div class="item"><img src="data:image/png;base64,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"/></div>
                     
                     
                    
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