for (let zahl = 1; zahl <= 100; zahl++) {
    if (zahl % 3 === 0 && zahl % 5 === 0) {
    console.log ("Fizzbuzz");
    } 
    else if (zahl % 5 === 0) {
    console.log ("Buzz");
    }
    else if (zahl % 3 === 0) {
    console.log ("Fizz");
    }
    else {
    console.log(zahl);
    }
}