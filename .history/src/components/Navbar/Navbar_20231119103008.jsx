import { useEffect, useState } from "react";
import "./Navbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./../../assets/images/logo-1.png";
import { useLanguageContext } from "../../Contexts/LanguageContext";
import { Link } from "react-router-dom";
import instagram from "./../../assets/images/instagram.png";
import facebook from "./../../assets/images/facebook.png";
import linkidin from "./../../assets/images/linkidin.png";
import Posts from "./Posts.json";

function Navbar() {
    const [y, setY] = useState(window.scrollY);

    const [posts, setPosts] = useState([]);
    const location = useLocation();
    const languages = [ "English","عربي"];
    const { setLanguage, isEnglish, selectedLanguage, setSelectedLanguage } =
        useLanguageContext();
        const changeLanguage = lng => {
            i18n.changeLanguage(lng);
          };
    const handleChange = (event) => {
        setSelectedLanguage(event.target.value);
        setLanguage(event.target.value);
    };

    useEffect(() => {
        setY(window.scrollY);
    }, []);

    useEffect(() => {
        console.log(selectedLanguage, "THE CURRENT ACTIVE LANGUAGE");
    }, [selectedLanguage]);

    useEffect(() => {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 20) {
                document
                    ?.getElementById("navbar_top")
                    ?.classList.add("bg-opacity-50");
                // add padding top to show content behind navbar
                let navbar_height =
                    document?.querySelector <
                    HTMLElement >
                    ".navbar"?.offsetHeight;
                document.body.style.paddingTop = navbar_height + "px";
            } else {
                document
                    ?.getElementById("navbar_top")
                    ?.classList.remove("bg-opacity-50");
                // remove padding top from body
                document.body.style.paddingTop = "0";
            }
        });
    }, [y]);

    const navigate = useNavigate();

    return (
        <nav
            id="navbar_top"
            className="navbar navbar-dark navbar-expand-lg bg-dark sticky-top d-flex justify-content-start text-light bg-dark"
            style={{ maxHeight: "100px" }}
        >
            {" "}
            <a
                className=""
                style={{ maxWidth: "20%", marginLeft: "1%" }}
                href="#"
            >
                <img
                    onClick={() => {
                        navigate("/");
                    }}
                    src={Logo}
                    style={{ width: "50%" }}
                    alt="logo"
                />
            </a>
            <div className="m-auto  ">
                {/* <ul className="navbar-nav mb-2 mb-lg-0 p-2 ">
                <div class="dropdown">
                <button class="dropbtn"> 
                        Languages
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <li className="float-start">
                        <div class="dropdown-content">
                            {options.map((option, index) => (
                                <div 
                                    key={index}
                                    onClick={() => handleClick(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </div>
                    </li>
                </div>
            </ul> */}
                {/* <a className="navbar-brand" style={{ maxWidth: "30%" }} href="#">
        <img
            onClick={() => {
              navigate("/");
            }}
            src={Logo}
            style={{ width: "50%" }}
            alt="logo"
          />
        </a> */}

                <button
                    className="navbar-toggler text1 "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse "
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mb-2 mb-lg-0 p-2 ">
                        <li className="nav-item  ">
                            <Link
                                className={
                                    location.pathname == "/"
                                        ? "nav-link active"
                                        : "nav-link text1"
                                }
                                aria-current="page"
                                to="/"
                            >
                                {isEnglish ? "Home" : " الرئيسيه"}
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link
                                className={
                                    location.pathname == "/about-us"
                                        ? "nav-link active"
                                        : "nav-link text1"
                                }
                                aria-current="page"
                                to="/about-us"
                            >
                                {isEnglish ? "About Us" : "عن الشركة"}
                            </Link>
                        </li>
                        <li className="nav-item dropdown ">
                            <Link
                                className="nav-link dropdown-toggle text1 btn "
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {isEnglish ? "Products" : "المنتجات"}
                            </Link>
                            <ul className="dropdown-menu">
                                <li>
                                <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/1"
                                    >
                                         {isEnglish ?  "Medical insurance":" التأمين الطبي" } 
                                    </Link>
                                </li>
                                <li>
                                <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/2"
                                    >
                                         {isEnglish ?  "Motor Insurance":" تأمين السيارات" } 
                                    </Link>
                                </li>
                                <li>
                                <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/3"
                                    >
                                        {isEnglish ?  "Property Insurance":" تأمين الممتلكات" }  
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/4"
                                    >
                                       {isEnglish ?  "Marine Insurance":" التأمين البحري" }   
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/5"
                                    >
                                         {isEnglish ?  "Engineering Insurance":" التأمين الهندسي" } 
                                    </Link>
                                </li>
                                <li>
                                <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/6"
                                    >
                                         {isEnglish ?  "Liability Insurance":" تأمين المسؤوليات" } 
                                    </Link>
                                </li>
                                <li>
                                <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/7"
                                    >
                                          {isEnglish ?  "Life Insurance":" تأمين الحياة" }
                                    </Link>
                                </li>
                                <li>
                                <Link
                                        className="dropdown-item mt-2"
                                        to="/Post/8"
                                    >
                                       {isEnglish ?  "Miscellaneous Insurance":" تأمين الحوادث الشخصيه" }  
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className={
                                    location.pathname == "/why-soliman-brok"
                                        ? "nav-link active"
                                        : "nav-link text1"
                                }
                                aria-current="page"
                                to="/why-soliman-brok"
                            >
                                {isEnglish ?  "Why":" لماذا" }
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className={
                                    location.pathname == "/blog"
                                        ? "nav-link active"
                                        : "nav-link text1"
                                }
                                to="/blog"
                            >
                                {isEnglish ? "Blog" : "مقالات"}
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <Link
                                className={
                                    location.pathname == "/contact-us"
                                        ? "nav-link active"
                                        : "nav-link text1"
                                }
                                aria-current="page"
                                to="/contact-us"
                            >
                                {isEnglish ? "Contact Us" : "تواصل معنا"}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col w-50">
                    <img src={linkidin}/>
              
                    <img src={facebook}/>
                   
                 
                    <img src={instagram}/>
                    </div>
            </div>
            <ul className="navbar-nav mb-2 lang">
                <div class="dropdown">
                    
                    <select
                        class="dropbtn  "
                        value={selectedLanguage}
                        onChange={handleChange}
                    >
                        <i class="fa fa-caret-down"></i>
                        {languages.map((language) => (
                            <option
                                class="dropdown-content"
                                key={language}
                                value={language}
                            >
                                {language}
                            </option>
                        ))}
                    </select>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
