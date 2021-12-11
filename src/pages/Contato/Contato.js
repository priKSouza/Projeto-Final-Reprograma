import { BsGithub, BsLinkedin, BsInstagram, BsBehance } from "react-icons/bs";
import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import ImageContato from "../../assets/contato.svg";
import Footer from "../../components/Footer/Footer";

import "./contato.css";

const Contato = () => {
  return (
    <>
      <Menu />
      <Header image={ImageContato}>Vamos nos conectar!</Header>
      <div className="redes">
        <p className="siga">Me segue nas redes sociais</p>
        <p className="email">priscilakarinajump@gmail.com</p>
        <div>
          <a
            className="click"
            href="https://github.com/priKSouza"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub size={30} color="#FFC300" />
          </a>

          <a
            className="click"
            href="https://www.linkedin.com/in/priscila-santos-souza/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin size={30} color="#FFC300" />
          </a>

          <a
            className="click"
            href="https://www.instagram.com/pri_kariina/"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram size={30} color="#FFC300" />
          </a>

          <a
            className="click"
            href="https://www.behance.net/priSouza"
            target="_blank"
            rel="noreferrer"
          >
            <BsBehance size={30} color="#FFC300" />
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contato;
