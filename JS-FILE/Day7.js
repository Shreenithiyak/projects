// Object Destructuring
const user = {
  name: "Shree",
  age: 22,
  city: "Chennai"
};
const person=`${user.name} lives in ${user.city}`;
console.log(person);

// Array Destructuring
const number=[121,122,134,152,134,345,543];
const arr=[...number];
console.log(arr);

//swap numbers
//let a=12;
let e=14;
[a,e]=[e,a];
console.log(a,e);

//destucturing by default
const per={a:"sharukh",d:"salman"};
const{a,d,"age":age=23}=per;
console.log(a,d,age);


// Task 1 Create a function createProfile(user).
// Accept an object as parameter.
// Destructure name, age, and role.
// If role is not provided, default it to "User".
// Return a formatted string using template literals.
const createprofile=(user)=>{
  const{name="aswin",age="12",role="User"}=user;
  return`${name} is ${age} years old at the role of ${role}`;
}
console.log(createprofile({}));


// Task 2Create a function calculateTotal(discount, ...prices).
// Use rest operator to collect prices.
// Use reduce to calculate total.
// Apply discount percentage.
// Return final amount.
// Use arrow function only.
 function calculateTotal(discount,...prices){
  const total=prices.reduce((acc,prices)=>acc+prices,0);
  const finalAmount=total-(total*discount/100);
  return finalAmount;
 }
 console.log(calculateTotal(10,100,200,300));


// Task 4 – Array Methods + Optional Chaining + Nullish
const students=[
{ name: "A", marks: 80 },
{ name: "B" },
{ name: "C", marks: 60 }
];
 const totalMarks= students.map(student=>student.marks??0);
 console.log(totalMarks);


















