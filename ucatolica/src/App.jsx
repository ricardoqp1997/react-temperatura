import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme";
import Navbar from "./components/Navbar"
import ScrollableTabsButtonAuto from "./components/tabs";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar/>
            <ScrollableTabsButtonAuto />
        </ThemeProvider>

    );
}

export default App;
