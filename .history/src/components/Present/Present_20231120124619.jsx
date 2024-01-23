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
                <div className="row">
                    <div className="col-4">
                        <div class="blog ">
                            <div class="title-box">
                                <h3>  {isEnglish ? "Risk Analysis" :  "تحليل الخطر"}</h3>
                                <hr />
                                {/* <div class="intro">
                                    Yllamco laboris nisi ut aliquip ex ea
                                    commodo.
                                </div> */}
                            </div>
                            <div class="info">
                                <span>
                                {isEnglish ? "For Our Clients We help our Client To Define Discover & Calculate all the prospected Risks may face his Business Today Before Tomorrow" : }
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
                                <h3>SPRING FEVER</h3>
                                <hr />
                                <div class="intro">
                                    Yllamco laboris nisi ut aliquip ex ea
                                    commodo.
                                </div>
                            </div>
                            <div class="info">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim.
                                </span>
                            </div>
                            <div class="footer">
                                <div class="icon-holder">
                                    <span>
                                        <i class="fa fa-comment-o"></i>
                                        <span>12</span>
                                        <space></space>
                                        <i class="fa fa-calendar"></i>
                                        <span>03.12.2015</span>
                                    </span>
                                </div>
                            </div>

                            <div class="color-overlay"></div>
                        </div>
                    </div>


                    <div className="col-4">
                        <div class="blog ">
                            <div class="title-box">
                                <h3>SPRING FEVER</h3>
                                <hr />
                                <div class="intro">
                                    Yllamco laboris nisi ut aliquip ex ea
                                    commodo.
                                </div>
                            </div>
                            <div class="info">
                                <span>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim.
                                </span>
                            </div>
                            <div class="footer">
                                <div class="icon-holder">
                                    <span>
                                        <i class="fa fa-comment-o"></i>
                                        <span>12</span>
                                        <space></space>
                                        <i class="fa fa-calendar"></i>
                                        <span>03.12.2015</span>
                                    </span>
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
