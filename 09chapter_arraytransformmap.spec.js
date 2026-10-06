let scores = [40,55,65,73,85,98];

let grades = scores.map(temp=> temp>=70 ? "Pass" : "Fail")
console.log(grades);

//Map: Array map is used when we have to transform array into new array with same size

let passingGrade = scores.filter(temp=> temp>60);
console.log(passingGrade.sort((a,b)=> b-a));   //desc sorting