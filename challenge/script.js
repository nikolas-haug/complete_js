// Coding challenge - mini quiz game

// (function() {
//   var Question = function(question, answers, correctAnswer) {
//     this.question = question;
//     this.answers = answers;
//     this.correctAnswer = correctAnswer;
//   };

//   var question1 = new Question(
//     "What is the best programming language?",
//     ["0: Python", "1: Javascript"],
//     1
//   );
//   var question2 = new Question(
//     "What comes first: creation or execution phase?",
//     ["0: creation", "1: execution"],
//     0
//   );
//   var question3 = new Question(
//     "Javascript is a spinoff language of Java?",
//     ["0: true", "1: false"],
//     1
//   );

//   Question.prototype.askQuestion = function() {
//     console.log(this.question);
//     for (var i = 0; i < this.answers.length; i++) {
//       console.log(this.answers[i]);
//     }
//   };

//   Question.prototype.checkAnswer = function(input) {
//     if (input == this.correctAnswer) {
//       console.log("Correct answer!");
//       playerScore += 1;
//       console.log("Player score: " + this.playerScore);
//       init();
//     } else if (input === "exit") {
//       return;
//     } else {
//       console.log("Incorrect answer.");
//       console.log('Player score: ' + playerScore);
//       init();
//     }
//   };

//   Question.prototype.displayScore = function() {
//     console.log("Player score: " + this.playerScore);
//   };

//   var questions = [question1, question2, question3];
//   var playerScore = 0;

//   function init() {
//     var randomNum = Math.floor(Math.random() * 3);
//     questions[randomNum].askQuestion();
//     var userAnswer = prompt("Enter your answer here.");
//     questions[randomNum].checkAnswer(userAnswer);
//   }

//   init();
// })();

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

// Instructor solution

// Use IIFE to make code private

(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log("Correct answer!");
    } else {
      console.log("Wrong answer, try again.");
    }
  };

  var q1 = new Question(
    "Is Javascript the coolest programming language in the world?",
    ["Yes", "No"],
    0
  );
  var q2 = new Question(
    "What is the name of this course's instructor?",
    ["John", "Michael", "Jonas"],
    2
  );
  var q3 = new Question(
    "What does best describe coding?",
    ["Boring", "Hard", "Fun", "Tedious"],
    2
  );

  var questions = [q1, q2, q3];

  var n = Math.floor(Math.random() * questions.length);

  questions[n].displayQuestion();

  var answer = parseInt(prompt("Please select the correct answer."));

  questions[n].checkAnswer(answer);
})();
