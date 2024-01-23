import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Posts from "../components/Navbar/Posts.json";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useLanguageContext } from "../Contexts/LanguageContext";
const Post = () => {
    const { setLanguage, isEnglish } = useLanguageContext();
    const params = useParams();
    const id = params.id;
    const [item, setItem] = useState({
        title: "",
        titleAR: "",
        image: "",
        id: "",
        text: "",
        textAR: "",
        title2: "",
        title2AR: "",
        text1: "",
        text1AR: "",
        text2: "",
        text2AR: "",
        text3: "",
        text3AR: "",
        text4: "",
        text4AR: "",
        text5: "",
        text5AR: "",
        text6: "",
        text6AR: "",
        title5:"",
    });
    useEffect(() => {
        console.log(id);

        switch (id) {
            // case "1":
            //     setItem(Posts.Medical);
            //     break;
            case "2":
                setItem(Posts.Motor);
                break;
            case "3":
                setItem(Posts.Property);
                break;
            case "4":
                setItem(Posts.Marine);
                break;
            case "5":
                setItem(Posts.Engineering);
                break;
            case "6":
                setItem(Posts.Liability);
                break;
            case "7":
                setItem(Posts.Life);
                break;
            case "8":
                setItem(Posts.Miscellaneous);
                break;
        }

        console.log(item);
    }, [item, id]);

    return (
        <div dir="auto">
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
                        <div className="post-title mt-3">
                            {isEnglish ? item?.title2 : item?.title2AR}
                         
                        </div>
                        <span>{}</span>
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
        </div>
    );
};

export default Post;
