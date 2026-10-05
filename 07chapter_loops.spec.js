// for(let suman=0; suman<18; suman++){

//     if(suman>=15){
//         console.log("She will get the gift from papa");
//     }else{

//         console.log("No gifts");
//     }
// }


//Second Scenario interview 

// for(let _1 =0; _1<5; _1++){
//     console.log(_1);
// }

//Third scenario 

// for(let pk=0; pk>5; pk++){
//     console.log(pk);         //no execution of this line
// }


// While and do While difference

// let a = 10;
// while(a>11){           >> in while condition check first then execution
//     console.log(a);
//     a++;
// }

let a=10;

do{
    console.log("Hii executed",a);
    a++                                 //loop will execute atleast once and then condition check at last 
} while(a>12);


//Tricky ques

let count =0;
for(let i=5; i<5; i++){
    count++;
}
console.log(count);


//Tricky 2
let sum=0;

for(let i=1; i<=5; i++){
    sum+=i;
}
console.log(sum);

//Trciky 3

let i=0;
while(i<NaN){
    i++;
}
console.log(i);

//Trciky 4

let x=3, c=0;
do{
    c++;
}while(x-- >0);
console.log(c+" " +i);      //4,0