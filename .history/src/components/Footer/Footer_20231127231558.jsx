import React from "react";
import Logo from "./../../assets/images/logo-1.png";

import bdc from "./../../assets/Bank-logo/bdc.png";
import adib from "./../../assets/Bank-logo/adib.png";
import misr from "./../../assets/Bank-logo/misr.png";
import mashreq from "./../../assets/Bank-logo/mashreq.webp";
import ahly from "./../../assets/Bank-logo/ahly.png";
import hsbc from "./../../assets/Bank-logo/hsbc.png";
import nbk from "./../../assets/Bank-logo/nbk.png";
import nbd from "./../../assets/Bank-logo/nbd.png";
import cib from "./../../assets/Bank-logo/cib.png";
// import adib from "./../../assets/Bank-logo/adib.png";
import fab from "./../../assets/Bank-logo/fab.png";
import aub from "./../../assets/Bank-logo/aub.png";
import sohola from "./../../assets/Bank-logo/sohola.jfif";
import aman from "./../../assets/Bank-logo/aman1.png";
import forsa from "./../../assets/Bank-logo/forsa.png";
import valu from "./../../assets/images/valu.png";
import "./Footer.css";
import { useLanguageContext } from "../../Contexts/LanguageContext";
const Footer = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <section className="bg-dark" id="contact">
            {/* <div className="container"> */}

            <div className="text-white text-center text-lg-start bg-dark">
                <div className="container p-4">
                    <div className="row mt-4">
                        <div className="col-lg-4 col-md-12 mb-4 mb-md-0 text-lg-start">
                            <h5 className="text-uppercase mb-4 ">
                                {/* <img
                                        id="img"
                                        src={Logo}
                                        alt="logo"
                                        className="h-25 w-25 lightWhite"
                                    /> */}
                                Soliman Brok
                            </h5>
                            {/* <p>
                                {" "}
                                {isEnglish
                                    ? "Privacy Policy"
                                    : "سياسة الخصوصية "}
                            </p>

                            <p>
                                {" "}
                                {isEnglish
                                    ? "Terms & Conditions"
                                    : "الأحكام والشروط"}
                            </p> */}
                            <p> {isEnglish ? "Site map" : "خريطة الموقع"} </p>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-lg-start">
                            <h5 className="text-uppercase mb-4 pb-1">
                                {isEnglish ? "Contact us" : "تواصل معنا"}
                            </h5>

                            <div className="form-outline form-white mb-4 text-start"></div>

                            <li className="mb-3">
                                <span className="">
                                    2 Hussien Afify-Makram Ebied , Nasr City,
                                    Cairo , Egypt{" "}
                                </span>
                            </li>
                            <li className="mb-3">
                                <span className="">
                                    Mahmoud@SolimanBrok.Com
                                </span>
                            </li>
                            <li class="mb-3">
                                <span className="">
                                    01282153333-01226303959
                                </span>
                            </li>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center ">
                            <h5 className=" mb-4">
                                {" "}
                                {isEnglish
                                    ? "PAYMENT METHODS"
                                    : "طرق الدفع"}{" "}
                                <br />{" "}
                                {isEnglish ? "(Installments)" : "(التقسيط)"}
                            </h5>
                            <div className="contaner">
                                <div className="row  text-center  m-4 bank ">
                                    <div class="col">
                                        {" "}
                                        <img src={bdc} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={adib} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={misr} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={mashreq} className=" w-100" />
                                    </div>
                                </div>
                                <div className="row  text-center  m-4 bank">
                                    <div class="col">
                                        {" "}
                                        <img src={ahly} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={hsbc} className="w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={aub} className="w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={fab} className="w-100" />
                                    </div>
                                </div>

                                <div className="row  text-center  bank m-4">
                                    <div class="col mb-4">
                                        {" "}
                                        <img src={nbk} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={nbd} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={fab} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={cib} className=" w-100" />
                                    </div>
                                </div>
                            </div>

                            <div className="contaner container ">
                                <div className="row  text-center   bank">
                                    <div class="col ">
                                        {" "}
                                        <img src={sohola} className="w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={valu} className="w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={aman} className=" w-100" />
                                    </div>
                                    <div class="col">
                                        {" "}
                                        <img src={forsa} className="w-100" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="text-center p-3 "
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    <p className="size">
                        {" "}
                        {isEnglish
                            ? " In case of having a complaint you have the right to escalate it to the Financial Regulatory Authority's head    office or through their website  "
                            : "في حالة وجود شكوى يتم التواصل على الرقم 01226303959 او الإيميل  و في حالة عدم رضائك عن الخدمة وعدم قدرة الفريق على  حل الشكوى يمكنك تصعيد الشكوى لمقر الهيئة العامة للرقابة المالية أو عبر موقعها الإلكتروني "}{" "}
                        <br />{" "}
                        <a href="www.fra.gov.eg" style={{ color: "#1BA7BD" }}>
                            {" "}
                            www.fra.gov.eg{" "}
                        </a>
                        <br />{" "}
                        {isEnglish
                            ? "Mahmoud Soliman insurance brokerage is licenced by the Financial Regulatory Authority with FRA code 23019"
                            : " محمود سليمان للوساطة التأمينية رقم التسجيل بهيئه الرقابه الماليه 23913        "}
                    </p>
                </div>
            </div>

            {/* <div className="row"> */}

            {/* <a href="#">
                                <img
                                    id="img"
                                    src={Logo}
                                    alt="logo"
                                    className="h-25 w-25 lightWhite"
                                />
                            </a> */}
            {/* <div className="d-flex row">
                        <h3 className="m-4 lightWhite ">We accept</h3>
                        <div className="lightWhite w-75 contaner">
                            <div className="row  text-center h-25 w-75 m-4 bank">
                                <div class="col">
                                    {" "}
                                    <img src={bdc} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={adib} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={misr} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={mashreq} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={ahly} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={hsbc} className="w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={aman} className="w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={forsa} className="w-100" />
                                </div>
                            </div>
                            <div className="row  text-center h-25 w-75 bank m-4">
                                <div class="col">
                                    {" "}
                                    <img src={nbk} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={nbd} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={cib} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={cib} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={fab} className=" w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={aub} className="w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={sohola} className="w-100" />
                                </div>
                                <div class="col">
                                    {" "}
                                    <img src={valu} className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="contact-social lightWhite w-25  policy">
                            <div className="row t h-25 w-50"></div>
                        </div>
                        <div className="contact-content text-center lightWhite">
                            <p>
                                In case of having a complaint you have the right
                                to escalate it to the Financial Regulatory
                                Authority's head office or through their website{" "}
                                <a
                                    href="www.fra.gov.eg"
                                    style={{ color: "#1BA7BD" }}
                                >
                                    www.fra.gov.eg{" "}
                                </a>
                                <br /> Mahmoud Soliman insurance brokerage is
                                licenced by the Financial Regulatory Authority
                                with FRA code 23019
                            </p>
                            <div className="hr"></div>
                            <h6 className="">
                                2 Hussien Afify-Makram Ebied Nasr City, Cairo ,
                                Egypt{" "}
                            </h6>
                            <h6>01282153333-01226303959</h6>
                            <span>
                                {" "}
                                terms & conditions <br />
                                Privacy Policy
                            </span>
                        </div> */}

            {/* <ul>
                  <li>
                    <a className="hover-target" href="https://www.facebook.com/profile.php?id=100064277160353">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a className="hover-target" href="https://www.yelp.com/biz/m-and-y-home-fix-for-repairs-and-renovation-burlington">
                      <FaYelp />
                    </a>
                  </li>
                </ul> */}
            {/* </div> */}
            {/* </div> */}
            {/* </div> */}
        </section>
    );
};

export default Footer;
