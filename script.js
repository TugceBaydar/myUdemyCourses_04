
// ==================== section 5 , lecture 53

// var john = {
//   name: 'John',
//   yearOfBirth: 1990,
//   job: 'teacher'
// };
//
// var Person = function(name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// }
//
// Person.prototype.calculateAge = function() {
//   console.log(2018 - this.yearOfBirth);
// };
//
//
// Person.prototype.lastName = 'Smith';
//
// var john = new Person('John', 1990, 'teacher');
// var jane = new Person('Jane', 1969, 'designer');
// var mark = new Person('Mark', 1980, 'retired');
//
// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();
//
// console.log(john.lastName);

//john.__proto__ === Person.prototype

//john.hasOwnProperty('job') that gives a true
//john.hasOwnProperty('lastName') that gives a false because its not its own property its an inherited property !!
// john instanceof Person and yes that gives a true because we created it through Person object



// ==========section 5, lecture 54

// Object.create


//
// var personProto = {
//   calculateAge: function() {
//     console.log(2018 - this.yearOfBirth);
//   }
// };
//
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearOfBirth = 1990;
// john.job = 'teacher';
//
// var jane = Object.create(personProto, {
//   name: { value: 'Jane'},
//   yearOfBirth: { value: 1969},
//   job: { value: 'designer'}
// });

// ========== section 5, lecture 55

// primitives vs objects
//primitives
// var a = 23;
// var b = a;
// a = 46;
// console.log(a);
// console.log(b);
//
// //objects
// var obj1 = {
//   name: 'John',
//   age:26
// }
//
//
// var obj2 = obj1;
// obj1.age = 30;
// console.log(obj1.age);
// console.log(obj2.age);
//
// //functions
//
// var age= 27;
// var obj = {
//   name: 'Jonas',
//   city: 'Lisbon'
// };
//
// function change(a,b) {
//   a = 30;
//   b.city = 'San Francisco';
// }
//
// change (age, obj);
//
// cobnsole.log(age);
// console.log(obj.city);


//calculating age with callback functions
//
// var years = [1990, 2000, 1985, 1977, 1993];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for(var i=0; i<arr.length; i++) {
//       arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge(el) {
//   return 2018 - el;
// }
//
// function isFullAge(el) {
//   return el >= 18;
// }
//
// function maxHeartRate(el) {
//   if(el >= 18 && el<= 81) {
//     return Math.round(206.9 - (0.67 * el));
//   } else {
//     return - 1;
//   }
// }
//
//
// var result = arrayCalc(years, calculateAge);
// var fullAge = arrayCalc(years, isFullAge);
// var rates = arrayCalc(result, maxHeartRate);
// console.log(result);
// console.log(fullAge);
// console.log(rates);

//======================section 5 lecture 57

//
// function interviewQuestions(job) {
//   if (job==='designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if ( job === 'teacher') {
//     return function(name) {
//       console.log('what subject do you teach' + name);
//     }
//   }
//     else {
//       return function(name) {
//         console.log('hey' + name + 'what do you do?');
//       }
//     }
//   }
//     var teacherQuestion =
//     interviewQuestions('teacher');
//     var designerQuestion =
//     interviewQuestions('designer');
//
//     teacherQuestion('John');
//     designerQuestion('John');
//     designerQuestion('Jane');
//     designerQuestion('Mark');
//
//     interviewQuestions('teacher')('Tugce');

// ===============lecture 58

// IIFE

// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
//
// game();
//
// (function() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();
//
// (function (goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(5);
//
// // ===============lecture 59 -- 68
//
// // Lecture : Closures
//
// function retirement(retirementAge) {
//   var a = ' years left until retirement';
//   return function(yearOfBirth) {
//     var age = 2016 - yearOfBirth;
//     console.log((retirementAge - age) + a);
//   }
// }
//
// var retirementUS = retirement(66);
// retirementUS(1990);
//
// var retirementGermany = retirement(65);
//
// var retirementIceland =
// retirement(67);
//
//
// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);
// retirement(66)(1990);


// function interviewQuestions(job) {
//   if (job==='designer') {
//     return function(name) {
//       console.log(name + ', can you please explain what UX design is?');
//     }
//   } else if ( job === 'teacher') {
//     return function(name) {
//       console.log('what subject do you teach' + name);
//     }
//   }
//     else {
//       return function(name) {
//         console.log('hey' + name + 'what do you do?');
//       }
//     }
//   }

// function interviewQuestions(job) {
//   return function(name) {
//     if (job === 'designer') {
//       console.log(name + ', can you please explain what UX design is?');
//     } else if (job === 'teacher') {
//        console.log('what subject do you teach' + name);
//     } else {
//       console.log('hey' + name + 'what do you do?');
//     }
//   }
// }
//
// interviewQuestions('teacher')('john');


//======================section 5 lecture 69
//bind, call and apply

// var john = {
//   name: 'John',
//   age: 26,
//   job: 'teacher',
//   presentation: function(style,timeOfDay) {
//     if(style === 'formal') {
//       console.log('good' + timeOfDay + 'ladies and gentelemen! i \' m a' + this.name  + 'i \'m a ' + this.job + 'and i \' m '+ this.age+ 'years old');
//     }else if (style === 'friendly') {
//       console.log( 'hey whats up? + i \' m a' + this.name  + 'i \'m a ' + this.job + 'and i \' m '+ this.age+ 'years old' + 'have a nice' + timeOfDay);
//     }
//   }
// };
//
// var emily = {
//   name: 'emily',
//   age: 35,
//   job: 'designer'
// };
//
// john.presentation('formal', 'morning');
// john.presentation.call(emily, 'friendly', 'afternoon');
//
// //we borrow johns method for emily !!! with call method !
//
// //------john.presentation.apply(emily, ['friendly', 'afternoon']);
//
// var johnFriendly = john.presentation.bind(john, 'friendly');
//
// johnFriendly('night');
// johnFriendly('morning');
//
// //bind doesnt call the function imediatly ! you gotta store it somewhere !
//
// var emilyFormal = john.presentation.bind(emily, 'formal');
// emilyFormal('afternoon');

//===========

// var years = [1990, 2000, 1985, 1977, 1993];
//
// function arrayCalc(arr, fn) {
//   var arrRes = [];
//   for(var i=0; i<arr.length; i++) {
//       arrRes.push(fn(arr[i]));
//   }
//   return arrRes;
// }
//
// function calculateAge (el) {
//   return 2018 - el;
// }
//
// function isFullAge(limit ,el) {
//   return el >= limit;
// }
//
//
// var ages= arrayCalc(years, calculateAge);
// var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
// console.log(ages);
// console.log(fullJapan);


//==================lecture 71

// (function() {
//   function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
//
//
//   Question.prototype.displayQuestion = function(){
//     console.log(this.question);
//
//     for(var i=0; i<this.answers.length; i++) {
//       console.log(i + ' ' + this.answers[i]);
//     }
//   }
//
//   Question.prototype.checkAnswer = function(ans) {
//     if(ans === this.correct) {
//       console.log('correct answer');
//     } else {
//       console.log('wrong aswer');
//     }
//   }
//
//
//   var q1 = new Question('Is JS the coolest programming language in the world?',
//   ['Yes', 'No'],
//   0);
//
//
//   var q2 = new Question('whats the name of this courses teacher?',
//   ["john, 'Tugce','Jonas'"],2);
//
//   var q3 = new Question('what does best describe coding?',
//   ['boring','hard','fun'],2);
//
//   var questions = [q1, q2, q3];
//
//   var n = Math.floor(Math.random() * questions.length);
//
//   questions[n].displayQuestion();
//
//   var answer = parseInt(prompt('please select the correct answer.'));
//
//   questions[n].checkAnswer(answer);
// })();


(function() {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }
    Question.prototype.displayQuestion = function() {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }
    Question.prototype.checkAnswer = function(ans, callback) {
        var sc;

        if (ans === this.correct) {
            console.log('Correct answer!');
            sc = callback(true);
        } else {
            console.log('Wrong answer. Try again :)');
            sc = callback(false);
        }

        this.displayScore(sc);
    }
    Question.prototype.displayScore = function(score) {
        console.log('Your current score is: ' + score);
        console.log('------------------------------');
    }


    var q1 = new Question('Is JavaScript the coolest programming language in the world?',
                          ['Yes', 'No'],
                          0);
    var q2 = new Question('What is the name of this course\'s teacher?',
                          ['John', 'Micheal', 'Jonas'],
                          2);
    var q3 = new Question('What does best describe coding?',
                          ['Boring', 'Hard', 'Fun', 'Tediuos'],
                          2);

    var questions = [q1, q2, q3];

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) {
                sc++;
            }
            return sc;
        }
    }
    var keepScore = score();


    function nextQuestion() {
        var n = Math.floor(Math.random() * questions.length);
        questions[n].displayQuestion();
        var answer = prompt('Please select the correct answer.');
        if(answer !== 'exit') {
            questions[n].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();

})();
