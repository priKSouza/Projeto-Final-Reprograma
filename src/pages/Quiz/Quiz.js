import Menu from "../../components/Menu/Menu";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ImageQuiz from "../../assets/quiz.svg";
import Jogo from "../../components/Jogo";

import "../Quiz/quiz.css";

const Quiz = () => {
  return (
    <>
      <Menu />
      <Header image={ImageQuiz} />
      <div className="sessao-quiz">
        <p className="texto-quiz">
          Desenvolvi um Quiz utilizando alguns conhecimentos adquiridos durante
          as 18 semanas de aula na Reprograma. Foram longas semanas de
          aprendizado, choro, alegrias e muito conhecimento compartilhado.
          <br /> Esse projeto foi desenvolvido com intuito de auxiliar meninas
          que estão começando os estudos em programação a fixar comandos
          básicos. Mas calma, as perguntas são bem fáceis. O Quiz contém 3
          perguntinhas sobre cada lingaguem: HTML 5, CSS 3, JavaScript e React.{" "}
          <br />
          Vamos brincar um pouco?
        </p>
      </div>
      <h1 className="titulo-quiz">Quiz de programação</h1>
      <Jogo />
      <Footer />
    </>
  );
};

export default Quiz;
