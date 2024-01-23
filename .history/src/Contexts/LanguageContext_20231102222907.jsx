import React, { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState("عربي");
    const [selectedLanguage, setSelectedLanguage] = useState("عربي");
    const isEnglish = language === "";

    useEffect(() => {
        console.log("re-rendering");
    }, []);
    return (
        <LanguageContext.Provider
            value={{
                isEnglish,
                setLanguage,
                selectedLanguage,
                setSelectedLanguage,
            }}
        >
            {" "}
            {children}
        </LanguageContext.Provider>
    );
};
export const useLanguageContext = () => {
    return useContext(LanguageContext);
};
export default LanguageContextProvider;
