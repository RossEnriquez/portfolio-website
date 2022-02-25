import { motion } from "framer-motion";
import HomeBar from "../components/homeBar";
import AboutPage from "../components/about";
import ConnectPage from "../components/connect";
import HomePage from "../components/home";
import PortfolioPage from "../components/portfolio";

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
      <HomeBar theme={theme} />
      <Element name="home">
        <HomePage theme={theme} />
      </Element>
      <Element name="about">
        <AboutPage theme={theme} />
      </Element>
      <Element name="portfolio">
        <PortfolioPage theme={theme} />
      </Element>
      <Element name="connect">
        <ConnectPage theme={theme} />
      </Element>
    </>
  );
};

export default IndexPage;
