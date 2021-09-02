function fibonacci(n) {
    if (n !== parseInt(n)) {
      alert("Not a valid number");
      return;
    }
    if (n <= 0) {
      alert("Enter a positive Integer");
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
  
const number = parseInt(window.prompt("Enter a number"));
  
fibonacci(number);