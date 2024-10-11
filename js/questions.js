function Question(questionText, answerOptions, correctAnswer){
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;
}

Question.prototype.answerControl = function (answer) {
  return answer === this.correctAnswer;
}




