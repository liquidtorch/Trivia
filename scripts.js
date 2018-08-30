// X - User selects game setup: #of q's, category, difficulty, question style
// X - Reset button set page to defaults
// X - Play button makes Get request
  // Place trivia data into array
  // display first card with # x/10,  question, a,b,c,d multi-choice or T/F
// Answer button shows answer (optional: hi-lites answer among others
// X - Next question button pulls next question from index
  // w/answers

let baseURL = 'https://opentdb.com/api.php?'
const triviaAmount = document.querySelector('#trivia-amount');
const triviaCard = document.querySelector('#trivia-card');
const category = document.querySelector('#topic');
let questionStyle = '';
const multi = document.querySelector('#multi');
const tf = document.querySelector('#TF');
let difficulty = '';
const easy = document.querySelector('#easy');
const medium = document.querySelector('#medium');
const hard = document.querySelector('#hard');
const next = document.querySelector('#nextButton');
const answer = document.querySelector('#answerButton');
const trivia = [];
let count = 1;

let formInputs = document.querySelector('#playButton');
document.querySelector('#playButton').addEventListener('click', () => {
  event.preventDefault();

if(multi.checked === true) {
  questionStyle = 'multiple';
} else {
  questionStyle = 'boolean';
}

if(easy.checked === true) {
  difficulty = 'easy';
} else if(medium.checked === true) {
    difficulty = 'medium';
} else {
  difficulty = 'hard';
}

  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  axios.get(`${baseURL}amount=${triviaAmount.value}&category=${9}&difficulty=${difficulty}&type=${questionStyle}`)
  .then(trivResult => {
    trivia.push(trivResult.data.results)
    console.log(trivia)
    triviaCard.innerHTML = `
    <p>${JSON.stringify(trivResult.data.results[0].question)}</p>
    `
  })
})
// X - event listener on nextButton

next.addEventListener('click', () => {
  console.log(trivia[0][count])
  triviaCard.innerHTML = `
  <p>${trivia[0][count].question}</p>
  `
  count++
})

answer.addEventListener('click', () => {
  console.log(trivia[0][count[0]])
  triviaCard.innerHTML = `
  <p>${trivia[0][count].correct_answer}</p>
  `
})


// trivia[0][count].question create variable

// Fisher-Yates shuffle:

function shuffle(baseTrivia) {
  let baseTrivia = [trivia[0][count]]
  var m = baseTrivia.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = baseTrivia[m];
    baseTrivia[m] = baseTrivia[i];
    baseTrivia[i] = t;
  }

  return baseTrivia;
  console.log(baseTrivia);
}
// create array that randomizes ALL answers
// addEventListener on answerButton that logs correct answer

// let category = '';
// const nine = document.querySelector('#nine');
// const ten = document.querySelector('#ten');
// const eleven = document.querySelector('#eleven');
// const twelve = document.querySelector('#twelve');
// const seventeen = document.querySelector('#seventeen');
// const twentyOne = document.querySelector('#twentyOne');
// const twentyTwo = document.querySelector('#twentyTwo');
// const twentyThree = document.querySelector('#twentyThree');
// const twentyFive = document.querySelector('#twentyFive');
// const twentySeven = document.querySelector('#twentySeven');

// if(nine.selected === true) {
//   category = 'nine';
// } else if(ten.selected === true) {
//     category = 'ten';
// } else if(eleven.selected === true) {
//     category = 'eleven';
// } else if(twelve.selected === true) {
//     category = 'twelve';
// } else if(seventeen.selected === true) {
//     category = 'seventeen';
// } else if(twentyOne.selected === true) {
//     category = 'twentyOne';
// } else if(twentyTwo.selected === true) {
//     category = 'twentyTwo';
// } else if(twentyThree.selected === true) {
//     category = 'twentyThree';
// } else if(twentyFive.selected === true) {
//     category = 'twentyFive';
// } else {
//   category = 'twentySeven';
// }

// .
