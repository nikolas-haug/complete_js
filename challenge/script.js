// Coding challenge - mini quiz game


(function () {
  var Question = function(question, answers, correctAnswer) {
    this.question = question;
    this.answers = answers;
    this.correctAnswer = correctAnswer;
  }
  
  var question1 = new Question('What is the best programming language?', ['0: Python', '1: Javascript'], 1);
  var question2 = new Question('What comes first: creation or execution phase?', ['0: creation', '1: execution'], 0);
  var question3 = new Question('Javascript is a spinoff language of Java?', ['0: true', '1: false'], 1);
  
  Question.prototype.askQuestion = function() {
    console.log(this.question);
    for(var i = 0; i < this.answers.length; i++) {
      console.log(this.answers[i]);
    }
  }
  
  Question.prototype.checkAnswer = function(input) {
    if(input == this.correctAnswer) {
      console.log('Correct answer!');
    } else {
      console.log('Incorrect answer.');
    }
  }
  
  var questions = [question1, question2, question3];
  var randomNum = Math.floor(Math.random() * 3);
  questions[randomNum].askQuestion();
  var userAnswer = prompt('Enter your answer here.');
  questions[randomNum].checkAnswer(userAnswer);
})();

// function askQuestion() {
//   for(var i = 0; i < questions.length; i++) {
//     var randomNum = Math.floor(Math.random() * 3);
//     console.log(questions[randomNum].question);
//     for(var j = 0; j < questions[randomNum].answers.length; j++) {
//       console.log(questions[randomNum].answers[j]);
//     }
//     var userAnswer = prompt('Enter your answer here.');
//     if(userAnswer == questions[randomNum].correctAnswer) { 
//       console.log('Correct!');
//     } else {
//       console.log('That\'s incorrect.');
//     }
//   }
// }

// askQuestion();
