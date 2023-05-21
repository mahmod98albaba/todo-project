'use strict';
 let username = prompt('please enter your name');
console.log(username); 

let usergender = prompt('please enter gender male or female');
console.log(usergender);

let userage = prompt('please enter your age');
 function CheckTheUserAge(){
    if (userage <= 0) {
    alert('the age is less or eqaul 0')
}
console.log(userage);
 }
 CheckTheUserAge();
let answer = confirm('do you want to skip the welcoming message');

function CheckIFTrueOrFalse(){ if(answer == false) {
    if (usergender == 'male') {
        console.log("male", usergender);
        alert('welcome mr ' + username)
    }
    else if (usergender == 'female') {
        console.log("female", usergender);
        alert('welcome ms ' + username)
    }
    else {
        alert('welcome to our website ' + username)
    }
}
}
CheckIFTrueOrFalse();
console.log(answer)
let arrayOfAnswers = [];

let answer1 =prompt('do you like sport');
CheckIFYesOrNo(answer1);

let answer2 =prompt('Have you eaten yet');
CheckIFYesOrNo(answer2);

let answer3=prompt('do you like footbal');
CheckIFYesOrNo(answer3);

function CheckIFYesOrNo(x){
    if(x !== 'yes' && x !=='no'){
        x='invalid';
    }else{
        x= x;
    }
    arrayOfAnswers.push(x);
  
}
for (let index = 0; index < arrayOfAnswers.length; index++) {
    console.log(arrayOfAnswers[index])

    
}
console.log(arrayOfAnswers)

