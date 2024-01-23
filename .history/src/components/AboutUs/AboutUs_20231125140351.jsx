import Logo from "./../../assets/images/logo-3.png";
import { useNavigate } from "react-router-dom";

import "./AboutUs.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";

const AboutUs = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    const navigate = useNavigate();
    return (
        <div className="p-4 bgcolor" id="">
            {/* <div className="row ">
               
            </div> */}
            {/* <div className="row"> */}

            {/* </div> */}
            <div className="row" dir="auto">
                <div className="col" style={{ alignSelf: "center" }}>
                    <div className="row">
                        <div className="col-12 col-lg-5 col-md-7 text-center ">
                            <img className=" my-4 w-75" src={Logo}></img>
                        </div>
                        <div className="col" style={{ alignSelf: "center" }}>
                            <h1
                                className=" my-4 titleBlue mb-5 "
                                style={{ fontWeight: "bold" }}
                            >
                                {" "}
                                {isEnglish ? "Get To Know Us" : "من نحن  "}
                            </h1>
                            <h6 className="titleBlue ">
                                {" "}
                                {isEnglish
                                    ? "  Mahmoud Soliman Insurance Brokerage"
                                    : "محمود سليمان لوساطة التأمين"}
                            </h6>
                            {/* <img className="my-4 w-50" src={Logo}></img> */}
                            {/* <h4 className="text-light text-center">Who Are We?</h4> */}
                            <p className="titleBlue my-4">
                                {" "}
                                {isEnglish
                                    ? " Certified Insurance Broker Through The Egyptian Financail Regularity Authority under (FRA CODE   NO 23913 ) With more than 20 years of Experience  in Insurance Field, Professional Back Office and  committed Customer Services Staff."
                                    : "وسيط تأمين معتمد من خلال المصرية هيئة تنظيم Financail تحت (FRA CODE رقم 23913 ) مع أكثر من 20 عاما من الخبرة في مجال التأمين والمكتب الخلفي المهني و موظفو خدمة العملاء الملتزمون."}
                                <h6>
                                    {" "}
                                    {isEnglish
                                        ? "Learn more about us."
                                        : "تعلم المزيد عنا."}
                                </h6>
                                <Link
                                    className="btn2"
                                    onClick={() => {
                                        navigate("/about-us");
                                    }}
                                >
                                    {isEnglish ? "About Us" : "عن الشركه"}
                                </Link>
                            </p>
                        </div>
                        {/* <StatItem title="Sales" percentage={90} />
            <StatItem title="Total" percentage={75} /> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
