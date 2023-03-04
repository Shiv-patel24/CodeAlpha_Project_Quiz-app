const quizQ = [
    {
        question: "Q1:What does HTML stand for",
        a: "Hyper Text Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Home Tool Markup Language",
        d: "none",
        ans: "ans1"
    },
    {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        a: "Head, Title, HTML, body",
        b: "HTML, Body, Title, Head",
        c: "HTML, Head, Title, Body",
        d: "HTML, Head, Title, Body",
        ans: "ans4"
    },{
        question: " Which of the following is the container for <tr>, <th>, and <td> ?",
        a: "<data>",
        b: "<table>",
        c: "<group>",
        d: "<All of the above",
        ans: "ans2"
    },{
        question: "Which of the following attribute is used to provide a unique name to an element?",
        a: "class",
        b: "id",
        c: "type",
        d: "none",
        ans: "ans2"
    },{
        question: "CSS stands for",
        a: "Cascade style sheets",
        b: "Color and style sheets",
        c: "Cascading style sheets",
        d: "none of the above",
        ans: "ans1"
    },{
        question: "Which of the following CSS property specifies the origin of the background-image?",
        a: "background-origin",
        b: "background-attachment",
        c: "background-size",
        d: "None of the above",
        ans: "ans2"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');
let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizQ[questionCount];

    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};

const unselect = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizQ[questionCount].ans){
        score++;
    };
    questionCount++;

    unselect();

    if(questionCount < quizQ.length){
        loadQuestion();
    }else{
        showScore.innerHTML =`
        <h3> Your scored ${score}/${quizQ.length} Done </h3>
        <button class="btn" onClick="location.reload()">Try again</button>
        `;

        // showScore.classList.remove('ScoreArea');
        showScore.classList.remove('ScoreArea');
    }
});
