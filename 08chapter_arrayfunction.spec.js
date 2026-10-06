// let browser = ["chrome", "firefox", "webkit"];

// console.log(browser.at(-1));
// console.log(browser.at(0));


//Case 1:

let arr = ["chrome", "firefox", "webkit"];
// arr.unshift("v8 engine");
// console.log(arr);
// arr.sort();
// by default sort will be executed naturally 
console.log(arr.slice(1));
 let arrs = [1,10,2,21];
 console.log(arrs.sort());   //[1,10,2,21] Natural sort

 //for getting proper results
 console.log(arrs.sort((a,b)=> a-b));  //for ascending
 console.log(arrs.sort((a,b)=> b-a));  //for descending
 console.log(arrs.slice(1,3));
// arr.push("r8");
// console.log(arr);
// arr.pop();
// console.log(arr)
console.log(arr.indexOf("webkit")); // 2
console.log(arr.indexOf("super"));  //-1 , if element not found
console.log(arr.includes("chrome"));


//Special Scemarios
let num = [15,25,50,100,250]
let result = num.find(temp => temp>150)
console.log(result);     //250

let indx = num.findIndex(temp => temp>50);
console.log(indx);   //3

let last = num.findLast(temp => temp<250);
console.log(last);

let lastIndx = num.findLastIndex(temp => temp>250);
console.log(lastIndx);      //-1

//array.splice(start, deleteCount, item1, item2, ...);
//start – kis index se operation start karna hai.
//deleteCount – kitne elements remove karne hain.
//item1, item2 – kaun se naye elements add karne hain.

let spl = arr.splice(2,1,"Brave");
console.log(spl);