const questionsList = [
  new Question('1-Which is a Javascript package management application?' , {a: 'Node.js', b:'Typescript', c:'Nuget', d:'Npn'}, "d"),
  new Question('2-Which is not considered a front end?' , {a: 'CSS', b:'HTML', c:'Javascript', d:'SQL'}, "d"),
  new Question('3-Which is not considered a backend?' , {a: 'Node.js', b:'Typescript', c:'Angular', d:'React'}, "a"),
  new Question('4-Which one does not use the Javascript programming language?' , {a: 'React', b:'Angular', c:'VueJs', d:'Asp.net'}, "d"),
];

const quiz = new Quiz(questionsList);
const ui = new UI();

ui.btnStart.addEventListener('click', function(){
  startTimer(10)
  startTimeLine()
  ui.quizBox.classList.add('active');
  ui.btnBox.classList.remove('active');
  //Sorulari goster
  ui.displayQuestion(quiz.questionBring())
  ui.questionNumberDisplay(quiz.questionsIndex + 1, quiz.questions.length)
  ui.btnNext.classList.remove('show')
})

ui.btnNext.addEventListener('click', function() {
  startTimer(10)
  startTimeLine()
  if(quiz.questions.length != quiz.questionsIndex){
    ui.displayQuestion(quiz.questionBring())
    ui.questionNumberDisplay(quiz.questionsIndex + 1, quiz.questions.length)
    ui.btnNext.classList.remove('show')
    //yeni soru da 'Time expired!' yazisini degistir
    ui.timeText.textContent = "Remaining time"
  } else {
    ui.scoreBox.classList.add('active')
    ui.quizBox.classList.remove('active')
    ui.scoreDisplay(quiz.correctQuestionOrder, quiz.questions.length)
  }
})

function optionSelected(e){
  //Bir secenek secildiginde sureyi durdur
  clearInterval(counter);
  clearInterval(counterLine)
  let selectedElement = e.target
  if(selectedElement.nodeName == "SPAN"){
    selectedElement = selectedElement.parentElement
  }

  const answer = e.target.textContent[0]
  const question = quiz.questionBring()
  if(question.answerControl(answer)) {
    quiz.correctQuestionOrder += 1;
    selectedElement.classList.add('correct');
    selectedElement.insertAdjacentHTML('beforeend', ui.correct)
  } else {
    selectedElement.classList.add('inCorrect');
    selectedElement.insertAdjacentHTML('beforeend', ui.inCorrect)
  }
  quiz.questionsIndex += 1;
  ui.disableAllOption();
  ui.btnNext.classList.add('show')
}

ui.btnQuit.addEventListener('click', function(){
  window.location.reload();
})

ui.btnReplay.addEventListener('click', function(){
  quiz.questionsIndex = 0;
  quiz.correctQuestionOrder = 0;
  //Start button
  ui.btnStart.click();
  ui.scoreBox.classList.remove('active')
})

//Geri sayma fonksiyonu
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    /* console.log(time); */
    ui.timeSecond.textContent = time;
    time--;
    if(time < 0) {
      clearInterval(counter)
      ui.timeText.textContent = 'Time expired!';
      //Secim secenekler disable olur
      ui.disableAllOption();
      //bir sonraki soruya gecis hakki verilir
      quiz.questionsIndex += 1;
      ui.btnNext.classList.add('show')
    }
  }
}

let counterLine;
function startTimeLine() {
  let lineWidth = 0;
  counterLine = setInterval(timer, 20);

  function timer() {
    lineWidth += 1;
    ui.timeLine.style.width = lineWidth + "px";
    if(lineWidth > 549){
      clearInterval(counterLine)
    }
  }
}





