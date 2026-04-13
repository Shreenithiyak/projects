1
const fruits = ["Apple", "Banana", "Mango", "Orange"];
// First fruit
console.log(fruits[0]);
;// Last fruit
console.log(fruits[3]);
// Total number of fruits
console.log(fruits.length);
 
2
const colors = ["Red", "Green", "Blue"];
//  Change "Green" to "Yellow"
colors[1] ="yellow";
//  Print updated array
console.log(colors);

3
const numbers = [10, 20, 30, 40];
//  Print each number using loop
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]);
}
//  Print square of each number
for (let i=0; i<numbers.length; i++){
    console.log(numbers[i]*numbers[i]);
}

4
const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];
// Ravi's age
 console.log(data[1][1]);
// Kumar's name
console.log(data[2][0]);

5
const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];
// First user's name
console.log(users[0].name);
// Second user's id
console.log(users[1].id);

6
const student = {
  name: "Arun",
  age: 22,
  course: "MERN"
};
// name
console.log(student.name);
// course
console.log(student.course);

7
const car = {
  brand: "BMW",
  year: 2020
};
//  Update year to 2024
car.year = 2024;
//  Add new property: color = "Black"
car.color = "Black";
console.log(car);

8
const employee = {
  name: "Ravi",
  address: {
    city: "Chennai",
    pincode: 600001
  }
};
// city
console.log(employee.address.city);
// pincode
console.log(employee.address.pincode);

9
const product = {
  name: "Laptop",
  features: ["16GB RAM", "512GB SSD", "i7 Processor"]
};
// Second feature
console.log(product.features[1]);
// Total number of features
console.log(product.features.length);

10
const students = [
  { name: "Arun", marks: 80 },
  { name: "Ravi", marks: 40 },
  { name: "Kumar", marks: 90 }
];
// Print names of students who scored more than 50
const result = students
  .filter(student => student.marks > 50)
  .map(student => student.name);
console.log(result);