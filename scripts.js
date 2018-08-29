// x - User selects game setup: #of q's, category, difficulty, question style
// x - Reset button set page to defaults
// Play button makes Get request and sets up trivia cards
  // Place trivia data into array. display first cards
// Answer button hilites answer
// Next question button pulls next question from index

let baseURL = 'https://opentdb.com/api.php?'


let formInputs = document.querySelector('#playButton');

document.querySelector('#playButton').addEventListener('click', () => {
  const triviaAmount = document.querySelector('#trivia-amount');
  const category = document.querySelector('#topic');
  let difficulty = '';
  let questionStyle = '';
  const triviaCard = document.querySelector('#trivia-card');
  const multi = document.querySelector('#multi');
  const tf = document.querySelector('#TF');
  const easy = document.querySelector('#easy');
  const medium = document.querySelector('#medium');
  const hard = document.querySelector('#hard');
  event.preventDefault();

if(easy.checked === true) {
  difficulty = 'easy';
} else if(medium.checked === true) {
    difficulty = 'medium';
} else {
  difficulty = 'hard';
}

  if(multi.checked === true) {
    questionStyle = 'multiple';
  } else {
    questionStyle = 'boolean';
  }
  //https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple

  console.log(tf.checked)

  axios.get(`${baseURL}amount=${triviaAmount.value}&category=${9}&difficulty=${difficulty}&type=${questionStyle}`)
  .then(trivResult => {
    console.log(trivResult)
    triviaCard.innerHTML = `
    <code>${JSON.stringify(trivResult.data.results)}</code>
    `
  })
})

// let rawTrivia = triviaCard.data
//
// function createCard() {
//   let card = [];
//   for(let i = 0; i < rawTrivia.length; i++) {
//     console.log(rawTrivia);
//     card.push(rawTrivia);
//   }
//   return card;
// }
// console.log(createCard);
