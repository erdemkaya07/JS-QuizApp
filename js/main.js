const questionsList = [
  new Question('1-Which is a Javascript package management application?' , {a: 'Node.js', b:'Typescript', c:'Nuget', d:'Npn'}, "d"),
  new Question('2-Which is not considered a front end?' , {a: 'CSS', b:'HTML', c:'Javascript', d:'SQL'}, "d"),
  new Question('3-Which is not considered a backend?' , {a: 'Node.js', b:'Typescript', c:'Angular', d:'React'}, "a"),
  new Question('4-Which one does not use the Javascript programming language?' , {a: 'React', b:'Angular', c:'VueJs', d:'Asp.net'}, "d"),
];



const quiz = new Quiz(questionsList);
const ui = new UI();

document.getElementById('btnQuestionBring').addEventListener('click', function() {
  if(quiz.questions.length != quiz.questionsIndex){
    ui.displayQuestion(quiz.questionBring())
    quiz.questionsIndex += 1;
  }

}) 







