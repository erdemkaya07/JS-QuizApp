function Quiz(questions) {
  this.questionsIndex = 0;
  this.questions = questions;
  this.correctQuestionOrder = 0;
}

Quiz.prototype.questionBring = function() {
  return this.questions[this.questionsIndex];
}