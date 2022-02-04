import { createContext, useState } from "react";

const Context = createContext<InitialState>({
  lang: "es",
  toggleLang: () => 0,
  themed: false,
  toggleThemed: () => 0,
});

const ContextProvider = ({ children }) => {
  const [lang, setLang] = useState<Lang>("es");
  const [themed, setTheme] = useState(false);

  const toggleLang = () => {
    if (lang === "es") setLang("en");
    if (lang === "en") setLang("es");
  };

  const toggleThemed = () => {
    setTheme(!themed);
  };

  return (
    <Context.Provider
      value={{
        lang,
        toggleLang,
        themed,
        toggleThemed,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
