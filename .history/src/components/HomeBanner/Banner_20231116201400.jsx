import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css";
import Banner from "./../../assets/images/background-banner2.jpeg";
import { FaWhatsapp } from "react-icons/fa";
import Banner1 from "./../../assets/images/background-banner1.jpeg";
import { FiPhoneCall } from "react-icons/fi";
const options = {
    margin: 100,
    responsiveClass: true,
    nav: true,
    touchDrag: true,
    autoplay: false,
    navText: ["", ""],

    smartSpeed: 1000,
    loop: true,
    center: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1,
        },
    },
};
const Banner = () => {
    return (
        <div>
            <Carousel fade {...options}>
                <Carousel.Item>
                    <img
                        src={Banner1}
                        text="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text"><FaWhatsapp /> <span><FiPhoneCall /></span></div>
                     
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Banner1}
                        text="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                    <div className="carousel-text"><FaWhatsapp /> <span><FiPhoneCall /></span></div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Banner1}
                        text="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                    <div className="carousel-text"><FaWhatsapp /> <span><FiPhoneCall /></span></div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
