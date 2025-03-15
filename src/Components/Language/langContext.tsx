import React from "react";

interface LangContextType {
    lang: string;
    setLang: (novoLang: string) => void;
}

const langContext = React.createContext<LangContextType>({
    lang: "pt-BR",
    setLang: () => {}, 
  });

export default langContext