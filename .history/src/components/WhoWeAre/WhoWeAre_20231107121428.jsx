import React, { useState } from "react";
import "./WhoWeAre.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const WhoWeAre = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    const about = [
        {
            title: "Risk Analysis",
            title1: "تحليل الخطر",
            text: "We help our Client To Define Discover & Calculate all the prospected Risks may face his Business Today Before Tomorrow",
            text1: " نساعد عملائنا فى تحديدو إكتشاف وحساب كل المخاطر الحالية و المستقبليه التى يمكن ان تواجهه أعمالهم او حياتهم الشخصية اليوم  وغدا  ",
        },

        {
            title: "Insurance solutions",
            title1: "  الحلول التأمينية ",
            text: "1- Setting / Designing The Appropriate insurance Covers & Conditions  4- Issuing, reviewing all Realated Document To our Clients  ",
            textAR: "١-نقدم تصور للتغطيات التأمينية التى يحتاجها عملائنا  ٢-نقدم مجموعه متنوعه من عروض الأسعار من شركات التأمين المتميزة والمتخصصة غلا مجال  ٣-نقدم مقارنة تفصيلية فنية وسعرية لمساعدة العميل فة إتخاذ القرار المناسب ٤-إصدار الوثائق و مرجعتها و تسليمها للعملاء",
            text1:" 2- Offering different offers From different insurance companies which have The best capacity in the needed insurance Field ",
            textAR1:"",
            text2:" 3- Offering a Professional & technical comparison to help our clients to take the right decision ",
            textAR2:"",
            text3:"",
            textAR3:"",
        },
        {
            title: "Claim Handling",
            title1: "تسوية التعويضات  ",
            text: "Starting From Claim Notification Ending With Delivering You The Claim Check",
            text1:"نلتزم بتناول ملف التعويض نيابة عن العميل من اللحظة الولى لوقوع الحادث حتى تسليم شيك التعويض ليد العميل ",
        },
    ];
    const [active, setActive] = useState(0);
    function handleActiveClick(index) {
        setActive(index);
    }

    return (
        <>
            <div className=" " id="contain">
                <h2 className=" newcolor text-center">
                    {" "}
                    {isEnglish ? "What We Present" : "ماذا نقدم  "}
                </h2>
                <h5 className=" newcolor text-center mb-4">
                    {" "}
                    {isEnglish ? "For Our Clients" : "لعملائنا"}
                </h5>
                <div className="d-flex ">
                    <h6 className="text-left m-4 w-25">
                        {about.map((n, indx) => (
                            <div
                                className="text-left m-4 grey "
                                id="title2"
                                onClick={() => handleActiveClick(indx)}
                            >
                                {isEnglish ? n.title : n.title1}{" "}
                            </div>
                        ))}
                    </h6>
                    <div className="m-4  titleBlue  w-50 pt-4" id="text">
                        {isEnglish ? about[active].text : about[active].text1}{" "}
                        {}
                    </div>
                </div>
            </div>
        </>
    );
};

export default WhoWeAre;
