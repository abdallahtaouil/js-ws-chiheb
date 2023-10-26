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
var key = 'age';
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
