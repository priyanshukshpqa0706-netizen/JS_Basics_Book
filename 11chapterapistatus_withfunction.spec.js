function validateStatusCode_simple(status){
    if(status>=200 && status<=300){
        console.log("Request is Fine");}
    }

    const validateStatusCode_Expression = function (status){
    if(status>=200 && status<=300){
        console.log("Request is Fine");
    }
}



const validateStatusCode_Arrow = (status) => {
    if(status>=200 && status<=300){
        console.log("Request is Fine");
    }
}


validateStatusCode_simple(200);
validateStatusCode_Expression(200);
validateStatusCode_Arrow(200);