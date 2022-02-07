import { motion } from "framer-motion";
import HomeBar from "../components/homeBar";
import AboutPage from "./about";
import ConnectPage from "./connect";
import HomePage from "./home";
import PortfolioPage from "./portfolio";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const IndexPage = () => {
  //sage green, tinted sage green, even more tinted sage green, red bean, lighter red
  const theme = ["#667b68", "#87A48A", "#b8c4bb", "#663f46", "#fceee9"];
  const viewer = useRef(null);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <HomeBar theme={theme} />
      <HomePage theme={theme} />
      <AboutPage theme={theme} />
      <PortfolioPage theme={theme} />
      <ConnectPage theme={theme} />
    </>
  );
};

export default IndexPage;
