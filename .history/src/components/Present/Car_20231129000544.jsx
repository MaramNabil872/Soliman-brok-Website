import React from "react";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import car from "./../../assets/wsb/car.jpg";
const Car = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div>
            {" "}
            <div dir="auto">
                <div dir="auto">
                    <div className="container-post row">
                        <div className="post-image p-4 col-4" dir="auto">
                            <img
                                className="image-border rounded  "
                                dir="auto"
                                style={{ width: " -webkit-fill-available" }}
                                src={car}
                            />
                        </div>
                        <div className="post-text p-4 col-8" dir="auto">
                            <div className="post-title1" dir="auto">
                                {" "}
                                {isEnglish
                                    ? "CAR INSURANCE"
                                    : "تأمين السيارات التكميلى"}
                            </div>
                            <div className="post-title2">
                                <span> أهمية التأمين التكميلى للسيارت </span>
                            </div>
                            <div className="post-description">
                                {isEnglish
                                    ? "The importance of motor insurance Motor insurance is one of the most important, widely used type of insurance in Egyptian market & all over the world for the following reasons. 1-The highly increased rate of road accidents in Egypt & the consequential financial, moral &material loses in addition to the resulting liabilities towards the others  2-The high growth of leasing ,banking & consumer financing activity  &the resulting need of these financial entities to save &grantee their rights3-The high increase of spar parts prices &repair cost.  4-The highly increase of insurance awareness due to the above-mentioned reasons"
                                    : "يعد تأمين السيارات أحد أهم و أكثر أنواع التأمين إستخداما فى السوق المصرى والسوق العالمى للأسباب التالية"}
                                <br />{" "}
                                {isEnglish
                                    ? " MEDICAL INSURANCE"
                                    : "  1-إرتفاع معدلات حوادث الطرق و ما ينتج عنها من خسائر مادية ومعنوية وما يترتب على ذلك من مسئوليات تجاة الغير"}
                                <br />
                                {isEnglish
                                    ? " MEDICAL INSURANCE"
                                    : " 2-نمو نشاط التمويل البنكى والإستهلاكى والتأجيرى وما ترتب علية الحاجة إلى ضمان حقوق الجهات الممولة"}
                                <br />
                                {isEnglish
                                    ? " MEDICAL INSURANCE"
                                    : " 3-ألإرتفاع الكبير فى أسعار قطع الغيار وتكاليف إصلاح السيارات  "}
                                <br />
                                {isEnglish
                                    ? " MEDICAL INSURANCE"
                                    : "  4-إرتفاع معدل الوعى التأمين لدى الجمهور نتيجة ماسبق ويطلق على هذا النوع كلمة تكميلى للتفرقة بينة و بين تأمين السيارات الإجبارى الذى يتم إصدارة على السيارة فى وحدات المرور حيث ان هذا النوع يصدر عن طريق المحمعه  المصرية للتأمين الإجبارى عن المسئولية المدنية الناشئة عن حوادث  السيارت وليس عن طريق شركات التأمين مباشرة"}
                            </div>
                            <div className="post-title1 mt-3 mr-4" dir="auto">
                                {" "}
                                {isEnglish
                                    ? "INCLUDE THE FOLLOWING"
                                    : "التغطيات التأمينية لوثيقة تأمين السيارات  "}
                            </div>
                            <div className="post-description ">
                                -{" "}
                                <span>
                                    أولا: التغطيات الأساسية وثيقة التأمين
                                    التكميلى للسيارات تغطى الهلاك أو التلف او
                                    الفقد الذى يحدث للسيارة نتيجة
                                </span>
                                <br />
                                <span>
                                1-التصادم أو الأنقلاب بسبب حادث
                                </span>
                                <br />2-<span>  </span>
                                <br />
                                <span>
                                    {" "}
                                    نقدم مجموعه من عروض أسعار من أكثر من شركة
                                    تأمين مع مقارنة فنية دقيقة لكل المزايا و
                                    الشروط لكى نساعدك لإختيار الأنسب و الأفضل لك
                                </span>
                                <br />- <span>ثالثا : تحليل الإستهلاكات </span>
                                <br />
                                <span>
                                    نظرا لأن إستهلاكات موظفينك هامة جدا فهى مصدر
                                    المعلومات الأساسى لمستقبل العقد
                                </span>
                                <br />
                                <span>
                                    {" "}
                                    فإننا نقوم بإستمرار بتحليل هذة الإستهلاكات
                                    وتقديما لمدير الموارد البشربة لكم متضمنة
                                    مجموعه من النصائح و الحلول الحالية
                                    والمستقبلية
                                </span>
                                <br />-{" "}
                                <span>رابعا : خدم متابعة الإسترداد النقدى</span>
                                <br />
                                <span>
                                    {" "}
                                    نتابع عملية الإسترداد النقدى الخاصة بعملؤنا
                                    بداية من أستلام الإسترداد من مقر العميل ثم
                                    مراجعتة ثم تسليمة لشركة التأمين حتى تسليم
                                    قيمة الأسترداد للعميل{" "}
                                </span>
                                <br />-
                                <span>خامسا : خدمة الموافقات الطبية</span>
                                <br />
                                <span>
                                    {" "}
                                    نسهل لعملؤنا عملية الحصول على الموفقات
                                    الطبية من األف إلى الياء للتأكد من إتمام
                                    الموافقة وفى الوقت المحدد لها
                                </span>
                                <br />-<span>سادسا : خدمة تجديد التعاقد </span>
                                <br />
                                <span>
                                    {" "}
                                    نقوم بإدارة ملف تجديد التعاقد بداية من
                                    التفاوض حتى إتمام التجديد بأفضل الشروط
                                    والمزايا و الأسعار
                                </span>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;
