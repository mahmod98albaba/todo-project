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

let answer1 =prompt('do you like sport');
let answer2 =prompt('Have you eaten yet');
let answer3=prompt('do you like footbal');
function CheckIFYesOrNo(x,y,z){
    if(answer1!='yes'||'no')
    answer1='invalid'
    if(answer2!='yes'||'no')
    answer2='invalid'
    if(answer3!='yes'||'no')
    answer3='invalid'
    const qustion=['x','y','z']
}
CheckIFYesOrNo(answer1,answer2,answer3)
console.log(answer1)

