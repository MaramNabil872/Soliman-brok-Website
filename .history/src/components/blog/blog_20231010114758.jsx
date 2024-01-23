import React from "react";
import { useLanguageContext } from "../../Contexts/LanguageContext";
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
        <div>
            <div class="bg-overlay">
                <div class="row text-center">
                    <br />
                    <br />
                    <h1 className=" header1">
                        Our Blog
                        <br />
                    </h1>
                </div>
            </div>

            <br />
            <br />

            <div class="how-section1">
                <div class="row">
                    <div class="col-md-6 how-img">
                        <img
                            src={blog1}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                    <div class="col-md-6">
                        <h4>
                            {" "}
                            لأصحاب المصانع و الشركات عايز تعمل تأمين و مش عارف؟
                        </h4>
                        <h4 class="subheading">
                            سليمان بروك للوساطة التأمينية بيقدم لك:
                        </h4>
                        <p class="text-muted">
                            {" "}
                            حلول تأمينيه للمخاطر المحتمله لنشاطك بيقدملك الحلول
                            و بيساعدك على الإختيار أفضل متابعة ما كما يمكنكم
                            أيضا التقسيط من خلال البنوك و الشركات إلحق أشترى
                            تأمينك لأسطول سياراتك مع سليمان بروك للمزيد من
                            الاستفسارات يرجى التواصل مع خدمة العملاء للتأمين
                            الطبي : هذا الاعلان حاصل علي موافقة الهيئة العامة
                            للرقابة المالية{" "}
                        </p>
                        <a
                            href="https://m.facebook.com/story.php?story_fbid=pfbid036MgnURuUB8yaw8fGbWBsLFBcnh2b5gypRFxXmGW8bo3GoyhbpciWso5sjYJ2pDGdl&id=100090107778931&mibextid=qC1gEa"
                            target="_blank"
                        >
                            <i class="fas fa-play mr-2 pt-4"></i>Blog Link
                        </a>
                    </div>
                </div>
                <div class="row">
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
                                        <i class="fas fa-play mr-2"></i>Blog
                                        Link
                                    </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4> لشركات الخرسانة الجاهزة و المقاولات</h4>
                        <h4 class="subheading">
                           
                        من على معداتك الهندسية .. مع سليمان بروك معداتك
                                فى أمان بين إيدينا
                        </h4>
                        <p class="text-muted"> أفضل تغطية تأمينية للخلاطات و
                                المضخات و المعدات الهندسية .. سليمان بروك -
                                Soliman Brok بيوفر: سرعة صرف التعويضات أفضل خدمة
                                ما بعد البيع كما يمكنكم أيضا التقسيط من خلال
                                البنوك و الشركات للمزيد من الاستفسارات يرجى
                                التواصل مع خدمة العملاء
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
                                        <i class="fas fa-play mr-2"></i>Blog
                                        Link
                                    </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <h4>Get paid on time</h4>
                        <h4 class="subheading">
                            All projects include GetLance Payment Protection —
                            helping ensure that you get paid for all work
                            successfully completed through the freelancing
                            website.
                        </h4>
                        <p class="text-muted">
                            All invoices and payments happen through GetLance.
                            Count on a simple and streamlined process. Hourly
                            and fixed-price projects. For hourly work, submit
                            timesheets through GetLance. For fixed-price jobs,
                            set milestones and funds are released via GetLance
                            escrow features. Multiple payment options. Choose a
                            payment method that works best for you, from direct
                            deposit or PayPal to wire transfer and more.
                        </p>
                    </div>
                    <div class="col-md-6 how-img">
                        <img
                            src={blog5}
                            class="rounded-circle img-fluid"
                            alt=""
                        />
                    </div>
                </div>
            </div>

            <section class="light">
                <div class="container py-2">
                    <article class="postcard light blue">
                        <a class="" href="#">
                            <img class="postcard__img" src={blog1} />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title blue">
                                {" "}
                                لأصحاب المصانع و الشركات عايز تعمل تأمين و مش
                                عارف؟
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>{" "}
                                    17\5\2023
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                {/* <p>يه التغطيات اللازمة؟</p>
                                <p>إيه أفضل شركة؟</p>
                                <p>إيه أفضل سعر؟</p> */}
                                <p>سليمان بروك للوساطة التأمينية بيقدم لك:</p>
                                <p>
                                    حلول تأمينيه للمخاطر المحتمله لنشاطك بيقدملك
                                    الحلول و بيساعدك على الإختيار أفضل متابعة ما
                                    كما يمكنكم أيضا التقسيط من خلال البنوك و
                                    الشركات إلحق أشترى تأمينك لأسطول سياراتك مع
                                    سليمان بروك للمزيد من الاستفسارات يرجى
                                    التواصل مع خدمة العملاء للتأمين الطبي :
                                    01222373587 \ 01282153333 لتأمين السيارات :
                                    01271102224 \ 01282153333 للتأمينات العامة :
                                    01222373581 \ 01282153333 واتس اب :
                                    01282153333 بعد البيع و أفضل و أسرع خدمة
                                    تعويضات
                                    <p>
                                        هذا الاعلان حاصل علي موافقة الهيئة
                                        العامة للرقابة المالية{" "}
                                    </p>
                                </p>
                            </div>
                            <ul class="postcard__tagbox pt-4">
                                <a
                                    href="https://m.facebook.com/story.php?story_fbid=pfbid036MgnURuUB8yaw8fGbWBsLFBcnh2b5gypRFxXmGW8bo3GoyhbpciWso5sjYJ2pDGdl&id=100090107778931&mibextid=qC1gEa"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2 pt-4"></i>Blog
                                    Link
                                </a>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light red">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src={blog2}
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title red">
                                بنقدم لك عرض الأسطورة للتأمين على الأسطول من
                                سليمان بروك
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    17\5\2023
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                أسعار تنافسية تبدأ من 1.25% سرعة صرف التعويضات
                                عروض خاصة لأتوبيسات المدارس و الجامعات خلال شهر
                                أغسطس كما يمكنكم أيضا التقسيط من خلال البنوك و
                                الشركات إلحق أشترى تأمينك لأسطول سياراتك مع
                                سليمان بروك للمزيد من الاستفسارات يرجى التواصل
                                مع خدمة العملاء للتأمين الطبي : 01222373587 \
                                01282153333 لتأمين السيارات : 01271102224 \
                                01282153333 للتأمينات العامة : 01222373581 \
                                01282153333 واتس اب : 01282153333
                                <p>
                                    هذا الاعلان حاصل علي موافقة الهيئة العامة
                                    للرقابة المالية{" "}
                                </p>
                            </div>
                            <ul class="postcard__tagbox">
                                <a
                                    href="https://m.facebook.com/story.php?story_fbid=pfbid035QYF5CXBuQ4s8cqQnfqnQ9xw6jaxtsxUjdK98knSzwr1f2damgbtLiyd5CmZmbZjl&id=100090107778931&mibextid=qC1gEa"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light green">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src={blog3}
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title green">
                                أسرتك تستحق .. سيب التأمين يشيل
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>
                                    17\5\2023
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                التأمين الطبى أصبح ضرورة مش رفاهية .. و مصاريف
                                العلاج أصبحت نار .. و عشان أسرتك غالية عليك ..
                                أمن و إطمن و خلى التأمين يشيل عنك كما يمكنكم
                                أيضا التقسيط من خلال البنوك و الشركات للمزيد من
                                الاستفسارات يرجى التواصل مع خدمة العملاء للتأمين
                                الطبي : 01222373587 \ 01282153333 لتأمين
                                السيارات : 01271102224 \ 01282153333 للتأمينات
                                العامة : 01222373581 \ 01282153333 واتس اب :
                                01282153333
                                <p>
                                    هذا الاعلان حاصل علي موافقة الهيئة العامة
                                    للرقابة المالية{" "}
                                </p>
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item play green">
                                    <a
                                        href="https://m.facebook.com/story.php?story_fbid=pfbid02oMxjwCyzdDHmX7GdBDH6dX8p4ojqBX5TAuN3CvBTTkANuNioEit6GpBpGwi76oCLl&id=100090107778931&mibextid=qC1gEa"
                                        target="_blank"
                                    >
                                        <i class="fas fa-play mr-2"></i>Blog
                                        Link
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src={blog4}
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                لشركات الخرسانة الجاهزة و المقاولات
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>{" "}
                                    17\5\2023
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                من على معداتك الهندسية .. مع #سليمان_بروك معداتك
                                فى أمان بين إيدينا أفضل تغطية تأمينية للخلاطات و
                                المضخات و المعدات الهندسية .. سليمان بروك -
                                Soliman Brok بيوفر: سرعة صرف التعويضات أفضل خدمة
                                ما بعد البيع كما يمكنكم أيضا التقسيط من خلال
                                البنوك و الشركات للمزيد من الاستفسارات يرجى
                                التواصل مع خدمة العملاء
                                <p>
                                    هذا الاعلان حاصل علي موافقة الهيئة العامة
                                    للرقابة المالية{" "}
                                </p>
                            </div>
                            <ul class="postcard__tagbox">
                                <a
                                    href="https://m.facebook.com/story.php?story_fbid=pfbid033wU5uy4Tad2nCXdeksB5YDYH5uWWNRJqSd1edRPM1k79i71Wrad9yndJVCoKz9qol&id=100090107778931&mibextid=qC1gEa"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src={blog5}
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                متخفش على سياراتك أمنها و ريح بالك
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                عندك أسطول سيارات و عايز تأمن عليه عندك أسطول
                                أوتوبيسات مدارس أو جامعات أسطولك ده أسطوره لازم
                                تحافظ عليها بنقدم لك عرض الأسطورة للتأمين على
                                الأسطول من سليمان بروك: أسعار تنافسية تبدأ من
                                1.25% سرعة صرف التعويضات عروض خاصة لأتوبيسات
                                المدارس و الجامعات كما يمكنكم أيضا التقسيط من
                                خلال البنوك و الشركات مستنى إيه؟ أمن نفسك و
                                عربيتك و كلمنا حالا للمزيد من الاستفسارات يرجى
                                التواصل مع خدمة العملاء
                                <p>
                                    قم التسجيل بالرقابة المالية : 23913 رقم
                                    السجيل الضريبي: 202-955-087
                                </p>
                            </div>
                            <ul class="postcard__tagbox">
                                <a
                                    href="https://m.facebook.com/story.php?story_fbid=pfbid0ntZHr63EdTgBu563Exq6SLVSRoniqCEa7gMzpw8BrvexAXHJKmPHykKJ8innpWNel&id=100090107778931&mibextid=qC1gEa"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src={blog6}
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                لشركات الخرسانة الجاهزة و المقاولات
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                أمن على معداتك الهندسية .. مع سليمان بروك معداتك
                                فى أمان بين إيدينا أفضل تغطية تأمينية للخلاطات و
                                المضخات و المعدات الهندسية.. سليمان بروك -
                                Soliman Brok بيوفر: سرعة صرف التعويضات أفضل خدمة
                                ما بعد البيع كما يمكنكم أيضا التقسيط من خلال
                                البنوك و الشركات للمزيد من الاستفسارات يرجى
                                التواصل مع خدمة العملاء
                                <p>
                                    قم التسجيل بالرقابة المالية : 23913 رقم
                                    السجيل الضريبي: 202-955-087
                                </p>
                            </div>
                            <ul class="postcard__tagbox">
                                <a
                                    href="https://m.facebook.com/story.php?story_fbid=pfbid0WRQbaVgkU3a6URaqcxRSAKZen98umRZRzSF39oPeMmXZLEjvvwdovYYZGSQz8MZql&id=100090107778931&mibextid=qC1gEa"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src={blog7}
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                لأصحاب المصانع و الشركات
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                عايز تعمل تأمين و مش عارف: إيه التغطيات اللازمة؟
                                إيه أفضل شركة؟ إيه أفضل سعر؟ سليمان بروك للوساطة
                                التأمينية بيقدم لك: حلول تأمينيه للمخاطر
                                المحتمله لنشاطك بيقدملك الحلول و بيساعدك على
                                الإختيارأفضل متابعة ما بعد البيع و أفضل و أسرع
                                خدمة تعويضات متاح التقسيط من خلال البنوك و شركات
                                التقسيط الموضحة للمزيد من الاستفسارات يرجى
                                التواصل مع خدمة العملاء
                                <p>
                                    رقم التسجيل بالرقابة المالية : 23913 رقم
                                    السجيل الضريبي: 202-955-087
                                </p>
                            </div>
                            <ul class="postcard__tagbox">
                                <a
                                    href="https://www.linkedin.com/posts/solimanbrok_aesaelaetaeyaeuabraepaesaetaehaexaepaesabraepaesaevaeuaexaebaeyaer-activity-7107369768302632960-cgzO?utm_source=share&utm_medium=member_ios"
                                    target="_blank"
                                >
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Blog;
