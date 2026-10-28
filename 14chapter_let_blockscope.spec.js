
function greetHey(){
console.log("Hey Pk");
if(true){
var x = 40;
let y = 90;
console.log(x);
console.log(y);
}
console.log(x);
//console.log(y);
}

greetHey();

function blockScope(){
		if(true){
		var msg1 = "Hey Pk";
		let msg2 = "Hey lk";    
		const msg3 = "Hey ck";
		
		console.log(msg1);   //can use here.
		console.log(msg2);   //can use here .
		console.log(msg3);   //can use here .
		}
		
		console.log(msg1);   //can use here.
		//console.log(msg2);   //can't use here .
		//console.log(msg3);   //can't use here .
}

blockScope();