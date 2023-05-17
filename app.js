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


 let arr=[];
function AnswerQustion(){let answer1 =prompt('do you like sport');
let answer2=prompt('Have you eaten yet');
let answer3= prompt('do you like footbal');
if(answer1!=='yes'){
    answer1='invaled'
}
if(answer2!=='yes'){
    answer2='invaled'
}
if(answer3!=='yes'){
    answer3='invaled'
}
 arr.push(answer1,answer2,answer3)

}
AnswerQustion()
console.log(arr);
for(let i=0;i<3;i++){
    console.log(arr[i])
}

