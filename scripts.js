// X - User selects game setup: #of q's, category, difficulty, question style
// X - Reset button set page to defaults
// X - Play button makes Get request and display first question/answers in console
  // (Optional): question category, #countdown, a,b,c,d multi-choice or T/F
  // X - Place trivia data into array
  // answerButton and nextButton only appear after start
    // X - Toggle answerButton & nextButton
      // X - Answer button shows correct_answer (Optional: hi-lites answer among others)
    // X - nextButton shows next question w/possible answers
// Create Game Over card after last question


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
let hide = document.getElementById("hiddenButton");
const over = document.createElement('over');

let trivia = [];
let count = 0;

function showButton() {

}

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

  if (hide.id === "hiddenButton") {
    hide.id = " ";
  }

  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  axios.get(`${baseURL}amount=${triviaAmount.value}&category=${category.value}&difficulty=${difficulty}&type=${questionStyle}`)
  .then(trivResult => {
    trivia = trivResult.data.results
    populateQuestion()
  })
})
// X - event listener on nextButton & answerButton
// X - Toggle answerButton & nextButton

next.addEventListener('click', () => {
  answer.style.display = 'inline';
  next.style.display = 'none'
  // $("#answerButton").show()
  // $("#nextButton").hide()
  // if last answer displayed then log game over
  if (trivia.length <= count) {
    console.log("GAME OVER");
    gameOver();
  } else {
    console.log(trivia[count])
    populateQuestion()
  }
})

answer.addEventListener('click', () => {
  next.style.display = 'inline'
  answer.style.display = 'none';
  // $("#nextButton").show()
  // $("#answerButton").hide()
  console.log(trivia[count])
  triviaCard.innerHTML = `
  <p>${trivia[count].correct_answer}</p>
  `
  count++
})
function gameOver(){
  // place 'GAME OVER' text into innerHTML
  triviaCard.innerHTML = `<p style="color:lime; text-align: center; font-size: 4em; display:block;">GAME OVER<br></p>
  <p style="color:lime; text-align: center; display:block;">Click Reset to play again</p>`
  // disappear nextButton
  $("#answerButton").hide()

}

function populateQuestion(){
  let possibleAnswers = shuffle()
  console.log(trivia)
  triviaCard.innerHTML = `
  <p>${trivia[count].question}</p>
  `
  for (let i = 0; i < possibleAnswers.length; i++){
    triviaCard.innerHTML += `<p>${possibleAnswers[i]}</p>`
  }
}

// trivia[count].question create variable

document.getElementById("playButton").addEventListener("click", () => {
    let hidden = document.getElementsByClassName("hidden");
    for( let i =0 ; i < hidden.length ; i++){
        hidden[i];
    }
})

// Fisher-Yates shuffle:

function shuffle() {
  let baseTrivia = [...trivia[count].incorrect_answers,trivia[count].correct_answer]
  var m = baseTrivia.length, t, i;

  // While there remain elements to shuffle…
  // if (count < triviaAmount.value){
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = baseTrivia[m];
    baseTrivia[m] = baseTrivia[i];
    baseTrivia[i] = t;
  }
  console.log(baseTrivia);
  return baseTrivia;
} // } else (triviaCard.innerHTML = `<p style="color=red">GAME OVER<br>Click Reset to play again</p>`)
// }
