import React, { useState } from "react";
import langContext from "./langContext";

interface langProviderProps {
    children: React.ReactNode;
}

const LangProvider = ({children} : langProviderProps) => {
    const [lang, setLang] = useState("pt-BR");

    return (
      <langContext.Provider value={{ lang, setLang }}>
        {children}
      </langContext.Provider>
    );
}

export default LangProvider;