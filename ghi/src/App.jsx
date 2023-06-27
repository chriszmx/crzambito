import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Main from "./components/Main";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <div>
            <Sidenav />
            <Main />
            <AboutMe />
            <Work />
            <Education />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
