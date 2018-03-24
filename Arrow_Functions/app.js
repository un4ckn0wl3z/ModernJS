// const sayHello = function(){
//   console.log('Hello');
// }


// const sayHello = () => {
//   console.log('Hello');
// }

// One line func
// const sayHello = () => console.log('Hello');

// One line func ret
// const sayHello = () => 'Hello';

// const sayHello = function(){
//   return 'Hello';
// }

// Ret Obj
// const sayHello = () => ({ msg: "Hello"});
// console.log(sayHello());

// const sayHello = name => console.log("Hello " + name);

// Multi param
// const sayHello = (firstName,LastName) => console.log("Hello " + firstName + " " + LastName);
// sayHello('Anuwat','AK');


const users = ['Anuwat','Chatchai','Pansa','Surachai'];

// const nameLengths = users.map(function(name){
//   return name.length;
// });


// Shorter
// const nameLengths = users.map((name) => {
//   return name.length;
// });

// Shortest

const nameLengths = users.map(name => name.length);

console.log(nameLengths);