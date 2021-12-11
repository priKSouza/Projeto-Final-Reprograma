import MyQuestions from "../../src/data/database";

const Jogo = () => {
  return (
    <>
      {MyQuestions.map(MyQuestions =>
        <div key={MyQuestions.id}>
          <h3>{MyQuestions.question}</h3>
          {/* <input type="radio"> {MyQuestions.answers}</input> */}
        </div>
        )}
    </>
  );
};
export default Jogo;
