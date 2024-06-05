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
            </div>
   
        </div>
    );
};

export default Blog;
