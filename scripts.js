let baseURL = 'https://opentdb.com/api.php?'


let formInputs = document.querySelector('#playButton');
document.querySelector('form').addEventListener('submit', () => {
  const triviaAmount = document.querySelector('#trivia-amount');
  const category = document.querySelector('#topic');
  const difficulty = document.querySelector('#difficulty');
  const questionStyle = document.querySelector('#multi-boolean');
  const triviaCard = document.querySelector('#trivia-card');
  event.preventDefault();

  axios.get(`${baseURL}amount=${triviaAmount.value}&category=${category.value}&difficulty=${difficulty.value}&type=${questionStyle.value}`)
  .then(trivResult => {
    triviaCard.innerHTML = `
    <code>${JSON.stringify(triviaCard.data)}</code>
    `
  })
})
