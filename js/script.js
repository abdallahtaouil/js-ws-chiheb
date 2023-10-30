console.log('external Javascript');

// Declaration of variables
var name = 'John';
console.log(name);
console.log('type of name is ' + typeof name);
var age = 45;
console.log(age);
console.log('type of age is ' + typeof age);
var isAlive = true;
console.log(isAlive);
console.log('type of isAlive is ' + typeof isAlive);
var x;
console.log(x);
console.log('type of x is ' + typeof x);
var y = undefined;
console.log(y);
console.log('type of y is ' + typeof y);
var z = null;
console.log(z);
console.log('type of z is ' + typeof z);

// Decalration of object literal with fullName property
var person = {
  fullname: 'Jhon Doe',
};
console.log(person);
console.log('type of person is ' + typeof person);

// Declaration of empty object
var person1 = {};
console.log(person1);

// Set fullName property of person1 with dot notation
person1.fullName = 'Jane Doe';
console.log(person1);

// Get fullName of person1 with dot notation
console.log(person1.fullName);

// Set age property of person1 with dot notation
person1.age = 25;
console.log(person1);

// Set isAlive property of person1 with braket notation
person1['isAlive'] = false;
console.log(person1);

// Get age of person1 with braket notation
var key = 'age'; //
console.log(person1[key]);

// Regular Function
function greeting(name) {
  // return `Hello ${name}`;
  return 'Hello ' + name;
}

// Invoke greeting function
var result = greeting(person1.fullName);
console.log(result);

// Function expression
var cube = function (number) {
  return number ** 3;
};

// Invoke cube function
console.log(cube(3));

// Add sayHello method to person1
person1.sayHello = function () {
  return 'Hello everyone';
};
console.log(person1);
console.log(person1.sayHello());

// Declaration of empty array
var cars = [];

// Add element to cars with push method
cars.push('Opel', 'BMW', 'Peugeot');
console.log(cars);

// Sorting of array
var numbers = [1, 30, 4, 21, 100000];

numbers.sort(function (a, b) {
  return b - a;
});
console.log(numbers);

// Check if every number in numbers is even
var result = numbers.every(function (number) {
  return number % 2 === 0;
});

console.log(result);

// Forof used with array
for (let i = 0; i <= numbers.length - 1; i++) {
  console.log(numbers[i]);
}
for (const number of numbers) {
  console.log(number);
}

for (const car of cars) {
  console.log(car);
}

// Forin used with objects
console.log(person1);

for (const key in person1) {
  console.log(key + ': ' + person1[key]);
}

// Some built-in Object methods

// Object.keys() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// Log to the console all person1 keys as array
console.log(Object.keys(person1));

// Object.values() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// Log to the console all person1 key values as array
console.log(Object.values(person1));

// Object.entries() : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// Log to the console all person1 key value pairs as array
console.log(Object.entries(person1));

// alert()
// alert('Bonjour');

// confirm()
// var res = confirm('Are you sure you want to continue?');
// console.log(res);

// prompt()
var positveNumber = prompt('Enter a positve number');

// Convert the prompt result from string to number
var posetiveNumberAsNumber = +positveNumber; // or Number(positveNumber)

// Log to the console content of posetiveNumberAsNumber
console.log(posetiveNumberAsNumber);

// Log to the console the type of posetiveNumberAsNumber
console.log(typeof posetiveNumberAsNumber);
