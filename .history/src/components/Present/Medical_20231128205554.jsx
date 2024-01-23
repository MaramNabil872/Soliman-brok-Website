import React from "react";
import medical from "./../../assets/wsb/Medical.jpg";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const Medical = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div dir="auto">
            <div dir="auto">
                <div className="container-post row">
                    <div className="post-image p-4 col-4" dir="auto">
                        <img
                            className="image-border rounded  "
                            dir="auto"
                            style={{ width: " -webkit-fill-available" }}
                            src={medical}
                        />
                    </div>
                    <div className="post-text p-4 col-8" dir="auto">
                        <div className="post-title1" dir="auto">
                            {" "}
                            {isEnglish ? " MEDICAL INSURANCE" : "التأمين الطبى"}
                        </div>
                        <div className="post-description">
                            {isEnglish
                                ? "Because medical insurance is a very important & sensitive type of insurance, SO, we are different SO, we are different  we present special & very professional services for our medical clients from the major insurance companies that are very professional & specialized in Medical insurance via the best TPA companies in Egypt managed by your own account manager in Solimanbrok"
                                : "لأن التأمين الطبى هو أحد أهم أنواع التأمين و أكثرهم تأثيرا مباشرا على الأفرد ا"}
                                  {isEnglish ? " MEDICAL INSURANCE" : "  لذلك نحن مختلفون ومتميزون"}
                                  {isEnglish ? " MEDICAL INSURANCE" : "  فى سليمان بروك نقدم خدمات فنية إحترافية لعملائنا من أفضل شركات التأمين وأفضل مديرى الخدمات الطبية  المتخصصة والمتميزة فى التأمين الطبى  قبل وبعد البيع من خلال مدير حساب محترف لكل عميل من عملاؤنان"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medical;
