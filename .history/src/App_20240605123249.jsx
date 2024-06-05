import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutusPage from "./pages/AboutusPage";
import ContactusPage from "./pages/ContactusPage";
import "./App.css";
import ProductPage from "./pages/ProductPage";
import BlogPage from "./pages/BlogPage";
import WSBpage from "./pages/WSBpage";
import LanguageContextProvider from "./Contexts/LanguageContext";
import Post from "./pages/Post";
import Navbar from "./components/Navbar/Navbar";
import "./components/i18n.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Mainlayout from "./components/Mainlayout";
import MedicalPage from "./pages/MedicalPage.jsx";
import CarPage from "./pages/CarPage.jsx";
console.log('App component is rendering');
function App() {
    return (
        <>
            <LanguageContextProvider>
                <BrowserRouter>
                    {/* <Navbar/> */}
                    <Routes>
                        <Route path="/" element={<Mainlayout/>}>
                            <Route path="/"  element={<HomePage />}></Route>
                            <Route
                                path="/about-us"
                                element={<AboutusPage />}
                            ></Route>
                            <Route
                                path="/contact-us"
                                element={<ContactusPage />}
                            ></Route>
                            <Route
                                path="/products"
                                element={<ProductPage />}
                            ></Route>
                             <Route
                                path="/medical"
                                element={<MedicalPage />}
                            ></Route>
                            <Route path="/blog" element={<BlogPage />}></Route>
                            <Route path="/car" element={<CarPage />}></Route>
                            <Route
                                path="/why-soliman-brok"
                                element={<WSBpage />}
                            ></Route>
                            <Route path="/Post/:id" element={<Post />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </LanguageContextProvider>
        </>
    );
}

export default App;
