// console.log(2 ** 3);   // 2^3

// let x = 10;
// let y = 3;
// console.log(x ** y);

// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------

console.log("" == 0); // // true, "" coerced to Number → 0
console.log("0" == 0);  // true, "0" coerced to Number → 0
console.log("" == "0"); // false, both strings, compared as-is
// (transitivity broken) -> coerced


// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false

console.log(5 != "5");
console.log(5 !== "5");
// console.log(5 !=== "5");

let s = "Hi, ";
console.log(typeof s);
s += "Dev";
console.log(s);

console.log("HELLO", "Priyanshu");
console.log("Hello" + "World");

console.log(1, 2, 3, 4, "Hello", true);

//Ternary Operator:
// **condition** ?  value1(if true)  : value2 (if false)

let age = 17;
let can_I_go = age > 18 ? "Yes" : "No";
console.log(can_I_go);

let actualStatusCode = 200;
let expectedStatusCode = 200;
let testResult = actualStatusCode === expectedStatusCode ? "✅ PASS" : "❌ FAIL";
console.log(testResult);

//Nested Ternary

// Nested Ternary
// Multiple Conditions
// age = 26
// age > 18 -> Go Goa, age > 25 -> Drink

let agee = 26;

let is_pk_enjoy = ( agee > 18) ? (agee > 25 ? "Goa & Drink" : "No Drink,ONly Goa") : "No Goa";
console.log(`Pk can Enjoy ${is_pk_enjoy}`);


//Increment and Decrement Operator

let a= 10;
console.log(++a + a);
console.log(a);

let i = 1;
let result = i++ + ++i;
console.log(result,i );


