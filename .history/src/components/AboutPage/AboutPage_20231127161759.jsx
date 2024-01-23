import React from "react";
import background from "./../../assets/about/about.jpg";
import mission from "./../../assets/mission/mission.png";
import vision from "./../../assets/mission/vission.png";
import values from "./../../assets/mission/value.png";
import "./AboutPage.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";

const AboutPage = () => {
    const { setLanguage, isEnglish } = useLanguageContext();

    return (
        <div>
            <div class="bg">
                <div
                    className="bg-title bg-dark bg-opacity-25 rounded"
                    style={{
                        backgroundImage: `url(${background})`,
                        height: "70vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}
                >
                    {/* <span className="big-title" id="overlay ">
                        {isEnglish ? "About Us" : "عن الشركه"}
                    </span> */}
                </div>
            </div>

            {/* <div className="title2 ">
                <p>
                    Certified Insurance Broker Through The Egyptian Financail
                    Regularity Authority under (FRA CODE NO 23913 ) With more
                    than 20 years of Experience in Insurance Field, Professional
                    Back Office and committed Customer Services Staff.
                </p>
            </div> */}

            <div
                class="container-fluid mx-auto mt-5 mb-5 col-12"
                style={{ textAlign: "center" }}
            >
                <p>
                    <small class="text-muted ">
                        {" "}
                        {isEnglish
                            ? "Certified Insurance Broker Through The Egyptian Financail  Regularity Authority under (FRA CODE NO 23913 ) With more  than 20 years of Experience in Insurance Field,"
                            : "  نحن وسيط تأمين مرخص من قبل هيئة الرقابة المالية لمزواله مهنة الوساطة فى التأمين بإسم /محمود سليمان أحمد – (رقم الترخيص 23913 )   "}{" "}
                          <br/>  {isEnglish
                            ? "Certified Insurance Broker Through The Egyptian Financail  Regularity Authority under (FRA CODE NO 23913 ) With more  than 20 years of Experience in Insurance Field,"
                            : "   و نمتلك  خبرة أكثر من 20عاما فى مجال التأمين و فريق عمل  متميز و ملتزم  لخدمة العملاء  قبل و بعد البيع "}{" "}
                        <br />{" "}

                        
                    </small>
                </p>
                <div class="row p-4" style={{ justifyContent: "center" }}>
                    <div class="card col-md-3 col-12 m-4">
                        <div class="card-content">
                            <div class="card-body">
                                {" "}
                                <img class="img w-25" src={mission} />
                                <div class="shadow"></div>
                                <div class="cardtitle mb-4">
                                    {" "}
                                    {isEnglish ? "Mission" : "مهمتنا"}{" "}
                                </div>
                                <div class="card-subtitle">
                                    <p>
                                        {" "}
                                        <small class="text-muted">
                                            {" "}
                                            {isEnglish
                                                ? "To help Our Clients To have The Best possible insurance protection That Meets their needs."
                                                : "أن نقدم ل  عملائنا أوسع و أشمل حماية تأمينية تتناسب مع إحتياجاتهم الحالية و المستقبليه   "}
                                        </small>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2  m-4">
                        <div class="card-content">
                            <div class="card-body">
                                {" "}
                                <img class="img w-25" src={vision} />
                                <div class="cardtitle mb-4">
                                    {" "}
                                    {isEnglish ? "Vision" : "رؤيتنا"}{" "}
                                </div>
                                <div class="card-subtitle">
                                    <p>
                                        {" "}
                                        <small class="text-muted">
                                            {" "}
                                            {isEnglish
                                                ? "To expend The Concept Of insurance Brokerage in Egypt To Be a Full Risk Analysis Process from A:Z Not Just a Selling Process For insurance Products"
                                                : "توسعه مفهوم الوساطة التأمينية فى مصر لتصبح عملية تحليل ودراسة  متكاملة للمخاطر التى يتعرض لها عملائنا -اليوم و غدا- وليس مجرد عملية بيع منتجات تأمينية"}
                                        </small>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-3 col-12 ml-2  m-4">
                        <div class="card-content">
                            <div class="card-body">
                                {" "}
                                <img class="img w-25" src={values} />
                                <div class="cardtitle titleBlue">
                                    {" "}
                                    {isEnglish ? "Values" : " قيمنا الأساسية "}
                                </div>
                                <div class="card-subtitle">
                                    <p>
                                        {" "}
                                        <small class="text-muted">
                                            <li class="cardText">
                                                <strong>
                                                    {" "}
                                                    {isEnglish
                                                        ? "Professionalism"
                                                        : "الاحترافية"}
                                                </strong>{" "}
                                                <br />
                                                {isEnglish
                                                        ? "Professionalism"
                                                        : "(اولا و دائما)"}
                                                {isEnglish
                                                    ? "(First & Formost) By Providing a unique Service To Our Clients Befor & After Selling."
                                                    : "    عن طريق تقديم خدمة متميزة جدا لعملائنا قبل وبعد البيع "}
                                            </li>
                                            <li class="cardText">
                                                <strong>
                                                    {" "}
                                                    {isEnglish
                                                        ? "Satisfaction"
                                                        : "رضاء العملاء"}
                                                </strong>{" "}
                                                <br />
                                                {isEnglish
                                                    ? "Our Clients Satisfaction is our only Priority & Our First Goal"
                                                    : "رضاء و حماينه عملائنا  هو اولويتنا الوحيدة وهدفنا الأول "}
                                            </li>
                                            <li class="cardText">
                                                <strong>
                                                    {" "}
                                                    {isEnglish
                                                        ? "Commitment"
                                                        : "الالتزام"}
                                                </strong>{" "}
                                                <br />
                                                {isEnglish
                                                    ? " Commitment to the smallest details to offer the maximum Protection For our Clients"
                                                    : "نلتزم بكل التفاصيل الصغيرة لتقديم اعلى حماية لعملائنا "}
                                            </li>
                                        </small>{" "}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ft">
                    <p class="chk">
                        <small class="text-muted"></small>
                    </p>
                    <div class="m-4 pt-4"></div>
                </div>
            </div>

            {/* <div className="title" >
                <h1 className="text ">About Us</h1>
                <p>Mahmoud Soliman Insurance Brokerage</p>
            </div> */}

            {/* <div class="bg">
                <div className="bg-title bg-dark bg-opacity-25 rounded">
                    <span className="" id="overlay">
                        ABOUT US
                    </span>
                </div>
            </div>

            <div className="title2 ">
                <p>
                    Certified Insurance Broker Through The Egyptian Financail
                    Regularity Authority under (FRA CODE NO 23913 ) With more
                    than 20 years of Experience in Insurance Field, Professional
                    Back Office and committed Customer Services Staff.
                </p>
            </div>
            <div class="container " id="cards">
                <div class="row ">
                    <div class="col-md-4">
                        <div class="">
                            <div class="card-body">
                                <h3 class="cardtitle newcolor"> Mission</h3>
                                <p class="cardText ">
                                    To help Our Clients To have The Best
                                    possible insurance protection That Meets
                                    their needs.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 ">
                        <div class="">
                            <div class="card-body">
                                <h5 class="cardtitle newcolor"> Vision</h5>
                                <p class="cardText">
                                    To expend The Concept Of insurance Brokerage
                                    in Egypt To Be a Full Risk Analysis Process
                                    from A:Z Not Just a Selling Process For
                                    insurance Products
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="">
                            <div class="card-body">
                                <h6 class="cardtitle newcolor"> Values</h6>
                                <ol>
                                    <li class="cardText">
                                        <strong>Professionalism</strong> <br />
                                        (First & Formost) By Providing a unique
                                        Service To Our Clients Befor & After
                                        Selling.
                                    </li>
                                    <li class="cardText">
                                        <strong> Satisfaction</strong> <br />
                                        Our Clients Satisfaction is our only
                                        Priority & Our First Goal
                                    </li>
                                    <li class="cardText">
                                        <strong>Commitment</strong> <br />
                                        Commitment to the smallest details to
                                        offer the maximum Protection For our
                                        Clients
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default AboutPage;
