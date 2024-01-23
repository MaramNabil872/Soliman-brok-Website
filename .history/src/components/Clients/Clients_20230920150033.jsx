import React from 'react'
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
import Mövenpick from "./../../assets/clients/Mövenpick-Logo.png";
import burgerking from "./../../assets/clients/burgerking.png";
import redcon from "./../../assets/clients/redcon.png";
import german from "./../../assets/clients/gpx-logo.g";
import german from "./../../assets/clients/german.png";
import german from "./../../assets/clients/german.png";
import german from "./../../assets/clients/german.png";
import german from "./../../assets/clients/german.png";
const Clients = () => {
  return (
    <>
          
    <div className="p-4  mt-4">
        <div className="row">
            <h1
              
                className="text-center my-4 lightBlue "
                // style={{color:"blue"  }}
            >
                Our Clients
            </h1>
        </div>
        <div className="row justify-content-center text-center m-4">
            <ClientsItems
            className="m-4"
        
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
        <div className="row justify-content-center text-center">
            <ClientsItems
              
                imageSource={allianz}
            />
            <ClientsItems
                 imageSource={allianz}
            />
            <ClientsItems title="Life Insurance" imageSource={allianz} />
            <ClientsItems
               
                imageSource={allianz}
            />
                                <ClientsItems
              
                imageSource={allianz}
            />
            
        </div>
    </div>

</>
  )
}

export default Clients