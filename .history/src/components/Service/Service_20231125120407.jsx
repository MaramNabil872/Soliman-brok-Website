import ServiceItem from "./ServiceItem";

import eng from "./../../assets/products/eng.png";
import car from "./../../assets/products/car.png";
import life from "./../../assets/products/life.png";
import Liability from "./../../assets/products/Liability.png";
import marine from "./../../assets/products/marine.png";
import Medical from "./../../assets/products/eng.png";
import mis from "./../../assets/products/Medical.png";
import eng from "./../../assets/products/eng.png";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import { Link } from "react-router-dom";
import "./Service.css";
const Services = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div className="p-4  " style={{}}>
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
                        className="w-100 h-75 text-center"
                        src="https://www.propertyfinder.eg/property/426789565ef00a505f3b953a602a9734/668/452/MODE/ccd6a8/3209861-ca3e8o.jpg?ctr=eg"
                    />
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/3"
                    >
                        {isEnglish ? "Property Insurance" : "تأمين الممتلكات "}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                        className="w-100 h-75 text-center"
                        src="https://www.bmw.sr/content/dam/bmw/common/all-models/x-series/x6/2019/inform/bmw-xseries-x6-inform-lines-01-01.jpg.asset.1560778705421.jpg"
                    />
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/2"
                    >
                        {isEnglish ? "Motor Insurance" : "تأمين السيارات"}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                        className="w-100 h-75 text-center"
                        src="https://img.freepik.com/premium-photo/medical-bottles-heart-pills-isolated-white-background_185193-8407.jpg?w=2000"
                    />
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/1"
                    >
                        {isEnglish ? "Medical Insurance" : "التأمين الطبي"}
                    </Link>
                </div>

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img className="w-100 h-75 text-center" src={marine} />
                    <Link
                        id="service-title "
                        to="/Post/4"
                        className="text-start pt-2 text-center text26"
                    >
                        {isEnglish ? "Marine Insurance" : "التأمين البحري"}
                    </Link>
                </div>
            </div>
            <div className="row justify-content-center text-center">
                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img className="w-100 h-75 text-center" src={engg} />
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

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                        className="w-100 h-75 text-center"
                        src="https://www.pngmart.com/files/15/Banknote-Money-PNG.png"
                    />
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/6"
                    >
                        {isEnglish ? "Liability Insurance" : "تأمين المسؤليات"}
                    </Link>
                </div>


                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                        className="w-100 h-75 text-center"
                        src="https://www.pngmart.com/files/21/Happy-Family-PNG-HD.png"
                    />
                    <Link
                        id="service-title "
                        className="text-start pt-2 text-center text26"
                        to="/Post/7"
                    >
                       {isEnglish ? "Life Insurance" : "تأمين الحياة"}
                    </Link>
                </div>
               

                <div className="col-12 col-lg-2 col-md-4  m-4 service rounded-lg text-center">
                    <img
                        className="w-100 h-75 text-center"
                        src="https://atmms.com/wp-content/uploads/2021/05/truck.png"
                    />
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