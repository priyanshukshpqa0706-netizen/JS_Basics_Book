//1) Function No Argument, No Return type

function greet(){
    console.log("Hi");   //Print only not returning
}

greet();           // Calling    //HI



//2) With Argument, No RT
function greetByName(name){
    console.log("Hey! ", name);
    
}

greetByName("Neeti");
greetByName("Arjun");

let ux = greetByName();
console.log(ux);


//3) Without Arg/Param, but With RT
function animal(){

    return '';
}

let result = animal();
console.log(result);


//4)**Important With Arg/Params and With RT
function addingNumbers(a,b){
    return a+b;
}

console.log(addingNumbers(10,10));