import {
  BiMusic,
  BiSun,
  BiJoystick,
  BiCodeCurly,
  BiCodeAlt,
} from "react-icons/bi";
import Menu from "../../components/Menu/Menu"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import ImageHome from "../../assets/sobremim.svg"

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
          Eu me chamo Priscila Karina Santos de Souza, mas pode me chamar de
          Karina. Nasci em 1989 (faz as contas pra descobrir minha idade kkkkk),
          passei maior parte da minha vida em Pernambuco mas moro em Curitiba -
          PR. <br />
          <br />
          Já fiz um pouco de tudo nessa vida. Trabalhei com vendas, recepção
          hospitalar, caixa de farmácia, produção de uma grande empresa de
          alimentos, já tive uma pequena empresa, fiz StringArt (quadros feitos
          em madeira com pregos e linhas) mas, atualmente estudo programação.
          Tenho feito alguns cursos gratuitos e estudado sozinha. <br />
          <br />
          Conheci a {""}
          <a
            href="https://reprograma.com.br/"
            target="_blank" rel="noreferrer"
            className="reprograma"
          >
            {"{reprograma}"}
          </a>{" "}
          {""}
          na minha procura por mais conhecimento. Participei de todo processo
          seletivo e consegui uma vaga na turma On13. Foram 18 semanas de muito
          conteúdo, prática, projetos, choro, alegrias, um misto de emoções. Fiz
          amizades que sei que um dia vamos nos cruzar nesse mundo da
          programação. Sou grata pela oportunidade de poder aprender com
          mulheres incríveis. <br />
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
