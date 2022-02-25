import HomeBar from "../components/homeBar";
import AboutPage from "../components/about";
import ConnectPage from "../components/connect";
import HomePage from "../components/home";
import PortfolioPage from "../components/portfolio";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { pdfjs } from "react-pdf";
import { Element } from "react-scroll";
import { useColorModeValue } from "@chakra-ui/react";
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const IndexPage = () => {
  const boldColor = useColorModeValue("#663f46", "#db8494");
  const barColor = useColorModeValue("#b8c4bb", "#8da693");
  //sage green, tinted sage green, even more tinted sage green, red bean, lighter red
  const theme = ["#667b68", "#87A48A", barColor, boldColor, "#fceee9"];
  const fontSizes = {
    heading: [72],
    subheading: [52, 52, 62],
    body: [24, 24, 32],
    title: [22, 22, 22],
    description: [16, 16, 18],
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <>
      <HomeBar theme={theme} />
      <Element name="home">
        <HomePage theme={theme} fontSizes={fontSizes} />
      </Element>
      <Element name="about">
        <AboutPage theme={theme} fontSizes={fontSizes} />
      </Element>
      <Element name="portfolio">
        <PortfolioPage theme={theme} fontSizes={fontSizes} />
      </Element>
      <Element name="connect">
        <ConnectPage theme={theme} fontSizes={fontSizes} />
      </Element>
    </>
  );
};

export default IndexPage;
