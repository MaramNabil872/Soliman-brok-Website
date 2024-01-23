import React from 'react'
import ClientsItem from './ClientsItems'
import allianz from "./../../assets/images/allianz-logo.png";
const Clients = () => {
  return (
    <>
          
    <div className="p-4 darkblue mt-4">
        <div className="row">
            <h1
                id="title"
                className="text-center my-4"
                // style={{color:white  }}
            >
                Our Clients
            </h1>
        </div>
        <div className="row justify-content-center text-center">
            <ClientsItem
        
                imageSource={allianz}
            />
            <ClientsItem
          
                imageSource={allianz}
            />
            <ClientsItem
            
                imageSource={allianz}
            />
            <ClientsItem
               
                imageSource={allianz}
            />
        </div>
        <div className="row justify-content-center text-center">
            <ClientsItem
              
                imageSource={allianz}
            />
            <ClientsItem
                 imageSource={allianz}
            />
            <ClientsItem title="Life Insurance" imageSource={gig} />
            <ClientsItem
               
                imageSource={misr}
            />
                                <ClientsItem
              
                imageSource={axa}
            />
            
        </div>
    </div>

</>
  )
}

export default Clients