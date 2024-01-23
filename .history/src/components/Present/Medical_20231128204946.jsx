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
                        <div className="post-title" dir="auto">
                            {" "}
                            {isEnglish ? " MEDICAL INSURANCE" :  "التأمين الطبى"}
                        </div>
                    </div>
            
                </div>
            </div>
        </div>
    );
};

export default Medical;
