import PartnershipItem from "./PartnersipItem";

import allianz from "./../../assets/images/Allianz.png";
import arope from "./../../assets/images/Arope-logo.png";
import axa from "./../../assets/images/axa-logo.jpg";
import gig from "./../../assets/images/Gig.png";
import misr from "./../../assets/images/Misr1.png";
import metlife from "./../../assets/images/Metlife.png";
import orient from "./../../assets/images/Orient.png";
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
                    {isEnglish ? "Our Partners" : "شركاؤنا"}
                </h1>
            </div>
            <div className="container mb-4">
            <div className="row justify-content-center text-center  all-items">
                
                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center img-items card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img
                       className="w-100  text-center img-items " 
                        src={axa}
                    />
                   
                </div>

                <div className="col  m-4 service rounded-lg text-center  img-items  card3" style={{borderRadius:"15%", paddingTop:"4%"}}>
                    <img
                       className="w-100  text-center img-items " 
                       src={allianz}
                    />
                    
                </div>

                <div className="col  m-4 service rounded-lg text-center img-items  card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img
                       className="w-100  text-center img-items " 
                       src={libano}
                    />
                   
                      
                </div>

                <div className="col  m-4 service rounded-lg text-center  img-items  card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img className="w-100  text-center img-items " src={arope} />
                  
                </div>
                <div className="col  m-4 service rounded-lg text-center  img-items  card3" style={{borderRadius:"15%", paddingTop:"4%"}}>
                    <img className="w-100  text-center img-items "  src={metlife} />
                   
                </div>
                </div>
                <div className="row justify-content-center text-center all-items">
                <div className="col  m-4 service rounded-lg text-center  img-items  card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img
                       className="w-100  text-center img-items " 
                        src={orient}
                    />
                   
                </div>

                <div className="col  m-4 service rounded-lg text-center img-items  card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img
                       className="w-100  text-center img-items " 
                       src={tokyo}
                    />
                    
                </div>

                <div className="col  m-4 service rounded-lg text-center  img-items  card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img
                       className="w-100  text-center img-items " 
                       src={gig}
                    />
                   
                      
                </div>

                <div className="col   service rounded-lg text-center img-items  card3" style={{borderRadius:"15%", }}>
                    <img className="w-100 mb-4 text-center img-items " src={misr} />
                  
                </div>
                <div className="col  m-4 service rounded-lg text-center  img-items  card3" style={{borderRadius:"15%", padding:"1%"}}>
                    <img className="w-100  text-center img-items "  src={tokyo} />
                   
                </div>
                </div>
                </div>
        </div>
        </>
    );
};

export default Partnership;
