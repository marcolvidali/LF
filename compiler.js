let arr = [];
let arrIndex = 0;

let result = "\n";

// Requirings
const fs = require("fs");

// # Getting test.lf content
fs.readFile("./app.lf", (err, data) => {

    // Logging err
    if(err){
        console.log(err);
    }

    // Starting program with file data
    program(data.toString());

});

// Functions
function program(code){

    // # Setting arr length
    var arrLength = code.split('\n')[0].length;
    // Subtracting if there is multiple line
    if(code.split("\n").length > 1){

        arrLength--;

    }
    // Pushing 0s
    for(let i = 0; i < arrLength; i++){
        arr.push(0);
    }
    // Slicing code
    code = code.slice(arrLength);

    // # Tokanizing and doing action
    code.split("").forEach((token) => {

        // +
        if(token == "+"){

            // Adding 1 to arr current index value
            arr[arrIndex]++;

        }

        // >
        if(token == ">"){

            // Adding 1 to arr current index
            arrIndex++;

        }

        // *
        if(token == "*"){

            // Adding 20 to arr current index
            arr[arrIndex] += 20;

        }

        // -
        if(token == "-"){

            // Subtracting 1 to arr current index value
            arr[arrIndex]--;

        }

    });

    // Transforming to letters
    toLetters(arr);

    // Result
    console.log(result);

}

function toLetters(arr){

    // Checking each arr index value
    arr.forEach((number) => {

        result += toLetter(number);

    });

}

function toLetter(number){

    let alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?";
    alphabet = alphabet.split("");

    return alphabet[number];

}