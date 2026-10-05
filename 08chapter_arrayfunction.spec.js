// let browser = ["chrome", "firefox", "webkit"];

// console.log(browser.at(-1));
// console.log(browser.at(0));


//Case 1:

let arr = ["chrome", "firefox", "webkit"];
// arr.unshift("v8 engine");
// console.log(arr);
// arr.sort();
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