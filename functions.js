 function sayHello() { 
  return "Hello World"; 
} 
console.log(sayHello());
//with parameters
function multiply(a, b) {
  return a * b;
}
console.log(multiply(2,3));
//callback
console.log("callBack function");

function Name(callback){
    console.log("Yamuna");
    callback
}
function greet(){
    console.log("hi")
}
Name(greet());
//para & arguments
function multiply(a, b) { 
  return a * b; 
} 
 
let result = multiply(4, 5); 
console.log(result)
//ARROW FUNCTION
let add =(a,b)=>a*b
console.log(add(2,3))