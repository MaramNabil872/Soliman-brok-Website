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
                
        </div>
        <Footer />
    </div>
</div></div>
  )
}

export default Medical