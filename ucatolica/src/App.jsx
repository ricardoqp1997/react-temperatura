import React from "react";
import {ThemeProvider} from "@material-ui/core/styles";
import {Button} from "@material-ui/core";
import theme from "./theme";
import Navbar from "./components/Navbar"
import Contenido from "./components/contenido";
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
