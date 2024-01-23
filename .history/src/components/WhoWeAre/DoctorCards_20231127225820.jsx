import React from "react";
import "./Doctor.css";
import pie from "./../../assets/insurance-icons/tart2.jpg";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import soliman1 from "./../../assets/clients/soliman-1.png";
import soliman2 from "./../../assets/clients/soliman-2.png";
import soliman4 from "./../../assets/clients/soliman-4.png";
import soliman5 from "./../../assets/clients/soliman-5.png";
import soliman6 from "./../../assets/clients/soliman-6.png";
const DoctorCards = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div >
            <section className="section services-section bgcolor" id="services" >
                <div className="container" dir="auto">
                    <div className="row">
                        <div className="">
                            <div className="section-title"dir="auto">
                                <h2 className="big-title ">
                                    {" "}
                                    {isEnglish
                                        ? "Medical Service"
                                        : "خدمة عملاء التأمين الطبي"}
                                </h2>
                                <p >
                                    {" "}
                                    {isEnglish
                                        ? "we present special & very professional services for our medical clients"
                                        : "نقدم خدمات خاصة ومهنية للغاية لعملائنا الطبيين"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="container"dir="auto">
                        <div class="card-deck row" dir="auto">
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="card"dir="auto">
                                    <div class="view overlay">
                                        <img
                                            class="card-img-top"
                                            src={soliman1}
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "Design Your Table Of Benefits"
                                                : ":تصميم جدول المزايا الحاص بكل عميل"}
                                        </h4>

                                        <p class="card-text" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "we help you to design your table of benefits that meets your expectations"
                                                : "حيث نساعد المالك أو مدير الموارد البشرية لدى عملاؤنا لتصميم جدول المنافع والمزايا التى تناسب إتيجاتة و الميزانية الخاصة به "}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <div class="view overlay">
                                        <img
                                            className="card-img-top "
                                            src={soliman2}
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div class="card-body" >
                                        <h4 class="card-title" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "Offers Comparison & policy insuring"
                                                : "عروض الأسعار"}
                                        </h4>

                                        <p class="card-text" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "we prepare a professional, technical & financial comparison between the different offers we present to you to help you taking the write decision and follow all the issuing steps till you receive your medical cards"
                                                : "نقدم مجموعه من  عروض أسعار من أكثر من شركة تأمين مع مقارنة فنية دقيقة لكل المزايا و الشروط لكى نساعدك لإخيار الأنس و الأفضل لك"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <div class="view overlay">
                                        <img
                                            class="card-img-top"
                                            src={pie}
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title" >
                                            {" "}
                                            {isEnglish
                                                ? "Consumption's analysis"
                                                : "تحليل الإستهلاكات "}{" "}
                                        </h4>

                                        <p class="card-text" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "Because your staff consumptions are very important, we are care about it We provide you with a financial analysis on a regular base accompanied the related indications & The needed solutions"
                                                : "نظرا لأن إستهلاكات موظفينك هامة جدا فهى مصدر المعلومات الأساسى لمستقبل العقد فإننا نقوم بإستمرار بتحليل هذة الإستهلاكات وتقديما لمدير الموارد البشربة لكم متضمنة مجموعه من النصائح و الحلول الحالية والمستقبلية "}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="card">
                                    <div class="view overlay">
                                        <img
                                            class="card-img-top"
                                            src={soliman4}
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title" dir="auto">
                                            {isEnglish
                                                ? "Cash refund cycle follows up"
                                                : "خدمة متابعة الإسترداد النقدى"}
                                        </h4>

                                        <p class="card-text" dir="auto">
                                            {isEnglish
                                                ? "We follow your refund cycle starting from Reviewing documents, delivering it to the insurer, follow the settlement, till you receive your check"
                                                : "نتابع عملية الإسترداد النقدى الخاصة بعملؤنا بداية من أستلام الإسترداد من مقر العميل ثم مراجعتة ثم تسليمة لشركة التأمين حتى تسليم قيمة الأسترداد للعميل"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <div class="view overlay">
                                        <img
                                            class="card-img-top"
                                            src={soliman5}
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "Medical Approvals facilities"
                                                : "خدمة الموافقات الطبية "}
                                        </h4>

                                        <p class="card-text" dir="auto">
                                            {isEnglish
                                                ? "We follow your approval request from A:Z to  make sure it is accurate & on time"
                                                : "نسهل لعملؤنا عملية الحصول على الموفقات الطبية من األف إلى الياء للتأكد من إتام الموافقة وفى الوقت المحدد لها"}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4">
                                <div class="card mb-4">
                                    <div class="view overlay">
                                        <img
                                            class="card-img-top"
                                            src={soliman6}
                                            alt="Card image cap"
                                        />
                                        <a href="#!">
                                            <div class="mask rgba-white-slight"></div>
                                        </a>
                                    </div>

                                    <div class="card-body">
                                        <h4 class="card-title" dir="auto">
                                            {" "}
                                            {isEnglish
                                                ? "Contract renewal"
                                                : "خدمة تجديد التعاقد"}
                                        </h4>

                                        <p class="card-text" dir="auto">
                                            {isEnglish
                                                ? "We manage all the renewal process starting from renewal Negotiations till contract renewal with the best conditions"
                                                : "نقوم بإدارة ملف تجديد التعاقد بداية من التفاوض حتى إأتمام التجديد بأفضل الشروط والمزايا و الأسعار "}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="section services-section bgcolor" id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-title">
                                <h2>
                                    {" "}
                                    {isEnglish
                                        ? "Medical Service"
                                        : "الخدمة الطبية"}
                                </h2>
                                <p>
                                    {" "}
                                    {isEnglish
                                        ? "we present special & very professional services for our medical clients"
                                        : "نقدم خدمات خاصة ومهنية للغاية لعملائنا الطبيين"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 col-lg-4 ">
                            <div className="feature-box-1">
                                <div className="icon1">
                                    <img
                                        className="fa fa-comment  icon1"
                                        src="https://media.istockphoto.com/id/1270263732/vector/different-destinations-plan-a-b-and-c-illustration.jpg?s=612x612&w=0&k=20&c=K1d5BCTbc6cKhAEXd_mT8HttvD3H9gJzOVt47s--Qug="
                                    />
                                </div>
                                <div className="feature-content">
                                    <h5>
                                        {" "}
                                        {isEnglish
                                            ? "Design Your Table"
                                            : "صمم جدولك"}
                                    </h5>
                                    <p>
                                        {" "}
                                        {isEnglish
                                            ? "we help you to design your table of benefits that meets your expectations"
                                            : "نحن نساعد على تصميم جدول المزايا الخاص بك بما يلبي توقعاتك"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon2">
                                    <img
                                        className="fa fa-comment  icon2"
                                        src="https://www.transparentpng.com/thumb/special-offer/special-offer-tag-png-pictures-4.png"
                                    />
                                </div>
                                <div className="feature-content">
                                    <h5>
                                        {" "}
                                        {isEnglish
                                            ? "Offers Comparison & policy insuring"
                                            : "عروض المقارنة وتأمين السياسة"}
                                    </h5>
                                    <p>
                                        {" "}
                                        {isEnglish
                                            ? "we prepare a professional, technical & financial comparison between the different offers we present to you to help you taking the write decision and follow all the issuing steps till you receive your medical cards"
                                            : "نقوم بإعداد مقارنة مهنية وفنية ومالية بين العروض المختلفة التي نقدمها لك لمساعدتك في اتخاذ قرار الكتابة واتباع جميع خطوات الإصدار حتى استلام البطاقات الطبية الخاصة بك"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon3">
                                    <img
                                        className="fa fa-comment  icon3"
                                        src="https://www.researchgate.net/publication/338658880/figure/fig4/AS:848379814879234@1579280918951/Analysis-of-electricity-consumption-in-the-building.jpg"
                                    />
                                </div>
                                <div className="feature-content">
                                    <h5>
                                        {" "}
                                        {isEnglish
                                            ? "Consumption's analysis"
                                            : "تحليل الاستهلاك"}
                                    </h5>
                                    <p>
                                        {" "}
                                        {isEnglish
                                            ? "Because your staff consumptions are very important, we are care about it We provide you with a financial analysis on a regular base accompanied the related indications & The needed solutions"
                                            : "لأن استهلاكات موظفيك مهمة للغاية، فنحن نهتم بها ونقدم لك التحليل المالي بشكل منتظم مصحوبًا بالمؤشرات والحلول اللازمة"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon4">
                                    <img
                                        className="fa fa-comment  icon4"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4E_s9iWoVKhBtNm1OS2gcCO1zhDUtYV-OiZnUEqeu2VuRtm9U8-PhPhDmI0olWgBJMUE&usqp=CAU"
                                    />
                                </div>
                                <div className="feature-content">
                                    <h5>
                                        {" "}
                                        {isEnglish
                                            ? "Cash refund cycle follows up"
                                            : "متابعة دورة استرداد النقود"}
                                    </h5>
                                    <p>
                                        {" "}
                                        {isEnglish
                                            ? "We follow your refund cycle starting from Reviewing documents, delivering it to the insurer, follow the settlement, till you receive your check"
                                            : "نحن نتابع دورة استرداد الأموال الخاصة بك بدءًا من   مراجعة المستندات، وتسليمها إلى شركة التأمين، ومتابعة التسوية، حتى تتلقى الشيك الخاص بك"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <img
                                        className="fa fa-comment  icon4"
                                        src="https://www.pharmathirdpartymanufacturer.com/wp-content/uploads/2021/01/Medicine-Supplier-in-India.jpg"
                                    />
                                </div>
                                <div className="feature-content">
                                    <h5>
                                        {" "}
                                        {isEnglish
                                            ? "Medical Approvals facilities"
                                            : "مرافق الموافقات الطبية"}
                                    </h5>
                                    <p>
                                        {" "}
                                        {isEnglish
                                            ? "We follow your approval request from A:Z to  make sure it is accurate & on time"
                                            : "نحن نتابع طلب الموافقة الخاص بك من A:Z للتأكد من دقته وفي الوقت المحدد"}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="col-sm-6 col-lg-4">
                            <div className="feature-box-1">
                                <div className="icon">
                                    <img
                                        className="fa fa-comment  icon5"
                                        src="https://www.channelpronetwork.com/sites/default/files/styles/large/public/thumbnails/article/1807cp5-art.jpg?itok=YpQVarnh"
                                    />
                                </div>
                                <div className="feature-content">
                                    <h5>
                                        {" "}
                                        {isEnglish
                                            ? "Contract renewal"
                                            : "تجديد العقود"}
                                    </h5>
                                    <p>
                                        {" "}
                                        {isEnglish
                                            ? "We manage all the renewal process starting from renewal Negotiations till contract  renewal with the best conditions"
                                            : "نحن ندير جميع عمليات التجديد بدءًا من مفاوضات التجديد حتى تجديد العقد بأفضل الشروط"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    );
};

export default DoctorCards;
