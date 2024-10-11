//User interface

function UI() {
  this.quizBox = document.querySelector('#quiz-box')
  this.btnBox = document.querySelector('#button-box');
  this.scoreBox = document.querySelector('#score-box');
  this.body = document.querySelector('#quiz-box #body')
  this.correct = '<i class="bi bi-check-circle"></i>'
  this.inCorrect = '<i class="bi bi-x-circle"></i>'
  this.btnStart = document.querySelector('.btn-start');
  this.btnNext = document.querySelector('.btn-next');
  this.btnReplay = document.querySelector('.btn-replay')
  this.btnQuit = document.querySelector('.btn-quit')
}

UI.prototype.displayQuestion = function(question) {
  this.body.innerHTML = ""; // Bir sonraki soruya gecmeden div.body bosalt!

  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  const title = document.createElement('h5');
  title.classList.add('question-title');
  title.textContent = question.questionText;

  const optionList = document.createElement('div');
  optionList.classList.add('option-list')

  for(let [key,value] of Object.entries(question.answerOptions)){
    const option = document.createElement('div')
    option.classList.add('option');
    option.addEventListener('click', optionSelected);

    const span = document.createElement('span');
    span.textContent = key + ") " + value

    option.appendChild(span);
    optionList.appendChild(option);
  }
  cardBody.appendChild(title)
  cardBody.appendChild(optionList)

  this.body.appendChild(cardBody);
}

UI.prototype.disableAllOption = function() {
  const options = document.querySelectorAll('.option')
  for(let option of options) {
    option.classList.add('disabled')
  }
}

UI.prototype.questionNumberDisplay = function(questionOrder, totalQuestion) {
  const etiket = `<span class="badge text-bg-danger">${questionOrder} / ${totalQuestion}</span>`
  document.querySelector('.question-index').innerHTML = etiket;
}

UI.prototype.scoreDisplay = function(correctAnswerOrder, totalQuestion) {
  const correctText = `<span class="score-text">Congratulations, you got ${correctAnswerOrder} correct answers in ${totalQuestion} questions.</span> `
  document.querySelector('.score-text').innerHTML = correctText;
}