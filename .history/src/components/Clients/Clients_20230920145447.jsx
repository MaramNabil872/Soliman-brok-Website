import React from 'react'
import ClientsItems from './ClientsItems'
import allianz from "./../../assets/clients
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