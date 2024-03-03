import React from "react";
import Header from "./components/header/Header";
import ScrollToTop from "./components/ScrollToTop";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Header />
          <ScrollToTop />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
};

export default App;
