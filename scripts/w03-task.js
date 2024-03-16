/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */

/*function add() 
  {
    let input1 = document.getElementById("add1");
    let input2 = document.getElementById("add2");
  
    let number1 = parseFloat(input1.value);
    let number2 = parseFloat(input2.value);
  
    return number1 + number2;
  }
  
  document.getElementById("addNumbers").addEventListener("click", function() 
  {
    let sum = add();
    document.getElementById("sum").value = sum;
  });*/

  function add(number1, number2) {
    return number1 + number2;
  }

  function addNumbers() {
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = add(addNumber1, addNumber2);
  }

  document.querySelector('#addNumbers').addEventListener('click', addNumbers);


/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
  }

  function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
  }
  
  document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);


/* Arrow Function - Multiply Numbers */


/* Open Function Use - Divide Numbers */


/* Decision Structure */


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

/* Output Odds Only Array */

/* Output Evens Only Array */

/* Output Sum of Org. Array */

/* Output Multiplied by 2 Array */

/* Output Sum of Multiplied by 2 Array */
