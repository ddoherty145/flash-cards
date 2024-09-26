console.log('Script is loaded');

import data from './data.js';

console.log(data.title);
console.log(data.description);
console.log(data.questions);

const titleH1 = document.querySelector('#title')
const descriptionP = document.querySelector('#description')
const scoreP = document.querySelector('#score')
const questionContainer = document.querySelector('#flip-card')

const qCardP = document.querySelector('#q-card > p')
const aCardP = document.querySelector('#a-card > p')

let questionIndex = -1

const showNextQuestion = () => {
    questionIndex += 1
    questionIndex = questionIndex % (data.questions.length);
    qCardP.innerHTML = data.questions[questionIndex].q
    aCardP.innerHTML = data.questions[questionIndex].a

    scoreP.innerHTML = `Score ${questionIndex + 1}/${data.questions.length}`
}

showNextQuestion()

titleH1.innerHTML = data.title
descriptionP.innerHTML = data.description

document.body.addEventListener('click', e => {
    console.log(e)
    if (e.target.matches('#answer-button')){
        questionContainer.classList.add('flip')
    } else if (e.target.matches('#question-button')){
        questionContainer.classList.remove('flip')
    } else if (e.target.matches('#next-button')){
        questionContainer.classList.remove('flip')
        showNextQuestion()
    }
} )

console.log(titleH1)