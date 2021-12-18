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
          Elaborei esse Quiz utilizando um pouco dos conhecimentos adquiridos ao
          longo das 18 semanas de curso na Reprograma. Foram semanas intensas de
          muito aprendizado, dias de alegrias, alguns momentos de choro e muitas
          experiências compartilhadas. Fiz amizades que sei que vou levar para
          vida e tenho certeza que um dia vamos nos cruzar nesse mundo acelerado da
          programação. Sou grata pela oportunidade de poder aprender com
          mulheres incríveis, minhas professoras, monitoras e toda equipe
          extraordinária da {"{Reprograma}"}.
          <br />
          <br /> Esse projeto foi desenvolvido com intuito de auxiliar meninas
          que estão começando os estudos na área de programação, com foco em
          desenvolvimento front-end. O Quiz contém 3 perguntinhas sobre as
          seguintes linguagens: HTML 5, CSS 3, JavaScript e React. Mas fique
          tranquila, as perguntas são bem fáceis e vão servir para te ajudar a
          fixar comandos básicos.
          <br />
          <br />
          Vamos brincar um pouco?
        </p>
      </div>
      <h1 className="titulo-quiz">Quiz de programação </h1>
      <Jogo />
      <Footer />
    </>
  );
};

export default Quiz;
