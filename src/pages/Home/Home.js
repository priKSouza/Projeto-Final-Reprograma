import {
  BiMusic,
  BiSun,
  BiJoystick,
  BiCodeCurly,
  BiCodeAlt,
} from "react-icons/bi";
import Menu from "../../components/Menu/Menu";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import ImageHome from "../../assets/sobremim.svg";

import "./home.css";

const Home = () => {
  return (
    <>
      <Menu />
      <Header image={ImageHome}>Criadora desse projeto</Header>
      <div className="main">
        <div className="main-priscila">
          <h2>Priscila Souza</h2>
          <p>
            <BiSun /> Pernambucana
          </p>
          <p>
            <BiCodeCurly /> Aluna da turma On13 da Reprograma
          </p>
          <p>
            <BiMusic /> Apaixonada por música
          </p>
          <p>
            <BiJoystick /> Amante de jogos
          </p>
          <p>
            <BiCodeAlt /> Pessoa desenvolvedora Front-end
          </p>
        </div>
      </div>
      <div className="historia">
        <p>
          Olá, seja bem vinde ao meu projeto final! <br />
          Me chamo Priscila Karina Santos de Souza, mas pode me chamar de
          Karina. Sou canceriana, torcedora do Sport Clube do Recife, nasci em
          Pernambuco, mas hoje moro em Curitiba - PR. <br />
          <br />
          Já fiz um pouco de tudo nessa vida. Trabalhei com vendas, recepção
          hospitalar, caixa de farmácia, produção de uma grande empresa de
          alimentos, fui empreendedora e aprendi StringArt durante a pandemia
          (quadros feitos em madeira com pregos e linhas). Atualmente estudo
          programação de forma individual e outras vezes com o auxílio de cursos
          gratuitos. <br />
          <br />
          Conheci a {""}
          <a
            href="https://reprograma.com.br/"
            target="_blank"
            rel="noreferrer"
            className="reprograma"
          >
            {"{reprograma}"}
          </a>{" "}
          {""}
          na minha procura por mais conhecimento. Participei do processo
          seletivo pela primeira vez e conquistei uma vaga na turma On13. 
          <br />
          <br />
          Chego ao fim do meu bootcamp e ao início de uma tragetória de sucesso!{" "}
          <br />
          <pre>{"<Vamos reprogramar o mundo?/>"}</pre>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Home;
