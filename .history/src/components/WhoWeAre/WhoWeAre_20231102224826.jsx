import React, { useState } from "react";
import "./WhoWeAre.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const WhoWeAre = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    const about = [
        {
            title: "Risk Analysis",
            title1: "تحليل الخطر ",
            text: "We help our Client To Define Discover & Calculate all the prospected Risks may face his Business Today Before Tomorrow",
            text1: "نحن نساعد عميلنا على تحديد واكتشاف وحساب جميع المخاطر المحتملة التي قد تواجه أعماله اليوم قبل الغد",
        },

        {
            title: "Insurance solutions",
            title1: " حلول التأمين",
            text: "1- Setting / Designing The Appropriate insurance Covers & Conditions 2- Offering different offers From different insurance companies which have The best capacity in the needed insurance Field   3- Offering a Professional & technical comparison to help our clients to take the right decision  4- Issuing, reviewing all Realated Document To our Clients  ",
            text1: "إعداد / تصميم الأغطية والشروط التأمينية المناسبة تقديم عروض مختلفة من شركات التأمين المختلفة التي لديها أفضل القدرات في مجال التأمين المطلوب تقديم مقارنة مهنية وفنية لمساعدة عملائنا على اتخاذ القرار الصحيح إصدار ومراجعة جميع المستندات ذات الصلة إلى عملائنا العملاء",
        },
        {
            title: "Claim Handling",
            title1: "معالجة المطالبة ",
            text: "Starting From Claim Notification Ending With Delivering You The Claim Check",
            text1: "بدءاً من إشعار المطالبة وانتهاءً بتسليمك شيك المطالبة",
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
