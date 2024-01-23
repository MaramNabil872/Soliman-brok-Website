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
                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                        src="https://www.propertyfinder.eg/property/426789565ef00a505f3b953a602a9734/668/452/MODE/ccd6a8/3209861-ca3e8o.jpg?ctr=eg"
                    />
                   
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                        src="https://www.bmw.sr/content/dam/bmw/common/all-models/x-series/x6/2019/inform/bmw-xseries-x6-inform-lines-01-01.jpg.asset.1560778705421.jpg"
                    />
                    
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                        src="https://img.freepik.com/premium-photo/medical-bottles-heart-pills-isolated-white-background_185193-8407.jpg?w=2000"
                    />
                   
                      
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img className="w-100  text-center img-items " src={marine} />
                  
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img className="w-100  text-center img-items "  src={engg} />
                   
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                       className="w-100  text-center img-items " 
                        src="https://www.pngmart.com/files/15/Banknote-Money-PNG.png"
                    />
                   
                </div>


                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                      className="w-100  text-center img-items " 
                        src="https://www.pngmart.com/files/21/Happy-Family-PNG-HD.png"
                    />
                    
                </div>
               

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                        className="w-100 h-75 text-center"
                        src="https://atmms.com/wp-content/uploads/2021/05/truck.png"
                    />
                   
                     
                   
                </div>
             
            </div>
        </div>
        </>
    );
};

export default Partnership;
