const questions = [
  {

    questionstext: "Qual a tag que insere uma quebra de linha no seu HTML?",
    answersOptions: [
      {answersText: "< br >", isCorrect:true},
      {answersText: "< span >", isCorrect:false},
      {answersText: "< b >", isCorrect:false},
      {answersText: "< p >", isCorrect:false}
    ],
  },
  {

    questionstext: "Qual a tag que insere uma imagem no seu HTML?",
    answersOptions: [
      {answersText: "< h1 >", isCorrect:false},
      {answersText: "< img >", isCorrect:true},
      {answersText: "< a href >", isCorrect:false},
      {answersText: "< html >", isCorrect:false}
    ],
  },
  {

    questionstext: "Qual a tag me permite criar uma lista não ordenada no HTML ?",
      answersOptions: [
      {answersText: "< ol >", isCorrect:false},
      {answersText: "< div >", isCorrect:false},
      {answersText: "< ul >", isCorrect:true},
      {answersText: "< li >", isCorrect:false}
      ],
  },
  {

    questionstext: "Para deixar a cor de um texto amarelo qual propriedade e valor devo usar no CSS?",
      answersOptions: [
      {answersText: "background-color:yellow;", isCorrect:false},
      {answersText: "color:yellow;", isCorrect:true},
      {answersText: "background:url();", isCorrect:false},
      {answersText: "color:#FFF;", isCorrect:false}
      ],
  },
  {

    questionstext: "Qual propriedade e valor devo usar para deixar meu texto alinhado à direita no CSS?",
      answersOptions: [
      {answersText: "text-align: center;", isCorrect:false},
      {answersText: "align-items: end;", isCorrect:false},
      {answersText: "text-align: right;", isCorrect:true},
      {answersText: "justify-content: space-around;", isCorrect:false}
      ],
  },
  {

    questionstext: "Qual propriedade e valor deixa a fonte MAIÚSCULA no CSS?",
    answersOptions: [
      {answersText: "text-transform: uppercase;", isCorrect:true},
      {answersText: "font-weight: bold;", isCorrect:false},
      {answersText: "font-family: Nunito;", isCorrect:false},
      {answersText: "background-size: cover;", isCorrect:false}
    ],
  },
  {

    questionstext: "Qual função é utilizada para testar o código no navegador?",
    answersOptions: [
      {answersText: "console.log()", isCorrect:true},
      {answersText: "const", isCorrect:false},
      {answersText: "function", isCorrect:false},
      {answersText: "alert('testando código')", isCorrect:false}
    ],
  },
  {

    questionstext: "-------Observe o array:------- const fruits = ['Apple', 'Banana', 'Pear']       console.log(fruits[1])    Qual fruta ele retornará?",
      answersOptions: [
      {answersText: "Apple", isCorrect:false},
      {answersText: "Nenhuma das Alternativas", isCorrect:false},
      {answersText: "Banana", isCorrect:true},
      {answersText: "Pear", isCorrect:false}
      ],
  },
  {

    questionstext: "-------Observe o código:------- < input type=text id=textInput class=text-input />.  Como retornar o elemento utilizando o getElementById()?",
      answersOptions: [
      {answersText: "getElementById('text')", isCorrect:false},
      {answersText: "getElementById('text-input')", isCorrect:false},
      {answersText: "getElementById('input')", isCorrect:false},
      {answersText: "getElementById('textInput')", isCorrect:true}
      ],
  },
  {

    questionstext: "Qual comando para criar um novo projeto em React?",
    answersOptions: [
      {answersText: "yarn start", isCorrect:false},
      {answersText: "yarn create react-app", isCorrect:true},
      {answersText: "Happy hacking!", isCorrect:false},
      {answersText: "yarn -v", isCorrect:false}
    ],
  }
];

export default questions;
