import HomeBar from "../components/homeBar";
import AboutPage from "./about";
import ConnectPage from "./connect";
import HomePage from "./home";
import PortfolioPage from "./portfolio";

const IndexPage = () => {
  //sage green, tinted sage green, even more tinted sage green, red bean, lighter red
  const theme = ["#667b68", "#87A48A", "#b8c4bb", "#663f46", "#fceee9"];

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
