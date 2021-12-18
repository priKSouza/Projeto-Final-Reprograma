import questions from "../data/database";
import { useState } from "react";
import { GiPartyPopper } from 'react-icons/gi'

import "../pages/Quiz/quiz.css";

function Jogo() {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function handle(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <section className="app-quiz">
      <div className="app">
        {showScore ? (
          <div className="score">
            Você pontuou {score} de {questions.length}! {" "} <GiPartyPopper />
          </div>
        ) : (
          <>
            <div className="question">
              <div className="contador-pergunta">
                <span>Questão {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="perguntas">
                {questions[currentQuestion].questionstext}
              </div>
            </div>
            <div className="resposta">
              {questions[currentQuestion].answersOptions.map(
                (answersOptions, index) => (
                  <button
                    onClick={() => handle(answersOptions.isCorrect)}
                    key={index}
                  >
                    {answersOptions.answersText}
                  </button>
                )
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Jogo;
