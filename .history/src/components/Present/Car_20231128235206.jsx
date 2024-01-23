import React from 'react'

const Car = () => {
  return (
    <div>    <div dir="auto">
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
                    {isEnglish ? " MEDICAL INSURANCE" : " الطبى"}
                </div>
                <div className="post-title2">
                <span >تأمين طبى دولى - تأمين طبى محلى </span><br/>
                <span> تأمين شركات - تأمين فردى للأفراد والعائلات</span>
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
                <div className="post-title1 mt-3 mr-4" dir="auto">
                    {" "}
                    {isEnglish
                        ? "INCLUDE THE FOLLOWING"
                        : "خدماتنا تشمل ما يلي  "}
                </div>
                <div className="post-description ">
                   - <span>أولا : تصميم جدول المزايا الخاص بكل عميل </span><br/>
                    <span>حيث نساعد المالك أو مدير الموارد البشرية لدى عملاؤنا لتصميم جدول المنافع والمزايا التى تناسب إتيجاتة و الميزانية الخاصة به</span><br/>
                    -<span>ثانيا : عروض الأسعار</span><br/>
                    <span> نقدم مجموعه من  عروض أسعار من أكثر من شركة تأمين مع مقارنة فنية دقيقة لكل المزايا و الشروط لكى نساعدك لإختيار الأنسب و الأفضل لك</span><br/>
                   - <span>ثالثا :  تحليل الإستهلاكات </span><br/>
                    <span>نظرا لأن إستهلاكات موظفينك هامة جدا فهى مصدر المعلومات الأساسى لمستقبل العقد</span><br/>
                    <span> فإننا نقوم بإستمرار بتحليل هذة الإستهلاكات وتقديما لمدير الموارد البشربة لكم متضمنة مجموعه من النصائح و الحلول الحالية والمستقبلية</span><br/>
                   - <span>رابعا : خدم متابعة الإسترداد النقدى</span><br/>
                    <span> نتابع عملية الإسترداد النقدى الخاصة بعملؤنا بداية من أستلام الإسترداد من مقر العميل ثم مراجعتة ثم تسليمة لشركة التأمين حتى تسليم قيمة الأسترداد للعميل </span><br/>
                    -<span>خامسا : خدمة الموافقات الطبية</span><br/>
                    <span> نسهل لعملؤنا عملية الحصول على الموفقات الطبية من األف إلى الياء للتأكد من إتمام الموافقة وفى الوقت المحدد لها</span><br/>
                    -<span>سادسا : خدمة تجديد التعاقد </span><br/>
                    <span> نقوم بإدارة ملف تجديد التعاقد بداية من التفاوض حتى إتمام التجديد بأفضل الشروط والمزايا و الأسعار</span><br/>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}

export default Car