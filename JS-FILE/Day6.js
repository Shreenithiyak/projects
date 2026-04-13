// Create an empty array called cart.
// Add 3 product names using push().
// Remove the last product using pop().
// Print final cart and removed item.
const cart=[""];
cart.push("mutton soup","Crab curry","fish fry");
const removedItem =cart.pop();
console.log("final cart",cart);
console.log("removed item",removedItem);

// Create an array [10, 20, 30, 40].
// Remove the first element using shift().
// Add 5 at the beginning using unshift().
const arr=[10,20,30,40];
arr.shift();
console.log("after shift",arr);
arr.unshift(5); 
console.log("after unshift",arr);

// Create an array of skills.
// Check if "React" exists using includes().
// If not present, add it.
const skills=["js","html","css"];
if(!skills.includes("React",0)){
  skills.push("React");  
}
console.log(skills);

// Given array [1, 2, 3, 4, 5]
// Use slice() to create a new array containing only middle 3 elements.
const numbers=[1,2,3,4,5];
const mE=numbers.slice(1,4);
console.log(mE);


// Given [1, 2, 3, 4, 5]
// Use splice() to remove 3 and 4.
// Then insert 100 and 200 at that position.
 const num=[1,2,3,4,5];
 num.splice(2,2,100,200);
 console.log(num);

//Combine two arrays [1,2] and [3,4] using concat().
const arr1=[1,2];
const arr2=[3,4];
const merge=arr1.concat(arr2);
console.log(merge);


// Convert ["JS", "React", "Node"] into a single string separated by " - " using join().
const value=["JS","React","Node"];
const str=value.join("-");
console.log(str);

// Sort an array of numbers in ascending and descending order properly.
const ascen=[9,2,7,4,5,0,3,1];
ascen.sort((a,b)=>a-b);
console.log("low-high",ascen);
const descen=[9,2,7,4,5,0,3,1];
descen.sort((a,b)=>b-a);
console.log("high-low",descen);

// Reverse an array without creating a new variable.
const rev=[1,2,3,4,5];
rev.reverse();
console.log(rev);

// Find index of a specific value in an array.
// If not found, print "Not Found".
const arrval=[10,20,30,40,50];
if(arrval.includes(40)){
    console.log(arrval.indexOf(40));
}else{
    console.log("Not Found");
}

// SECTION 2 – Higher Order Array Methods Tasks

// Given [1,2,3,4]
// Create a new array where each number is multiplied by 5.
const numval=[1,2,3,4,5];
const mul=numval.map((num)=>num*5);
console.log(mul);

 const persons=[
 { name: "Sudhan", age: 22 },
 { name: "Ravi", age: 25 }
]

// Return a new array containing only names.
const name=persons.map((person)=>person.name);
console.log(name);

// Given [10, 15, 20, 25, 30]
// Return only numbers greater than 20
const number=[10, 15, 20, 25, 30];
const greaterThan=number.filter((number)=>number>20);
console.log(greaterThan);

// filter() (Object)
// From a product array, filter products whose price is above 10000.
const products=[
    {name:"laptop",price:50000}, {name:"laptop",price:7000},
    {name:"mobile",price:20000},{name:"mobile",price:2000}];
const above=products.filter((products)=>products.price>10000);
console.log(above);

// reduce() (Sum)
// Find total of [100, 200, 300].

const product=[
 { name: "Mobile", price: 10000 },
 { name: "Laptop", price: 50000 },
 { name: "Headset", price: 2000 }
];

// Get all product names.
const call=product.map((product)=>product.name);
console.log(call);

// Filter products above 5000.
const abovehigh=product.filter((product)=>product.price>5000);
console.log(abovehigh);


// Check if any product below 3000 exists.
 const below=product.some((product)=>product.price<3000);
 console.log(below);

// Given student marks array

// Get all marks above 70.
const abovescored=marks.filter((mark)=>mark>70);
console.log(abovescored);

// Check if all students passed (>= 35).
const pass=marks.every((mark)=>mark>=35);
console.log(pass);
// Find first failed student.
const fail=marks.find((mark)=>mark<35);
console.log(fail);
// Calculate average mark.


// From an array of user objects, group users by age using reduce().
 const users=[
 { name: "Alice", age: 25 },{name:"Charlie",age:21},
 { name: "Bob", age: 30 },{name:"David",age:32}];
    const grouped = users.reduce((acc, user) => {
  (acc[user.age] ||= []).push(user.name);
  return acc;
}, {});
console.log(grouped);

// Convert [[1,2], [3,4], [5]] into [1,2,3,4,5] using reduce().
const nestedArray = [[1,2], [3,4], [5]];
const flat= nestedArray.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);






















