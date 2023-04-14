import { Box } from "@mui/material";
import React from "react";
import Features from "./features/Features";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import Modules from "./modules/Modules";
import Templates from "./templates/Templates";
const Home = () => {
    return (
        <Box>
            <Header />
            <Main />
            <Features/>
            <Templates/>
            <Modules/>
            <Footer/>
        </Box>
    )
}

export default Home;