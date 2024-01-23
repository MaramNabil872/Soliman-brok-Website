import React from 'react'
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
const Clients = () => {
  return (
    <>
          
    <div className="p-4  mt-4">
        <div className="row">
            <h1
                id="title"
                className="text-center  lightblue"
                // style={{color:"blue"  }}
            >
                Our Clients
            </h1>
        </div>
        <div className="row justify-content-center text-center">
            <ClientsItems
        
                imageSource={allianz}
            />
            <ClientsItems
          
                imageSource={allianz}
            />
            <ClientsItems
            
                imageSource={allianz}
            />
            <ClientsItems
               
                imageSource={allianz}
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