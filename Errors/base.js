//Syntax error - The error occurs when you use a predefined syntax incorrectly.

const func = () =>
console.log(hello)
}

//Reference Error - the variable reference can't be declare
console.log(x);

//Type Error - An error occurs when a value is used outside the scope of its data type.
let num = 15;
console.log(num.split("")); //converts a number to an array

//Evaluation Error
try{
    throw new EvalError("'Throws an error'")
  }catch(error){
    console.log(error.name, error.message)
  }

 // RangeError - There is an error when a range of expected values is required, as shown below:
 const checkRange = (num)=>{
    if (num < 30) throw new RangeError("Wrong number");
    return true
  }
  
  checkRange(20);

//URI Error - When the wrong character(s) are used in a URI function, the error is called.
console.log(decodeURI("https://www.educative.io/shoteditor"))

console.log(decodeURI("%sdfk"));

//Internal Error 
switch(condition) {
    case 1:
    ...
    break
    case 2:
    ...
    break
    case 3:
    ...
    break
    case 4:
    ...
    break
    case 5:
    ...
    break
    case 6:
    ...
    break
    case 7:
    ...
    break
    ... up to 500 cases
    }
   
