const MyQuestions = [
    {
      id:1,
      question: "Qual a tag que insere uma quebra de linha no seu HTML?",
      answers: {
        a: "< br >",
        b: "< span >",
        c: "< b >",
        d: "< p >",
      },
      correctAnswer: "a",
    },
    {
      id:2,
      question: "Qual a tag que insere uma imagem no seu HTML?",
      answers: {
        a: "< h1 >",
        b: "< img >",
        c: "< a href >",
        d: "< html >",
      },
      correctAnswer: "b",
    },
    {
      id:3,
      question: "Qual a tag me permite criar uma lista não ordenada no HTML ?",
      answers: {
        a: "< ol >",
        b: "< div >",
        c: "< ul >",
        d: "< li >",
      },
      correctAnswer: "c",
    },
    {
      id:4,
      question: "Para deixar a cor de um texto amarelo qual propriedade e valor devo usar no CSS?",
      answers: {
        a: "background-color:yellow;",
        b: "color:yellow;",
        c: "background:url();",
        d: "color:#FFF;",
      },
      correctAnswer: "b",
    },
    {
      id:5,
      question: "Qual propriedade e valor devo usar para deixar meu texto alinhado à direita no CSS?",
      answers: {
        a: "text-align: center;",
        b: "align-items: end;",
        c: "text-align: right;",
        d: "justify-content: space-around;",
      },
      correctAnswer: "c",
    },
    {
      id:6,
      question: "Qual propriedade e valor deixa a fonte MAIÚSCULA no CSS?",
      answers: {
        a: "text-transform: uppercase;",
        b: "font-weight: bold;",
        c: "font-family: Nunito;",
        d: "background-size: cover;",
      },
      correctAnswer: "a",
    },
    {
      id:7,
      question: "Qual função é utilizada para testar o código no navegador?",
      answers: {
        a: "console.log()",
        b: "const",
        c: "function",
        d: "alert('testando código')",
      },
      correctAnswer: "a",
    },
    {
      id:8,
      question: "Observe o array: <br><br>const fruits = ['Apple', 'Banana', 'Pear']<br>console.log(fruits[1]) <br><br>Qual fruta ele retornará?",
      answers: {
        a: "Apple",
        b: "Nenhuma das Alternativas",
        c: "Banana",
        d: "Pear",
      },
      correctAnswer: "c",
    },
    {
      id:9,
      question: "Observe o código HTML: <br><br> < input type=text id=textInput class=text-input /> <br><br>Como retornar o elemento utilizando o getElementById()?",
      answers: {
        a: "getElementById('text')",
        b: "getElementById('text-input')",
        c: "getElementById('input')",
        d: "getElementById('textInput')",
      },
      correctAnswer: "d",
    },
    {
      id:10,
      question: "Qual comando para criar um novo projeto em React?",
      answers: {
        a: "yarn start",
        b: "yarn create react-app",
        c: "Happy hacking!",
        d: "yarn -v",
      },
      correctAnswer: "b",
    },
  ];

  export default MyQuestions