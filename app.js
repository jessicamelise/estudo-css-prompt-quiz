let name = prompt("Qual o seu primeiro nome?");
let playOrNot = prompt("Quer participar do nosso Quiz? (Digite o número correspondente abaixo) \n 1. Sim \n 2. Não");
let engOrMath = "";
let firstQuestionMath = "";
let secondQuestionMath = "";
let thirdQuestionMath = "";
let firstQuestionEng = "";
let secondQuestionEng = "";
let thirdQuestionEng = "";
let userName = document.getElementById("greeting");
let correctQuestion = document.getElementById("correct");
let wrongQuestion = document.getElementById("wrong");
let notValidQuestion = document.getElementById("notvalid");


if (playOrNot === "2") {
    alert("Agradecemos a visita!!!");
} else if (playOrNot === "1") {
    chooseQuiz();    
    userName.innerHTML = "Seja bem-vindo(a) " + name.charAt(0).toUpperCase() + name.slice(1) + "!";
} else {
    alert("Você não digitou um caracter válido!");
}

function chooseQuiz() {
    engOrMath = prompt("Qual quiz você quer realizar? (Digite uma opção abaixo) \n 1. Matemática \n 2. Inglês")  
    showQuizChoosen();
}

function showQuizChoosen() {
    if (engOrMath === "1") {
        allMathQuestions();
    } else if (engOrMath === "2") {
        allEngQuestions();
    } else {
        alert("Você não digitou um caracter válido");
    }
}


function allMathQuestions() {
    answerFisrtQuestionMath();
    answerSecondQuestionMath();
    answerThirdQuestionMath();
}

function allEngQuestions() {
    answerFirstQuestionEng();
    answerSecondQuestionEng();
    answerThirdQuestionEng();
}

function answerFisrtQuestionMath() {
    firstQuestionMath = prompt("Quanto é 2 + 2? (Digite a opção correspondente abaixo) \n a. 4 \n b. 22 \n c. 5 \n d. 0");
    if (firstQuestionMath === "a") {
        correctQuestion.innerHTML += "Questão nº 1 <br>";
    } else if (firstQuestionMath === "b" || firstQuestionMath === "c" || firstQuestionMath === "d") {
        wrongQuestion.innerHTML += "Questão nº 1 <br>";
    } else {
        notValidQuestion.innerHTML += "Questão nº 1 <br>";
    }
}

function answerSecondQuestionMath() {
    secondQuestionMath = prompt("Quanto é 25 / 5? (Digite a opção correspondente abaixo) \n a. 30 \n b. 20 \n c. 125 \n d. 5");
    if (secondQuestionMath === "d") {
        correctQuestion.innerHTML += "Questão nº 2 <br>";
    } else if (secondQuestionMath === "a" || secondQuestionMath === "b" || secondQuestionMath === "c") {
        wrongQuestion.innerHTML += "Questão nº 2 <br>";
    } else {
        notValidQuestion.innerHTML += "Questão nº 2 <br>";
    }
}

function answerThirdQuestionMath() {
    thirdQuestionMath = prompt("Qual o resultado de 6 x 7? (Digite a opção correspondente abaixo) \n a. -1 \n b. 13 \n c. 42 \n d. 0.85");
    if (thirdQuestionMath === "c") {
        correctQuestion.innerHTML += "Questão nº 3";
    } else if (thirdQuestionMath === "a" || thirdQuestionMath === "b" || thirdQuestionMath === "d") {
        wrongQuestion.innerHTML += "Questão nº 3";
    } else {
        notValidQuestion.innerHTML += "Questão nº 3";
    }
}

function answerFirstQuestionEng() {
    firstQuestionEng = prompt("O que significa 'Yellow'? (Digite a opção correspondente abaixo) \n a. Vermelho \n b. Amarelo \n c. Verde \n d. Azul");
    if (firstQuestionEng === "b") {
        correctQuestion.innerHTML += "Questão nº 1 <br>";
    } else if (firstQuestionEng === "a" || firstQuestionEng === "c" || firstQuestionEng === "d") {
        wrongQuestion.innerHTML += "Questão nº 1 <br>";
    } else {
        notValidQuestion.innerHTML += "Questão nº 1 <br>";
    }
}

function answerSecondQuestionEng() {
    secondQuestionEng = prompt("Como escreve 'Laranja' em inglês? (Digite a opção correspondente abaixo) \n a. Grape \n b. Apple \n c. Peach \n d. Orange");
    if (secondQuestionEng === "d") {
        correctQuestion.innerHTML += "Questão nº 2 <br>";
    } else if (secondQuestionEng === "a" || secondQuestionEng === "b" || secondQuestionEng === "c") {
        wrongQuestion.innerHTML += "Questão nº 2 <br>";
    } else {
        notValidQuestion.innerHTML += "Questão nº 2 <br>";
    }
}

function answerThirdQuestionEng() {
    thirdQuestionEng = prompt("Quais são as cores primárias em inglês? (Digite a opção correspondente abaixo) \n a. Orange/ Purple/ Green \n b. Blue/ Orange/ Red \n c. Yellow/ Blue/ Red \n d. Orange/ Yellow/ Red");
    if (thirdQuestionEng === "c") {
        correctQuestion.innerHTML += "Questão nº 3 <br>";
    } else if (thirdQuestionEng === "a" || thirdQuestionEng === "b" || thirdQuestionEng === "d") {
        wrongQuestion.innerHTML += "Questão nº 3 <br>";
    } else {
        notValidQuestion.innerHTML += "Questão nº 3 <br>";
    }
}