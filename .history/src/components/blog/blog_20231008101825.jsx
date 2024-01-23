import React from "react";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import blog1 from "./../../assets/blog/blog1.jpg";
import "./Blog.css";
const Blog = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    return (
        <div>
            <section class="light">
                <div class="container py-2">
                    <div class="h1 text-center text-dark" id="pageHeaderTitle">
                        Blog
                    </div>

                    <article class="postcard light blue">
                        <a class="postcard__img_link" href="#">
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
                                <p>يه التغطيات اللازمة؟</p>
                                <p>إيه أفضل شركة؟</p>
                                <p>إيه أفضل سعر؟</p>
                                <p>سليمان بروك للوساطة التأمينية بيقدم لك:</p>
                                <p>
                                    حلول تأمينيه للمخاطر المحتمله لنشاطك بيقدملك
                                    الحلول و بيساعدك على الإختيار أفضل متابعة ما
                                    بعد البيع و أفضل و أسرع خدمة تعويضات
                                </p>
                                <p>
                                    متاح التقسيط من خلال البنوك و شركات التقسيط
                                    الموضحة للمزيد من الاستفسارات يرجى التواصل
                                    مع خدمة العملاء
                                </p>
								<p
                            </div>
                            <ul class="postcard__tagbox pt-4">
                                <a href="#">
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
                                src="https://picsum.photos/501/500"
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title red">
                                <a href="#">
                                    بنقدم لك عرض الأسطورة للتأمين على الأسطول من
                                    سليمان بروك
                                </a>
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
                                01282153333 واتس اب : 01282153333 او تقدر
                                تبعتلنا رسائل علي الصفحة.. (هذة صفحة ترويجية
                                تابعة للوسيط التأميني محمود سليمان أحمد ) رقم
                                التسجيل بالرقابة المالية : 23913 رقم السجيل
                                الضريبي: 202-955-087 هذا الاعلان حاصل علي موافقة
                                الهيئة العامة للرقابة المالية
                            </div>
                            <ul class="postcard__tagbox">
                                <a href="https://m.facebook.com/story.php?story_fbid=pfbid035QYF5CXBuQ4s8cqQnfqnQ9xw6jaxtsxUjdK98knSzwr1f2damgbtLiyd5CmZmbZjl&id=100090107778931&mibextid=qC1gEa">
                                    <i class="fas fa-play mr-2"></i>Blog Link
                                </a>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light green">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src="https://picsum.photos/500/501"
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title green">
                                <a href="#">Podcast Title</a>
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi, fugiat asperiores
                                inventore beatae accusamus odit minima enim,
                                commodi quia, doloribus eius! Ducimus nemo
                                accusantium maiores velit corrupti tempora
                                reiciendis molestiae repellat vero. Eveniet
                                ipsam adipisci illo iusto quibusdam, sunt neque
                                nulla unde ipsum dolores nobis enim quidem
                                excepturi, illum quos!
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item">
                                    <i class="fas fa-tag mr-2"></i>Podcast
                                </li>
                                <li class="tag__item">
                                    <i class="fas fa-clock mr-2"></i>55 mins.
                                </li>
                                <li class="tag__item play green">
                                    <a href="#">
                                        <i class="fas fa-play mr-2"></i>Play
                                        Episode
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src="https://picsum.photos/501/501"
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                <a href="#">Podcast Title</a>
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi, fugiat asperiores
                                inventore beatae accusamus odit minima enim,
                                commodi quia, doloribus eius! Ducimus nemo
                                accusantium maiores velit corrupti tempora
                                reiciendis molestiae repellat vero. Eveniet
                                ipsam adipisci illo iusto quibusdam, sunt neque
                                nulla unde ipsum dolores nobis enim quidem
                                excepturi, illum quos!
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item">
                                    <i class="fas fa-tag mr-2"></i>Podcast
                                </li>
                                <li class="tag__item">
                                    <i class="fas fa-clock mr-2"></i>55 mins.
                                </li>
                                <li class="tag__item play yellow">
                                    <a href="#">
                                        <i class="fas fa-play mr-2"></i>Play
                                        Episode
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src="https://picsum.photos/501/501"
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                <a href="#">Podcast Title</a>
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi, fugiat asperiores
                                inventore beatae accusamus odit minima enim,
                                commodi quia, doloribus eius! Ducimus nemo
                                accusantium maiores velit corrupti tempora
                                reiciendis molestiae repellat vero. Eveniet
                                ipsam adipisci illo iusto quibusdam, sunt neque
                                nulla unde ipsum dolores nobis enim quidem
                                excepturi, illum quos!
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item">
                                    <i class="fas fa-tag mr-2"></i>Podcast
                                </li>
                                <li class="tag__item">
                                    <i class="fas fa-clock mr-2"></i>55 mins.
                                </li>
                                <li class="tag__item play yellow">
                                    <a href="#">
                                        <i class="fas fa-play mr-2"></i>Play
                                        Episode
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                    <article class="postcard light yellow">
                        <a class="postcard__img_link" href="#">
                            <img
                                class="postcard__img"
                                src="https://picsum.photos/501/501"
                                alt="Image Title"
                            />
                        </a>
                        <div class="postcard__text t-dark">
                            <h1 class="postcard__title yellow">
                                <a href="#">Podcast Title</a>
                            </h1>
                            <div class="postcard__subtitle small">
                                <time datetime="2020-05-25 12:00:00">
                                    <i class="fas fa-calendar-alt mr-2"></i>Mon,
                                    May 25th 2020
                                </time>
                            </div>
                            <div class="postcard__bar"></div>
                            <div class="postcard__preview-txt">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Eligendi, fugiat asperiores
                                inventore beatae accusamus odit minima enim,
                                commodi quia, doloribus eius! Ducimus nemo
                                accusantium maiores velit corrupti tempora
                                reiciendis molestiae repellat vero. Eveniet
                                ipsam adipisci illo iusto quibusdam, sunt neque
                                nulla unde ipsum dolores nobis enim quidem
                                excepturi, illum quos!
                            </div>
                            <ul class="postcard__tagbox">
                                <li class="tag__item">
                                    <i class="fas fa-tag mr-2"></i>Podcast
                                </li>
                                <li class="tag__item">
                                    <i class="fas fa-clock mr-2"></i>55 mins.
                                </li>
                                <li class="tag__item play yellow">
                                    <a href="#">
                                        <i class="fas fa-play mr-2"></i>Play
                                        Episode
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Blog;
