let scoreCard = 30

switch(scoreCard){

case(scoreCard>=90):
console.log("Excellent Student")
break;

case(scoreCard>=80):
console.log("Wonderful Student")
break;

case(scoreCard>=70):
console.log("Very Good Student")
break;

case(scoreCard>=60):
console.log("Good Student")
break;

case(scoreCard>=50):
console.log("Average Student")
break;

default:
console.log("Dumb student call your parents")

}

//Scenario 2

let statusCode = 200

switch(statusCode){

case 200:
    console.log("200-PASS")
    break;

case 400:
    console.log("400-NOT FOUND")
    break;

case 500:
    console.log("500-SERVER ERROR")
    break;
    
}

//What happens if you miss break; in the switch statement
//Ans- All the subsequent cases will  be executed until the switch ends
 