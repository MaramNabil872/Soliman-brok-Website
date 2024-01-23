import React from "react";
import "./Present.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const Present = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <>


<div className=" " id="contain">
                <h2 className=" big-title  text-center">
                    {" "}
                    {isEnglish ? "What We Present" : "ماذا نقدم  "}
                </h2>
                <h5 className=" newcolor text-center mb-4">
                    {" "}
                    {isEnglish ? "For Our Clients" : "لعملائنا"}
                </h5>
                <div class="container mt-2">
  <div class="row">
    <div class="col-md-4 col-sm-6">
      <div class="card card-block cards-3">
    
    <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset" className="m-4"/>
        <h5 class="card-title mt-3 mb-3">Sierra Web Development • Owner</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="card card-block cards-3">
   
    <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset" className="m-4"/>
        <h5 class="  m-3 mb-3">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web .</p> 
  </div>
    </div>
    <div class="col-md-4 col-sm-6">
      <div class="card card-block cards-3">
    
    <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset" className="m-4"/>
        <h5 class="  m-4  card-title-3 ">ProVyuh</h5>
        <p class="card-text">This is a company that builds websites, web apps and e-commerce solutions.</p> 
  </div>
    </div>
    
  </div>
  </div>

</div>










            <div className=" " id="contain">
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
                                {/* <div class="intro">
                                    Yllamco laboris nisi ut aliquip ex ea
                                    commodo.
                                </div> */}
                            </div>
                            <div class="info">
                                <span>
                                    {isEnglish
                                        ? "For Our Clients We help our Client To Define Discover & Calculate all the prospected Risks may face his Business Today Before Tomorrow"
                                        : " نساعد عملائنا فى تحديد و إكتشاف وحساب كل المخاطر الحالية و المستقبليه التى يمكن ان تواجهه أعمالهم او حياتهم الشخصية اليوم  وغدا  "}
                                </span>
                            </div>
                            <div class="footer">
                                {/* <div class="icon-holder">
                                    <span>
                                        <i class="fa fa-comment-o"></i>
                                        <span>12</span>
                                        <space></space>
                                        <i class="fa fa-calendar"></i>
                                        <span>03.12.2015</span>
                                    </span>
                                </div> */}
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
                                {/* <div class="intro">
                                    Yllamco laboris nisi ut aliquip ex ea
                                    commodo.
                                </div> */}
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
                                {/* <div class="icon-holder">
                                    <span>
                                        <i class="fa fa-comment-o"></i>
                                        <span>12</span>
                                        <space></space>
                                        <i class="fa fa-calendar"></i>
                                        <span>03.12.2015</span>
                                    </span>
                                </div> */}
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
                                {/* <div class="intro">
                                    Yllamco laboris nisi ut aliquip ex ea
                                    commodo.
                                </div> */}
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
                                    {/* <span>
                                        <i class="fa fa-comment-o"></i>
                                        <span>12</span>
                                        <space></space>
                                        <i class="fa fa-calendar"></i>
                                        <span>03.12.2015</span>
                                    </span> */}
                                </div>
                            </div>

                            <div class="color-overlay"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Present;
