import Card from "../../components/Card"
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ImagePortfolio from "../../assets/portfolio.svg"

import "./portfolio.css"

const Portfolio = () => {
    return (
      <>
      <Menu/>
      <Header image={ImagePortfolio}>Projetos no GitHub</Header>
      <Card/>
      <Footer/>
      </>
    );
  };
  
  export default Portfolio;