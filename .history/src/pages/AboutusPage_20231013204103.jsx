import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutPage from "../components/AboutPage/AboutPage";
import Partnership from "../components/Partnership/Partnership";
import Footer from "../components/Footer/Footer";
import Clients from "../components/Clients/Clients";
import Reviews from "../components/Reviews/Reviews";

const AboutusPage = () => {
    return (
        <div>
      
            <AboutPage />
            <Partnership />
            <Reviews/>
            <Footer />
        </div>
    );
};

export default AboutusPage;
