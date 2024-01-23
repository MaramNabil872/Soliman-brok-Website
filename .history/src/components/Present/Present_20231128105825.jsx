import React from "react";
import "./Present.css";
import first from "./../../assets/wsb/insurance.png";
import second from "./../../assets/wsb/risk.png";
import third from "./../../assets/wsb/third.png";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const Present = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <>
            <div className=" " id="contain" dir="auto">
                <h2 className=" big-title  text-center">
                    {" "}
                    {isEnglish ? "What We Present" : "ماذا نقدم  "}
                </h2>
                <h5 className=" newcolor text-center mb-4">
                    {" "}
                    {isEnglish ? "For Our Clients" : "لعملائنا"}
                </h5>
                <div class="container mt-2 mb-4">
                    <div class="row mb-4">
                        <div class="col-md-4 col-sm-6">
                            <div class="card card-block cards-3 mb-4">
                                <img
                                    src={first}
                                    alt="Photo of sunset"
                                    className="m-4 w-50 photo"
                                />
                                <h5 class=" m-4 card-title-3">
                                    {" "}
                                    {isEnglish
                                        ? "Risk Analysis"
                                        : "تحليل الخطر"}
                                </h5>
                                <p class="m-4 card-text-3">
                                    {isEnglish
                                        ? "For Our Clients We help our Client To Define Discover & Calculate all the prospected Risks may face his Business Today Before Tomorrow"
                                        : " نساعد عملائنا فى تحديد و إكتشاف وحساب كل المخاطر الحالية و المستقبليه التى يمكن ان تواجهه أعمالهم او حياتهم الشخصية اليوم  وغدا  "}
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="card card-block cards-3">
                                <img
                                    src={second}
                                    alt="Photo of sunset"
                                    className="m-4 w-50 photo"
                                />
                                <h5 class="  m-4 card-title-3">
                                    {" "}
                                    {isEnglish
                                        ? "Insurance solutions"
                                        : "  الحلول التأمينية "}
                                </h5>
                                <p class="m-4">
                                {isEnglish
                                        ? "1- Setting / Designing The Appropriate insurance Covers & Conditions"
                                        : " نقدم تصور للتغطيات التأمينية التى يحتاجها عملائنا "}{" "}
                                    <br />
                                    {isEnglish
                                        ? "2- Offering different offers From different insurance companies which have The best capacity in the needed insurance Field"
                                        : " نقدم مجموعه متنوعه من عروض الأسعار من شركات التأمين المتميزة والمتخصصة غلا مجال  "}
                                    <br />
                                    {isEnglish
                                        ? "3- Offering a Professional & technical comparison to help our clients to take the right decision"
                                        : " نقدم مقارنة تفصيلية فنية وسعرية لمساعدة العميل فة إتخاذ القرار المناسب"}
                                    <br />
                                    {isEnglish
                                        ? "4- Issuing, reviewing all Realated Document To our Clients"
                                        : " إصدار الوثائق و مرجعتها و تسليمها للعملاء"}
                                </p>
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <div class="card card-block cards-3">
                                <img
                                    src={third}
                                    alt="Photo of sunset"
                                    className="m-4 w-50 photo"
                                />
                                <h5 class="  m-4  card-title-3 "> {isEnglish
                                        ? "Claim Handling"
                                        : "تسوية التعويضات"}</h5>
                                <p class="m-4">
                                {isEnglish
                                        ? "Starting From Claim Notification Ending With Delivering You The Claim Check"
                                        : "نلتزم بتناول ملف التعويض نيابة عن العميل من اللحظة الأولى لوقوع الحادث حتى تسليم شيك التعويض ليد العميل "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className=" " id="contain">
                <h2 className=" big-title  text-center">
                    {" "}
                    {isEnglish ? "What We Present" : "ماذا نقدم  "}
                </h2>
                <h5 className=" newcolor text-center mb-4">
                    {" "}
                    {isEnglish ? "For Our Clients" : "لعملائنا"}
                </h5>
                <div className="row mb-4">
                    <div className="col-4">
                        <div class="blog mb-4">
                            <div class="title-box">
                                <h3>
                                    {" "}
                                    {isEnglish
                                        ? "Risk Analysis"
                                        : "تحليل الخطر"}
                                </h3>
                                <hr />
                         
                            </div>
                            <div class="info">
                                <span>
                                    {isEnglish
                                        ? "For Our Clients We help our Client To Define Discover & Calculate all the prospected Risks may face his Business Today Before Tomorrow"
                                        : " نساعد عملائنا فى تحديد و إكتشاف وحساب كل المخاطر الحالية و المستقبليه التى يمكن ان تواجهه أعمالهم او حياتهم الشخصية اليوم  وغدا  "}
                                </span>
                            </div>
                            <div class="footer">
                          
                            </div>

                            <div class="color-overlay"></div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div class="blog ">
                            <div class="title-box">
                                <h3>
                                    {" "}
                                    {isEnglish
                                        ? "Insurance solutions"
                                        : "  الحلول التأمينية "}
                                </h3>
                                <hr />
                            
                            </div>
                            <div class="info">
                                <span>
                                    {isEnglish
                                        ? "1- Setting / Designing The Appropriate insurance Covers & Conditions"
                                        : " نقدم تصور للتغطيات التأمينية التى يحتاجها عملائنا "}{" "}
                                    <br />
                                    {isEnglish
                                        ? "2- Offering different offers From different insurance companies which have The best capacity in the needed insurance Field"
                                        : " نقدم مجموعه متنوعه من عروض الأسعار من شركات التأمين المتميزة والمتخصصة غلا مجال  "}
                                    <br />
                                    {isEnglish
                                        ? "3- Offering a Professional & technical comparison to help our clients to take the right decision"
                                        : " نقدم مقارنة تفصيلية فنية وسعرية لمساعدة العميل فة إتخاذ القرار المناسب"}
                                    <br />
                                    {isEnglish
                                        ? "4- Issuing, reviewing all Realated Document To our Clients"
                                        : " إصدار الوثائق و مرجعتها و تسليمها للعملاء"}
                                </span>
                            </div>
                            <div class="footer">
                          
                            </div>

                            <div class="color-overlay"></div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div class="blog ">
                            <div class="title-box">
                                <h3>
                                    {" "}
                                    {isEnglish
                                        ? "Claim Handling"
                                        : "تسوية التعويضات"}
                                </h3>
                                <hr />
                           
                            </div>
                            <div class="info">
                                <span>
                                    {isEnglish
                                        ? "Starting From Claim Notification Ending With Delivering You The Claim Check"
                                        : "نلتزم بتناول ملف التعويض نيابة عن العميل من اللحظة الأولى لوقوع الحادث حتى تسليم شيك التعويض ليد العميل "}
                                </span>
                            </div>
                            <div class="footer">
                                <div class="icon-holder">
                               
                                </div>
                            </div>

                            <div class="color-overlay"></div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Present;
