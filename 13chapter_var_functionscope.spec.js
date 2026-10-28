// Variables: it is a container which can hold/store some data.
//2) We have var, let, const in TS/JS variables
//3) We will avoid "var" because it has function scope and can show unexpected behaviour.
//	let: Use let when you need variable that can change.
//	const: Use const, when the value of variable should not change.
//Scope: It is an accessible area 
//i) Functional Scope: which is accessible within the function.
//Ex-- var comes under FS

var x = 20;
console.log(x);

function greetHey(){
console.log("Hey Pk");
var x = 30;
console.log(x);
if(true){
var x = 40;
console.log(x);
}
console.log(x);
}

greetHey();