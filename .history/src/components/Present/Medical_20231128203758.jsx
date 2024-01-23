import React from 'react'

const Medical = () => {
  return (
    <div><div dir="auto">
    <div dir="auto">
        <div className="container-post row">
            <div className="post-image p-4 col-4" dir="auto">
                <img
                    className="image-border rounded  "
                    dir="auto"
                    style={{ width: " -webkit-fill-available" }}
                    src={item?.image}
                />
            </div>
            <div className="post-text p-4 col-8" dir="auto">
                <div className="post-title" dir="auto">
                    {" "}
                    {isEnglish ? item?.title : item?.titleAR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text : item?.textAR}
                </div>
                <div className="post-title mt-4">
                    {isEnglish ? item?.title2 : item?.title2AR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text1 : item?.text1AR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text2 : item?.text2AR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text3 : item?.text3AR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text4 : item?.text4AR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text5 : item?.text5AR}
                </div>
                <div className="post-description">
                    {isEnglish ? item?.text6 : item?.text6AR}
                </div>
            </div>
        </div>
        <Footer />
    </div>
</div></div>
  )
}

export default Medical