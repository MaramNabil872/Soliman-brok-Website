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

function App() {
    return (
     <>
     
        <LanguageContextProvider>
           
            <BrowserRouter>
            {/* <Navbar/> */}
                <Routes>
                    <Route>


                    </Route>
          
                  
                </Routes>
            </BrowserRouter>
        </LanguageContextProvider>
        </>
    );
}

export default App;