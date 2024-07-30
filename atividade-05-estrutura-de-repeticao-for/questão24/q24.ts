for (let c = 1; c <= 100; c++) {
    console.log(c)
    if (c % 3 === 0) {
        console.log("Fizz")
    } else if (c % 5 === 0) {
        console.log("Buzz")
    } else (c % 3 === 0 && c % 5 === 0) 
        console.log("FizzBuzz")
}