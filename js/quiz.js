function Quiz(questions) {
  this.questionsIndex = 0;
  this.questions = questions;
}

Quiz.prototype.questionBring = function() {
  return this.questions[this.questionsIndex];
}