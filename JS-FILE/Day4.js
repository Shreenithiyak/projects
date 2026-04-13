// Demonstrate difference between == and === using 5 comparison examples.
//  ==
//  This condition will check the [value] of the operands.
//   comparisons  :
                console.log(5 == "5"); 
                console.log(0 == false); 
                console.log("hello" == "hello"); 
                console.log(null == undefined); 
                console.log(NaN == NaN);

//  ===
//  This condition will check the [value] and [type] of the operands. 
//   comparisons:
                console.log(5 === "5"); 
                console.log(0 === false);
                console.log("hello" === "hello"); 
                console.log(null === undefined); 
                console.log(NaN === NaN); 
// Create a function that converts any input to Boolean explicitly and returns whether it is truthy or falsy. 
function checkking(input){
    return Boolean (input);
}
console.log(checkking(0));
console.log(checkking(1));
console.log(checkking(""));
console.log(checkking("hello"));
console.log(checkking(null));
console.log(checkking(undefined));
console.log(checkking(NaN));
 

// Write a function calculateTotal(price, qty) where inputs are strings. Convert them explicitly before calculation.
function calculateTotal(price,qty){
    const p=Number(price);
    const q=Number(qty);
    return p*q;
}
console.log(calculateTotal("10","5"));

// Show 3 examples where implicit coercion gives unexpected results. Explain why.
 if(false==0){
    console.log("runs");
 }
//    false is converted as 0 and its equal to 0 so it returns unexpected true
    if(""-0){
    console.log("runs");
 }
 //    "" is converted as 0 and its equal to 0 so it returns unexpected true
    if("true"==0){
    console.log("runs");
 }
//    "true" is converted as NaN and its not equal to 0 so it returns unexpected false