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
        <div className="p-4 bgcolor " style={{}}>
            <div className="row ">
                <h1
                    id="title"
                    className="text-center my-4 big-title newcolor "
                    style={{ color: "#37517E"}}
                >
                    {isEnglish ? "Our Products" : "المنتجات"}
                </h1>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-3   m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                        src={axa}
                    />
                   
                </div>

                <div className="col-3 col-3   m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                       src={allianz}
                    />
                    
                </div>

                <div className="col-3   m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                       src={libano}
                    />
                   
                      
                </div>

                <div className="col-3   m-4 service rounded-lg text-center">
                    <img className="w-100  text-center img-items " src={arope} />
                  
                </div>
                <div className="col-3 m-4 service rounded-lg text-center">
                    <img className="w-100  text-center img-items "  src={metlife} />
                   
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-2 col-md-3  m-4 service rounded-lg text-center">
                    <img className="w-100  text-center img-items "  src={metlife} />
                   
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                       src={metlife}
                    />
                   
                </div>


                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                      className="w-100  text-center img-items " 
                      src={metlife}
                    />
                    
                </div>
               

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                       src={metlife}
                    />
                   
                     
                   
                </div>
             
            </div>
        </div>
        </>
    );
};

export default Partnership;
