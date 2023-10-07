import { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";

import { ThemeProvider } from "@mui/material/styles";

import Router from "./routes/index";

import { currentTheme } from "./services/actions/themeSlice";
import { lightTheme, darkTheme } from "./utils/theme";

const App = () => {
  const theme = useSelector(currentTheme);
  const language = useSelector((state) => state.languageSlice.currentLang);

  useEffect(() => {
    document.documentElement.dir =
      language === "ar" ? "rtl" : "ltr";
    document.body.style.backgroundColor =
      theme === "light"
        ? lightTheme.palette.background.default
        : darkTheme.palette.background.default;
  }, [theme]);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
