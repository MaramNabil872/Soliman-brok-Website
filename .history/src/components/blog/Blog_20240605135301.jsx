import React from "react";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import blog from "./../../assets/wsb/blog-banner.jpg";
import blogg from "./../../assets/wsb/blogg.jpg";
import blog1 from "./../../assets/blog/blog1.jpg";
import blog2 from "./../../assets/blog/blog2.jpg";
import blog3 from "./../../assets/blog/blog3.jpg";
import blog4 from "./../../assets/blog/blog4.jpg";
import blog5 from "./../../assets/blog/blog5.jpg";
import blog6 from "./../../assets/blog/blog6.jpg";
import blog7 from "./../../assets/blog/blog7.jpg";
import "./Blog.css";
const Blog = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div dir="auto">
            <div class="bg-overlay" dir="auto"  style={{
                        backgroundImage: `url(${blog})`,
                        height: "75vh",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                    }}>
              
            </div>

            <br />
            <br />

            <div class="how-section1">
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img
                            src={blogg}
                            class=" img-fluid w-100"
                            alt=""
                            style={{borderRadius:"3%"}}
                        />
                    </div>
                    <div class="col-md-6">
                        <h4 className="heading4"> شرط النسبية</h4>
                        <p>
                            هو احد الشروط الهامة الموجودة فى وثائق التأمين التى
                            تتضمن اى نوع من انواع الممتلكات سواء كانت سياراتأو
                            مبانى أو بضائع أو معدات ...إلخ <br /> ظهرت أهمية هذا
                            الشرط حديثا و أصبح من الضرورى تعرف العملاء على هذا
                            الشرط نتيجة للتغيرات المتلاحقة والمتسارعة فى
                            المتغيرات الإقتصدية الكلية وأثارها علي التغير في
                            قيمة الأصول المؤمن عليها لدي شركات التأمين مقارنة
                            بالقيم السوقية أو الإستبدالية من ناحية والأفساط
                            المدفوعه من العملاء من ناحية أخرى و تأثير ذلك تبعا
                            على التعويضات التى قد يستحقها العملاء
                        </p>
                        <h4 class="subheading">تعريف شرط النسبية</h4>
                        <p class="text-muted">
                            هو شرط يقضى بأنه إذا كانت قيمة الممتلكات المؤمن
                            عليها عند وقوع الخطر المؤمن منه تفوق المبلغ المؤمن
                            به، عندها يعتبر العميل (المؤمن له و/ أو المستفيد)
                            بمثابة المؤمن لدى نفسه بالفرق بين القيمتين و يتحمل
                            تبعاً لذلك نصيبه النسبى من الخسارة، ويخضع كل بند من
                            بنود الوثيقة على حده - في حال تعددها- لمضمون شرط
                            النسبية و علية
                            <br /> 1-فى حالة الخسارة الجزئية
                            <br /> سيتحمل العميل جزء من التعويض يماثل نسبة الفرق
                            بين القيميتين
                            <br /> 2- فى حالة الخسارة الكلية <br />
                            فإن شركة التأمين ستقوم بتعويض العميل بمبلغ التأمين
                            المنصوص عليه في وثيقة التأمين أو القيمة السوقية
                            أيهما أقل.
                        </p>
                        <h4 class="subheading">مثالً عملى </h4>
                        <p>
                            *سيارة مؤمن عليها بقيمة 600.000 جنيه(وقت اصدار وثيقة
                            التأمين) <br />
                            *وأصبحت قيمتها السوقية 1.000.000 جنيه( فى وقت وقوع
                            الحادث) <br />
                            *وعلية تكون السيارة مؤمن عليها لدى شركة التأمين
                            بنسبة 60% ولدى العميل بنسبة 40 % <br />
                            *فى حالة تحقق خسارة جزئية قيمتها قدرت 150.000 جنيه
                            <br /> يكون نصيب شركة التأمين من فاتورة التعويض
                            <br/>=150.000*60%=90.000 جنية فقط <br/>و ذلك بخلاف تطبيق باقى
                            شروط الوثيقة
                        </p>
                    </div>
                </div>
                {/* <div class="row">
                    <div class="col-md-6">
                        <h4>
                            بنقدم لك عرض الأسطورة للتأمين على الأسطول من سليمان
                            بروك
                        </h4>
                        <h4 class="subheading">سعار تنافسية تبدأ من 1.25% </h4>
                        <p class="text-muted">
                            {" "}
                            سرعة صرف التعويضات عروض خاصة لأتوبيسات المدارس و
                            الجامعات خلال شهر أغسطس كما يمكنكم أيضا التقسيط من
                            خلال البنوك و الشركات إلحق أشترى تأمينك لأسطول
                            سياراتك مع سليمان بروك للمزيد من الاستفسارات يرجى
                            التواصل مع خدمة العملاء
                            <p>
                                هذا الاعلان حاصل علي موافقة الهيئة العامة
                                للرقابة المالية{" "}
                            </p>
                        </p>
                        <a
                            href="https://m.facebook.com/story.php?story_fbid=pfbid035QYF5CXBuQ4s8cqQnfqnQ9xw6jaxtsxUjdK98knSzwr1f2damgbtLiyd5CmZmbZjl&id=100090107778931&mibextid=qC1gEa"
                            target="_blank"
                        >
                            <i class="fas fa-play mr-2"></i>Blog Link
                        </a>
                    </div>
                    <div class="col-md-6 how-img">
                        <img
                            src={blog2}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img
                            src={blog3}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                    <div class="col-md-6">
                        <h4> أسرتك تستحق .. سيب التأمين يشيل</h4>
                        <h4 class="subheading">
                            لتأمين الطبى أصبح ضرورة مش رفاهية .. و مصاريف العلاج
                            ..أصبحت نار ..
                        </h4>
                        <p class="text-muted">
                            عشان أسرتك غالية عليك .. أمن و إطمن و خلى التأمين
                            يشيل عنك كما يمكنكم أيضا التقسيط من خلال البنوك و
                            الشركات للمزيد من الاستفسارات يرجى التواصل مع خدمة
                            العملاء
                            <p>
                                هذا الاعلان حاصل علي موافقة الهيئة العامة
                                للرقابة المالية{" "}
                            </p>
                        </p>
                        <a
                            href="https://m.facebook.com/story.php?story_fbid=pfbid02oMxjwCyzdDHmX7GdBDH6dX8p4ojqBX5TAuN3CvBTTkANuNioEit6GpBpGwi76oCLl&id=100090107778931&mibextid=qC1gEa"
                            target="_blank"
                        >
                            <i class="fas fa-play mr-2"></i>Blog Link
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4> لشركات الخرسانة الجاهزة و المقاولات</h4>
                        <h4 class="subheading">
                            من على معداتك الهندسية .. مع سليمان بروك معداتك فى
                            أمان بين إيدينا
                        </h4>
                        <p class="text-muted">
                            {" "}
                            أفضل تغطية تأمينية للخلاطات و المضخات و المعدات
                            الهندسية .. سليمان بروك - Soliman Brok بيوفر: سرعة
                            صرف التعويضات أفضل خدمة ما بعد البيع كما يمكنكم أيضا
                            التقسيط من خلال البنوك و الشركات للمزيد من
                            الاستفسارات يرجى التواصل مع خدمة العملاء
                            <p>
                                هذا الاعلان حاصل علي موافقة الهيئة العامة
                                للرقابة المالية{" "}
                            </p>
                            <a
                                href="https://m.facebook.com/story.php?story_fbid=pfbid033wU5uy4Tad2nCXdeksB5YDYH5uWWNRJqSd1edRPM1k79i71Wrad9yndJVCoKz9qol&id=100090107778931&mibextid=qC1gEa"
                                target="_blank"
                            >
                                <i class="fas fa-play mr-2"></i>Blog Link
                            </a>
                        </p>
                    </div>
                    <div class="col-md-6 how-img">
                        <img
                            src={blog4}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img
                            src={blog5}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                    <div class="col-md-6">
                        <h4> أسرتك تستحق .. سيب التأمين يشيل</h4>
                        <h4 class="subheading">
                            لتأمين الطبى أصبح ضرورة مش رفاهية .. و مصاريف العلاج
                            ..أصبحت نار ..
                        </h4>
                        <p class="text-muted">
                            عشان أسرتك غالية عليك .. أمن و إطمن و خلى التأمين
                            يشيل عنك كما يمكنكم أيضا التقسيط من خلال البنوك و
                            الشركات للمزيد من الاستفسارات يرجى التواصل مع خدمة
                            العملاء
                            <p>
                                هذا الاعلان حاصل علي موافقة الهيئة العامة
                                للرقابة المالية{" "}
                            </p>
                        </p>
                        <a
                            href="https://m.facebook.com/story.php?story_fbid=pfbid02oMxjwCyzdDHmX7GdBDH6dX8p4ojqBX5TAuN3CvBTTkANuNioEit6GpBpGwi76oCLl&id=100090107778931&mibextid=qC1gEa"
                            target="_blank"
                        >
                            <i class="fas fa-play mr-2"></i>Blog Link
                        </a>
                    </div>
                </div> */}
                {/* <div class="row">
                    <div class="col-md-6">
                        <h4>Get paid on time</h4>
                        <h4 class="subheading">
                            أمن على معداتك الهندسية .. مع سليمان بروك معداتك فى
                            أمان بين إيدينا.
                        </h4>
                        <p class="text-muted">
                            {" "}
                            أفضل تغطية تأمينية للخلاطات و المضخات و المعدات
                            الهندسية.. سليمان بروك - Soliman Brok بيوفر: سرعة
                            صرف التعويضات أفضل خدمة ما بعد البيع كما يمكنكم أيضا
                            التقسيط من خلال البنوك و الشركات للمزيد من
                            الاستفسارات يرجى التواصل مع خدمة العملاء
                            <p>
                                قم التسجيل بالرقابة المالية : 23913 رقم السجيل
                                الضريبي: 202-955-087
                            </p>
                            <a
                                    href="https://m.facebook.com/story.php?story_fbid=pfbid0WRQbaVgkU3a6URaqcxRSAKZen98umRZRzSF39oPeMmXZLEjvvwdovYYZGSQz8MZql&id=100090107778931&mibextid=qC1gEa"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                        </p>
                    </div>
                    <div class="col-md-6 how-img">
                        <img
                            src={blog6}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                </div> */}
            </div>
   
        </div>
    );
};

export default Blog;
