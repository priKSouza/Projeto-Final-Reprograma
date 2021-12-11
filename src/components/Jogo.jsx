import MyQuestions from "../../data/database";

const Jogo = () => {
  return (
    <>
      <div style="display: none;" id="quiz"></div>

      <div class="botao">
        <button id="submit">Quantas será que vou acertar?</button>
      </div>
      <div id="results"></div>
    </>
  );
};

export default Jogo;
