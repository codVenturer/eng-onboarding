function fibonacci(n) {
    if (n !== parseInt(n)) {
      alert("Not a valid number"); // number is not valid
      return;
    }
    if (n <= 0) {
      alert("Enter a positive Integer"); // if number is less than or equal to zero, function will return with console message
      return;
    }
  
    let num1 = 1;
    let num2 = 1;
    let fibn = 1;
    for (let i = 2; i < n; i += 1) {
      console.log(fibn);
      fibn = num1 + num2; // fib(n) = fib(n-1) + fib(n-2)
      num1 = num2;
      num2 = fibn;
    }
  
    console.log(fibn);
  
    return;
  }
  
  let number = parseInt(window.prompt("Enter a number"));
  
  fibonacci(number);
  