import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";

function App() {
    return (
        <>
            <Sidenav />
            <Main />
            <Work />
            <Education />
            <Projects />
            <Contact />
        </>
    );
}

export default App;
