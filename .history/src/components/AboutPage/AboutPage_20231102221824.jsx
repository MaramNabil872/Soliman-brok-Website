import React from "react";
import camera from "./../../assets/images/camera1.jpg";
import mission from "./../../assets/images/target.png";
import vision from "./../../assets/images/vision.png";
import values from "./../../assets/images/values.png";
import "./AboutPage.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";

const AboutPage = () => {
    const { setLanguage, isEnglish } = useLanguageContext();

    return (
        <div>
            <div class="bg">
                <div className="bg-title bg-dark bg-opacity-25 rounded">
                    <span className="" id="overlay">
                        {isEnglish ? "عن الشركه" : "About Us"}
                    </span>
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
                            ? "وسيط تأمين معتمد من خلال Financail المصرية  هيئة التنظيم بموجب ( كود الهيئة رقم 23913 ) مع المزيد  أكثر من 20 عاماً من الخبرة في مجال التأمين،"
                            : "Certified Insurance Broker Through The Egyptian Financail  Regularity Authority under (FRA CODE NO 23913 ) With more  than 20 years of Experience in Insurance Field,"}{" "}
                        <br />{" "}
                        {isEnglish
                            ? "مكتب خلفي احترافي وموظفون ملتزمون بخدمة العملاء."
                            : " Professional  Back Office and committed Customer Services Staff."}
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
                                    {isEnglish ? "مهمتنا" : "Mission"}{" "}
                                </div>
                                <div class="card-subtitle">
                                    <p>
                                        {" "}
                                        <small class="text-muted">
                                            {" "}
                                            {isEnglish
                                                ? " أن نقدم ل  عملائنا أوسع و أشمل حماية تأمينية تتناسب مع إحتياجاتهم  رؤيتنا توسعه مفهوم الوساطة التأمينية فى مصر لتصبح عمليةتحليل ودراسة  متكاملة للمخاطر التى يتعرض لها عملائنا وليس مجرد عملية بيع منتجات تأمينية"
                                                : "To help Our Clients To have The Best possible insurance protection That Meets their needs."}
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
                                    {isEnglish ? "Vision" : "الرؤيه"}{" "}
                                </div>
                                <div class="card-subtitle">
                                    <p>
                                        {" "}
                                        <small class="text-muted">
                                            {" "}
                                            {isEnglish
                                                ? "To expend The Concept Of insurance Brokerage in Egypt To Be a Full Risk Analysis Process from A:Z Not Just a Selling Process For insurance Products"
                                                : "أن يكون مفهوم وساطة التأمين في مصر عملية تحليل كاملة للمخاطر من الألف إلى الياء وليست مجرد عملية بيع لمنتجات التأمين"}
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
                                    {isEnglish ? " قيمنا الأساسية " : "Values"}
                                </div>
                                <div class="card-subtitle">
                                    <p>
                                        {" "}
                                        <small class="text-muted">
                                            <li class="cardText">
                                                <strong>
                                                    {" "}
                                                    {isEnglish
                                                        ? "الاحترافية"
                                                        : "Professionalism"}
                                                </strong>{" "}
                                                <br />
                                                {isEnglish
                                                    ? "(First & Formost) By Providing a unique Service To Our Clients Befor & After Selling."
                                                    : "(أولا ودائما) عن طريق تقديم خدمة متميزة جدا لعملائنا قبل وبعد البيع "}
                                            </li>
                                            <li class="cardText">
                                                <strong>
                                                    {" "}
                                                    {isEnglish
                                                        ? "Satisfaction"
                                                        : "إلاشباع"}
                                                </strong>{" "}
                                                <br />
                                                {isEnglish
                                                    ? "Our Clients Satisfaction is our only Priority & Our First Goal"
                                                    : "رضا عملائنا هو أولويتنا الوحيدة وهدفنا الأول"}
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
                                                    : "الالتزام بأدق التفاصيل لتقديم أقصى قدر من الحماية لعملائنا"}
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
