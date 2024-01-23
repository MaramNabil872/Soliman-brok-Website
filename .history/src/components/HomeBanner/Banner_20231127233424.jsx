import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./HomeBanner.css";
import Banner1 from "./../../assets/Home-page/banner1.jpg";
import Banner2 from "./../../assets/Home-page/banner2.jpg";
import Banner3 from "./../../assets/Home-page/bannerq.jpg";
import Banner4 from "./../../assets/Home-page/bannerq.jpg";
import Banner5 from "./../../assets/Home-page/bannerq.jpg";
import whatsapp from "./../../assets/images/whatsapp1.png";
import call from "./../../assets/images/call.png";

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
            <Carousel {...options}>
                <Carousel.Item>
                    <img
                        src={Banner1}
                        text="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text">
                            <a href="https://wa.me/15551234567">
                                <img src={whatsapp} />
                            </a>{" "}
                            <div>
                                <a href="tel:123-456-7890">
                                    <img src={call} />
                                </a>{" "}
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Banner2}
                        text="First slide"
                        className=" w-100"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text">
                            <a href="https://wa.me/15551234567">
                                <img src={whatsapp} />
                            </a>{" "}
                            <div>
                                <a href="tel:123-456-7890">
                                    <img src={call} />
                                </a>{" "}
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        src={Banner1}
                        text="First slide"
                        className="d-block w-100"
                    />
                    <Carousel.Caption>
                        <div className="carousel-text">
                            <a href="https://wa.me/15551234567">
                                <img src={whatsapp} />
                            </a>{" "}
                            <div>
                                <a href="tel:123-456-7890">
                                    <img src={call} />
                                </a>{" "}
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
