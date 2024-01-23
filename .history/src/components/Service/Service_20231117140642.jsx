import ServiceItem from "./ServiceItem";
import avatar from "./../../assets/images/Insurance-icon.png";
import prop from "./../../assets/insurance-icons/prop-insurance.png";
import medical from "./../../assets/insurance-icons/med-insurance.png";
import engg from "./../../assets/images/engg.jpg";
import marine from "./../../assets/images/marinee.jpg";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import { Link } from "react-router-dom";
const Services = () => {
  const { setLanguage, isEnglish } =
  useLanguageContext();
    return (
      <div className="p-4 " style={{}}>
        <div className="row">
          <h1 id="title" className="text-center my-4  " style={{color:"#37517E"}}>
          {isEnglish ? "Our Products" : "المنتجات"} 
          </h1>
        </div>
        <div className="row justify-content-center text-center">
          <Link
          
          >  title=        {isEnglish ? "Property Insurance" : "تأمين الممتلكات "} 
          <img  className="w-100 h-75 text-center" src="https://www.propertyfinder.eg/property/426789565ef00a505f3b953a602a9734/668/452/MODE/ccd6a8/3209861-ca3e8o.jpg?ctr=eg"/></Link>
          <ServiceItem
            title={isEnglish ? "Motor Insurance" : "تأمين السيارات"}
            
            imageSource="https://www.bmw.sr/content/dam/bmw/common/all-models/x-series/x6/2019/inform/bmw-xseries-x6-inform-lines-01-01.jpg.asset.1560778705421.jpg"
          />
          <ServiceItem
            title={isEnglish ? "Medical Insurance" : "التأمين الطبي"}
            imageSource="https://img.freepik.com/premium-photo/medical-bottles-heart-pills-isolated-white-background_185193-8407.jpg?w=2000"
          />
           <ServiceItem
            title= {isEnglish ? "Marine Insurance" : "التأمين البحري"}
            imageSource={marine}
          />
      
        </div>
        <div className="row justify-content-center text-center">
          <ServiceItem 
            title={isEnglish ? "Engineering Insurance" : "التأمين الهندسي"}
            imageSource={engg}
          />
          <ServiceItem
            title={isEnglish ? "Liability Insurance" : "تأمين المسؤليات"}
            imageSource="https://www.pngmart.com/files/15/Banknote-Money-PNG.png"
          />
          <ServiceItem
            title={isEnglish ? "Life Insurance" : "تأمين الحياة"}
            imageSource="https://www.pngmart.com/files/21/Happy-Family-PNG-HD.png"
          />
            <ServiceItem
            title={isEnglish ? "Miscellaneous Insurance" : "تأمين الحوادث الشخصيه"}
            imageSource="https://atmms.com/wp-content/uploads/2021/05/truck.png"
          />
        
        </div>
        
      </div>
      
    );
  };
  
  export default Services;
  