import PartnershipItem from "./PartnersipItem";

import allianz from "./../../assets/images/allianz-logo.png";
import arope from "./../../assets/images/Arope-logo.png";
import axa from "./../../assets/images/axa-logo.jpg";
import gig from "./../../assets/images/gig-logo.png";
import misr from "./../../assets/images/misr-logo.png";
import metlife from "./../../assets/images/metlife-logo.png";
import orient from "./../../assets/images/orient-logo.png";
import libano from "./../../assets/images/libano-logo.png";
import tokyo from "./../../assets/images/Tokio-Marine-logo.png";
import { useLanguageContext } from "../../Contexts/LanguageContext";

const Partnership = () => {
    const { setLanguage, isEnglish } =
    useLanguageContext();
    return (
        <>
        <div className="bgcolor">
          <div className="container bgcolor">
            <div className="p-4 bgcolor mt-4">
                <div className="row">
                    <h1
                        id=""
                        className="text-center  big-title"
                        // style={{color:white  }}
                    >
                         {isEnglish ? "Our Partners" : "شركاؤنا"} 
                        
                    </h1>
               
                </div>
                <div className="row justify-content-center text-center img-items">
                    <PartnershipItem
                
                        imageSource={axa}
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
                                        <PartnershipItem style={{marginTop:"20%" }}
                      
                      imageSource={metlife}
                  />
                </div>
                <div className="row justify-content-center text-center">
                    <PartnershipItem
                      
                        imageSource={orient}
                    />
                    <PartnershipItem
                         imageSource={tokyo}
                    />
                    <PartnershipItem title="Life Insurance" imageSource={gig} />
                    <PartnershipItem
                       
                        imageSource={misr}
                    />
                      <PartnershipItem
                         imageSource={tokyo}
                    />
                    
                </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default Partnership;
