import ServiceItem from "./ServiceItem";

import eng from "./../../assets/products/eng.png";
import car from "./../../assets/products/car.png";
import life from "./../../assets/products/life.png";
import Liability from "./../../assets/products/Liability.png";
import marine from "./../../assets/products/marine.png";
import Medical from "./../../assets/products/eng.png";
import mis from "./../../assets/products/Medical.png";
import prop from "./../../assets/products/prop.png";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import { Link } from "react-router-dom";
import "./Service.css";
const Services = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div className=" " style={{}}>
            <div className="row ">
                <h1
                    id="title"
                    className="text-center my-4 big-title newcolor "
                    style={{ color: "#37517E"}}
                >
                    {isEnglish ? "Our Products" : "المنتجات"}
                </h1>
            </div>
            <div className="row justify-content-center text-center mb-4">
                <div className="col-12 col-lg-2 col-md-4 service rounded-lg text-center">
                    <img
                        className="w-750 h-75 text-center"
                        src={prop}
                    />
                      <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/3"
                    >
                        {isEnglish ? "Property Insurance" : "تأمين الممتلكات "}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4  service rounded-lg text-center">
                    <img
                        className="w-750 h-75 text-center"
                        src={car}
                    />
                      <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/2"
                    >
                        {isEnglish ? "Motor Insurance" : "تأمين السيارات"}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4 service rounded-lg text-center">
                    <img
                        className="w-750 h-75 text-center"
                        src={Medical}
                    />
                      <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/1"
                    >
                        {isEnglish ? "Medical Insurance" : "التأمين الطبي"}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4  service rounded-lg text-center">
                    <img className="w-750 h-100 text-center" src={marine} />
                    <br/>
                    <Link
                        id="service-title "
                        to="/Post/4"
                        className="text-start pt-2 text-center text26"
                    >
                        {isEnglish ? "Marine Insurance" : "التأمين البحري"}
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center text-center mt-4">
                <div className="col-12 col-lg-2 col-md-4   service rounded-lg text-center">
                    <img className="w-750 h-100 text-center" src={eng} />
                    <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26 "
                        to="/Post/5"
                    >
                        {isEnglish
                            ? "Engineering Insurance"
                            : "التأمين الهندسي"}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4   service rounded-lg text-center">
                    <img
                        className="w-750 h-100 text-center"
                        src={Liability}
                    />
                      <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/6"
                    >
                        {isEnglish ? "Liability Insurance" : "تأمين المسؤليات"}
                    </Link>
                </div>


                <div className="col-12 col-lg-2 col-md-4  service rounded-lg text-center">
                    <img
                        className="w-750 h-100 text-center"
                        src={life}
                    />
                    <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/7"
                    >
                       {isEnglish ? "Life Insurance" : "تأمين الحياة"}
                    </Link>
                </div>
               

                <div className="col-12 col-lg-2 col-md-4   service rounded-lg text-center">
                    <img
                        className="w-750 h-100 text-center"
                        src={mis}
                    />
                      <br/>
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/8"
                    >
                       {
                        isEnglish
                            ? "Miscellaneous Insurance"
                            : "تأمين الحوادث الشخصيه"
                    }
                    </Link>
                </div>
             
            </div>
        </div>
    );
};

export default Services;
