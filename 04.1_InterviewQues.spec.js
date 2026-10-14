//Q-1
let environment = "staging";
let baseUrl = environment === "prod"
    ? "https://api.example.com"
    : "https://staging-api.example.com";
console.log(baseUrl);

//Q-2
let isCI = true;
let browserMode = isCI ? "headless" : "headed";
console.log("Launching browser in:", browserMode, "mode");

//Q-3
let responseTime = 850;  // ms
let sla = 1000;          // ms
let slaStatus = responseTime <= sla ? "Within SLA ✅" : "SLA breached ❌";
console.log(`Response: ${responseTime}ms — ${slaStatus}`);
// Template Literal
console.log(`What is the SLA time ? - ${sla}`);

//Q-4
let condition = true;
let isSKMale = condition ? true : false;
console.log(isSKMale);
console.log(`Value is , ${isSKMale}`);

//Q-5
let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";

console.log(`Status ${statusCode}: ${category}`);

//Q-6
let temp = 35;
let feel = (temp >= 40) ? "Very Hot" :
    (temp >= 30) ? "Hot" :
        (temp >= 20) ? "Warm" :
            (temp >= 10) ? "Cool" : "Cold";
console.log("7. Temperature:", temp, "| Feel:", feel);

//Q-7
console.log(typeof "hello");
console.log(typeof 123); // number
console.log(typeof 31.4); // number

// typeof true
//typeof undefined
// typeof null -> object