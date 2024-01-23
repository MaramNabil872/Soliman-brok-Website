import React from 'react'

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
                Our Partners
            </h1>
        </div>
        <div className="row justify-content-center text-center">
            <PartnershipItem
        
                imageSource={metlife}
            />
            <PartnershipItem
          
                imageSource={allianz}
            />
            <PartnershipItem
            
                imageSource={libano}
            />
            <PartnershipItem
               
                imageSource={arope}
            />
        </div>
        <div className="row justify-content-center text-center">
            <ClientsItem
              
                imageSource={orient}
            />
            <ClientsItem
                 imageSource={tokyo}
            />
            <ClientsItem title="Life Insurance" imageSource={gig} />
            <PartnershipItem
               
                imageSource={misr}
            />
                                <PartnershipItem
              
                imageSource={axa}
            />
            
        </div>
    </div>

</>
  )
}

export default Clients