let retrieveQuestions = () => ([
    {
        question: "Grand Central Terminal, Park Avenue, New York is the world's",
        options: [
            "largest railway station",
            "highest railway station",
            "longest railway station",
            "None of the above"
        ],
        answer: "longest railway station",
    },
    {
        question: "Entomology is the science that studies",
        options: [
            "Behavior of human beings",
            "Insects",
            "The origin and history of technical and scientific terms",
            "The formation of rocks",
        ],
        answer: "Behavior of human beings",
    },
    {
        question: "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of",
        options: [
            "Asia",
            "Africa",
            "Australia",
            "Europe"
        ],
        answer: "Africa",
    },
    {
        question: "Hitler party which came into power in 1933 is known as",
        options: [
            "Labour Party",
            "Nazi Party",
            "lKu-Klux-Klan",
            "Democratic Party"
        ],
        answer: "Nazi Party",
    },
    {
        question: "A family consists of six members P, Q, R, X, Y and Z. Q is the son of R but R is not mother of Q. P and R are a married couple. Y is the brother of R. X is the daughter of P. Z is the brother of P. How many children does P have?",
        options: [
            4,
            3,
            2,
            1,
        ],
        answer: 2,
    },
    {
        question: `Pointing to a man in a photograph, a woman said, "His brother's father is the only son of my grandfather." How is the woman related to the man in the photograph ?`,
        options: [
            "Aunt",
            "Mother",
            "Daughter",
            "Sister"
        ],
        answer: "Sister",
    },
    {
        question: "Which of these was the president of Nigeria on the 28th May 2015",
        options: [
            "Umaru Yar'Adua",
            "Muhammadu Buhari",
            "Olusegun Obasanjo",
            "Goodluck Jonathan"
        ],
        answer: "Goodluck Jonathan",
    },
]);


let shuffle = (arr) => {
    let randomNumber = null;
    for (let i = 0; i < arr.length; i++) {
        randomNumberOne = Math.floor(Math.random() * arr.length);
        randomNumberTwo = Math.floor(Math.random() * arr.length);
        valueOne = arr[randomNumberOne];
        arr[randomNumberOne] = arr[randomNumberTwo];
        arr[randomNumberTwo] = valueOne;
    }

    return arr;
}

let testQuestionArr = [];
let currentQuestion = null;
let optionIsSelected = false;
let correctAnswers = 0;
const initializeQuiz = () => {
    currentQuestion = 0;
    showCurrentQuestion();
}

const showCurrentQuestion = () => {

    if (currentQuestion == testQuestionArr.length) {
        localStorage.setItem('score', correctAnswers);
        localStorage.setItem('total', testQuestionArr.length);
        const anchor =  document.createElement('a');

        location.href = 'register.html';
        // anchor.click();

    }
    const questionsContainer = document.querySelector('#question-container');
    const question = questionsContainer.querySelector('.question');
    const options = questionsContainer.querySelector('#options');

    const questionObj = testQuestionArr[currentQuestion];

    question.textContent = questionObj.question;
    options.innerHTML = '';
    const shuffledOptions = shuffle(questionObj.options);
    console.log(shuffledOptions);
    shuffledOptions.forEach((option) => {

        const div = document.createElement('div');
        div.className = 'option';
        div.dataset.value = option;
        div.addEventListener('click', onOptionSelect);
        div.textContent = option;
        options.appendChild(div);
    });
    const button  = document.querySelector('#proceed-button');
    button.style.visibility = 'hidden';
    optionIsSelected = false;
}

const moveToNextQuestion = () => {
    currentQuestion++;
    showCurrentQuestion();
}

const onOptionSelect = (event) => {
    const userChoice = event.target.dataset.value;
    const correctAns = testQuestionArr[currentQuestion].answer;
    const options = document.querySelector('#options');

    if (optionIsSelected) return;
    if (userChoice == correctAns) {
        event.target.className = 'option user-is-correct-highlight-correct';
        correctAnswers++;
    } else {
        event.target.className = 'option wrong';
        const correctDiv = Array.from(options.children).find((option) => option.dataset.value == correctAns);
        correctDiv.className = 'option user-is-incorrect-highlight-correct';

    }

    const button  = document.querySelector('#proceed-button');
    button.style.visibility = '';
    optionIsSelected = true;



}
window.onload = (event) => {
    let questionsArr = retrieveQuestions();
    console.log(questionsArr.length);
    for (let i = 0; i < 3; i++) {
        const currentIndex = Math.floor(Math.random() * questionsArr.length);
        const question = questionsArr[currentIndex];

        testQuestionArr.push(question);
        questionsArr.splice(currentIndex, 1);

    }

    initializeQuiz();

}




