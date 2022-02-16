import { motion } from "framer-motion";
import HomeBar from "../components/homeBar";
import AboutPage from "./about";
import ConnectPage from "./connect";
import HomePage from "./home";
import PortfolioPage from "./portfolio";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import { Document, Page, pdfjs } from "react-pdf";
import { Link, Button, Element } from "react-scroll";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const IndexPage = () => {
  //sage green, tinted sage green, even more tinted sage green, red bean, lighter red
  const theme = ["#667b68", "#87A48A", "#b8c4bb", "#663f46", "#fceee9"];
  const breakpoints = createBreakpoints({
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  });

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <HomeBar theme={theme} breakpoints={breakpoints} />
      <Element name="home">
        <HomePage theme={theme} breakpoints={breakpoints} />
      </Element>
      <Element name="about">
        <AboutPage theme={theme} breakpoints={breakpoints} />
      </Element>
      <Element name="portfolio">
        <PortfolioPage theme={theme} breakpoints={breakpoints} />
      </Element>
      <Element name="connect">
        <ConnectPage theme={theme} breakpoints={breakpoints} />
      </Element>
    </>
  );
};

export default IndexPage;
