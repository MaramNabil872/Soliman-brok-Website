import Logo from "./../../assets/about/whowe.jpg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./AboutUs.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";

const AboutUs = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    const navigate = useNavigate();
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
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
                                    : "نحن وسيط تأمين مرخص من قبل هيئة الرقابة المالية لمزواله مهنة الوساطة فى التأمين بإسم /محمود سليمان أحمد – (رقم ترخيص 23913 ) و نمتلك  خبرة أكثر من 20عاما فى مجال التأمين و فريق عمل  متميز و ملتزم  لخدمة العملاء  قبل و بعد البيع "}
                                <h6 style={{marginBottom:"6%"}}>
                                    {" "}
                                    {isEnglish
                                        ? "Learn more about us."
                                        : "تعلم المزيد عنا."}
                                </h6>
                                <Link
                                    className="btn2"
                                    onClick={scrollToTop}
                                aria-current="page"
                                to="/about-us"
                                  
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
