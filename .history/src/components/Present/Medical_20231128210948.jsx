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
                                : "لأن التأمين الطبى هو أحد أهم أنواع التأمين و أكثرهم تأثيرا مباشرا على الأفرد "}
                            <br />{" "}
                            {isEnglish
                                ? " MEDICAL INSURANCE"
                                : "  لذلك نحن مختلفون ومتميزون"}
                            <br />
                            {isEnglish
                                ? " MEDICAL INSURANCE"
                                : "فى سليمان بروك نقدم خدمات فنية إحترافية لعملائنا من أفضل شركات التأمين وأفضل مديرى الخدمات الطبية  المتخصصة والمتميزة فى التأمين الطبى  قبل وبعد البيع من خلال مدير حساب محترف لكل عميل من عملاؤنا "}
                        </div>
                        <div className="post-title1 mt-3" dir="auto">
                            {" "}
                            {isEnglish
                                ? "INCLUDE THE FOLLOWING"
                                : "خدماتنا تشمل ما يلي  "}
                        </div>
                        <div className="post-description ">
                            <span>أولا : تصميم جدول المزايا الخاص بكل عميل </span><br/>
                            <span>حيث نساعد المالك أو مدير الموارد البشرية لدى عملاؤنا لتصميم جدول المنافع والمزايا التى تناسب إتيجاتة و الميزانية الخاصة به</span><br/>
                            <span>ثانيا : عروض الأسعار</span><br/>
                            <span> نقدم مجموعه من  عروض أسعار من أكثر من شركة تأمين مع مقارنة فنية دقيقة لكل المزايا و الشروط لكى نساعدك لإخيار الأنس و الأفضل لك</span><br/>
                            <span>ثالثا :  تحليل الإستهلاكات </span><br/>
                            <span>نظرا لأن إستهلاكات موظفينك هامة جدا فهى مصدر المعلومات الأساسى لمستقبل العقد</span><br/>
                            <span> فإننا نقوم بإستمرار بتحليل هذة الإستهلاكات وتقديما لمدير الموارد البشربة لكم متضمنة مجموعه من النصائح و الحلول الحالية والمستقبلية</span><br/>
                            <span>رابعا : خدم متابعة الإسترداد النقدى</span><br/>
                            <span> نتابع عملية الإسترداد النقدى الخاصة بعملؤنا بداية من أستلام الإسترداد من مقر العميل ثم مراجعتة ثم تسليمة لشركة التأمين حتى تسليم قيمة الأسترداد للعميل </span><br/>
                            <span>خامسا:خدمة الموافقات الطبية</span><br/>
                            <span> نسهل لعملؤنا عملية الحصول على الموفقات الطبية من األف إلى الياء للتأكد من إتمام الموافقة وفى الوقت المحدد لها</span><br/>
                            <span>سادسا:خدمة تجديد التعاقد </span><br/>
                            <span></span><br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Medical;
