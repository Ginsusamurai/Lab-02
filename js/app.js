'use strict';

var i = 1;
var userName = prompt('What is your name?');
var quizItemAnswer1 = ['Anthony rides the ferry to work', 'YES', ''];
var quizItemAnswer2 = ['hen hau translates to very bad, in Mandarin', 'NO', ''];
var quizItemAnswer3 = ['Anthony studied abroad in China', 'YES', ''];
var quizItemAnswer4 = ['Anthony works in Global Transportation', 'YES', ''];
var quizItemAnswer5 = ['The Highest Sea Cliffs in the world are in Alaska', 'NO', ''];
//ARRAY FOR ANSWERS?
//var quizItemcontentA = 'Ferry';
//var quizItemcontentBa = 'hen hau';
//var quizItemcontentBb = 'China';
//var quizItemcontentC = 'Global Transportation';
//var quizItemcontentD = 'Highest Sea Cliffs In The World';
//PERSONALIZED WELCOME MESSAGE
if (userName === ''){
  do{
    var userName = prompt('What is your name? What do your friends call you??');
    i++;
  } while(i<2);
}else{
  alert('Aloha, ' + userName + ', welcome to this website. Thank you for stopping by.');
};
quizItemAnswer1[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer1[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswer2[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer2[0]);//CORRECT ANSWER IS: N/NO
quizItemAnswer3[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer3[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswer4[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer4[0]);//CORRECT ANSWER IS: Y/YES
quizItemAnswer5[2] = prompt('Yes (Y)/No (N)--' + quizItemAnswer5[0]);//CORRECT ANSWER IS: N/NO

if (quizItemAnswer1[1].toUpperCase() === quizItemAnswer1[2].toUpperCase()) {
  console.log('sucessA');
  //alert('Good job, you answered correctly.');
} else if (quizItemAnswer1[1].charAt(0).toUpperCase() === quizItemAnswer1[2].toUpperCase()){
  console.log('sucessB');
  //alert('Good job, you answered correctly.');
} else{
  console.log('bad');
  //alert('That was close! But incorrect.');
}



console.log(quizItemAnswer1[1].charAt(0));
console.log(quizItemAnswer1);
console.log(quizItemAnswer2);
console.log(quizItemAnswer3);
console.log(quizItemAnswer4);
console.log(quizItemAnswer5);

/*switch(quizItemAnswerA.toUpperCase()){
  case 'Y':
    alert("That's correct.");
    break;
  case 'YES':
    alert("That's correct.");
    break;
  case 'N':
    alert("That's incorrect.");
    break;
  case 'NO':
    alert("That's incorrect.");
    break;
  default:
    alert("That doesn't make sense. But let's just move along.");
      break;
}*/
//COMMENTED BELOW (AND CONSIDERING LOOPING THRU SWITCH ABOVE) I DO SOMETHING LIKE THIS IN VBA TO LOOP THRU MULTIPLE INSTANCES OF ARRAYS HERE. THE IDEA IS TO LOOP THRU QUIZ ANSWERS AND GENERATE MULTIPLE ALERTS TO USER ABOUT HOW THEY DID IN THEIR SCORE. ALL WITH MINIMAL CODE; where jk string value finds the arrays above.
/*for (var j = 1; j < 6; j++){
  var jk = 'quizItemAnswer' + j;
  if (jk[1].toUpperCase === jk[2].toUpperCase){
    alert('Good job, you answered correctly.');
  }else
    alert('That was close! But incorrect.');
}*/

//Greeting goodbye
if (userName === '') {
  alert('Mahalo, you, thanks again for visiting. Have a great day.');
  } else {
  alert('Mahalo, ' + userName + ', thanks again for visiting. Have a great day.');
};