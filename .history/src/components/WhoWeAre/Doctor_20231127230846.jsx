import React from "react";
import doctor from "./../../assets/images/doctor.png";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const Doctor = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-lg-6 col-md-6">
                        <img src={doctor} className=" m-4 doctor-img" />
                    </div>
                    <div class="col-12 col-sm-12 col-lg-6 col-md-6">
                        <div className=" pt-4 m-4 text-center ">
                            <h2 className=" pt-4 text-center pb-4 newcolor fw-bold">
                                {" "}
                                {isEnglish
                                    ? "MEDICAL INSURANCE"
                                    : "التأمين الطبى"}
                            </h2>
                            <h5 className="  text-center pb-4 newcolor fw-bold">
                                {isEnglish
                                    ? "Local & international"
                                    : "تأمين طبى دولى-تأمين طبى محلى "}
                        <p></p>
                                {isEnglish
                                    ? "Corporate & individual "
                                    : "تأمين شركات -تأمين فردى للأفراد والعائلات"}
                            </h5>
                            <p className="titleBlue pt-4 mt-4">
                                {" "}
                                {isEnglish
                                    ? "Because medical insurance is a very important & sensitive type of insurance, SO, we are different "
                                    : "لأن التأمين الطبى هو أحد أهم أنواع التأمين و أكثرهم تأثيرا مباشرا علىى الأفرد لذلك نحن مختلفون ومتميزون "}
                                      <div>
                                        </div> 
                            </p>
                            <p className="titleBlue  ">
                                {" "}
                                {isEnglish
                                    ? "we present special & very professional services for our medical clients from the major insurance companies that are very professional & specialized in Medical insurance via the best TPA companies in Egypt managed by your own account manager in Solimanbrok"
                                    : "فى سليمان بروك نقدم خدمات فنية إحترافية لعملائنا من أفضل شركات التأمين وأفضل مديرى الخدمات الطبية  المتخصصة والمتميزة فى التأمين الطبى  قبل وبعد البيع من خلال مدير حساب محترف لكل عميل من عملاؤنا"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctor;
