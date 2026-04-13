//callbacks (4 types)
//1. callback Injection
 function calculation (a,b,operation){
  return operation(a,b);
}
const add=(a,b)=>a+b;
const divide=(a,b)=>a/b;
console.log(calculation(67,98,add));
console.log(calculation(98,56,divide));

//2. array callback
 const container=[9,8,7,5,4,8,6]
 const output=container.find((number)=>number%2==0);
  console.log(output); 

//3. validation callback
function userInput(input,check){
    if(check(input)){
        return"ok";
    }else{
        return"not ok";
    }
}
isvalid=(input)=>input.length>6;
console.log(userInput("welcome",isvalid));


//Structured Clone? ==  it hepls to original data privacy and security.
// it is used to create a deep copy of an object or data structure, ensuring that the original data remains unchanged and secure. 


//shallow copy  
//it change only the first level if the object is nested (modified)it will change the original data
//   2 method 
//1. spread operator
//2. Object.assign() 

//deep copy
//it will copy entirly the orijinal data and it will not change the original data if we modify the (nested) data
// 2 method
//1. JSON.parse(JSON.stringify())
//2. structuredClone() (new method)









// const outer = ()=>{
//   let count = 0;
//   return ()=>{
//     // count = count + 1 = 1+1 = 2
//     count++
//     return count
//   }
// }
// const data = outer()
// console.log(data());
// console.log(data());
// console.log(data());

// count = 12
// console.log(count);   -------------------- 12 will print becoz count is globally declared.let is an block scope , both are separated.



