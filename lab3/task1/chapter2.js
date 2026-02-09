//Task1
alert("Hello World!")
//Task 2
let admin , name;
name =  "John";
admin = name;
alert(admin)
//Task 3
let ourPlanetName = "Earth";
let currentUserName = "John";
//Task 4
name = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya
//Task 5
name = prompt("What is your name?", "");
alert(name);
//Task 6
let a = 1, b = 1;

let c = ++a; // 2
let d = b++; // 1
//Task 7
a = 2; // 4
let x = 1 + (a *= 2);// 5

//Task 8
a = +prompt("First number?", 1);
b = +prompt("Second number?", 2);

alert(a + b); // 12
//Task 9
5 > 4 // True
"apple" > "pineapple" //false
"2" > "12" //true
undefined == null //true
undefined === null //false
null == "\n0\n" //false
null === +"\n0\n" //false

//Task 10
value = prompt('What is the "official" name of JavaScript?', '');

if (value == 'ECMAScript') {
    alert('Right!');
    } else {
        alert("You don't know? ECMAScript!");
    }
//Task 11
value = prompt('Type a number', 0);

if (value > 0) {
  alert( 1 );
} else if (value < 0) {
  alert( -1 );
} else {
  alert( 0 );
}

//Task 12
let result = (a + b < 4) ? 'Below' : 'Over';

//Task 13
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';

//Task 14
alert( null || 2 || undefined ); // 2

//Task 15
alert( alert(1) || 2 || alert(3) ); // first 1 , then 2

//Task 16
alert( 1 && null && 2 ); // null

//Task 17
alert( alert(1) && alert(2) ); //first 1 , then NaN

//Task 18
if (-1 || 0) alert( 'first' ); // first
if (-1 && 0) alert( 'second' ); // nothing 
if (null || -1 && 1) alert( 'third' ); //third

//Task 19
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}

//Task 20
let i = 3;

while (i) {
  alert( i-- );
} // answer = 1

//Task 21
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    alert( i );
  }
}

//Task 22
i = 0;
while (i < 3) {
  alert( `number ${i}!` );
  i++;
}

//Task 23
let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

//Task 24
let n = 10;

nextPrime:
for (let i = 2; i <= n; i++) { // for each i...

  for (let j = 2; j < i; j++) { // look for a divisor..
    if (i % j == 0) continue nextPrime; // not a prime, go next i
  }

  alert( i ); // a prime
}

//Task 25
if(browser == 'Edge') {
  alert("You've got the Edge!");
} else if (browser == 'Chrome'
 || browser == 'Firefox'
 || browser == 'Safari'
 || browser == 'Opera') {
  alert( 'Okay we support these browsers too' );
} else {
  alert( 'We hope that this page looks ok!' );
}
//Task 26
a = +prompt('a?', '');

switch (a) {
  case 0:
    alert( 0 );
    break;

  case 1:
    alert( 1 );
    break;

  case 2:
  case 3:
    alert( '2,3' );
    break;
}

//Task 27
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    // ...
    return confirm('Did parents allow you?');
  }
}

//Task 28
function checkAge(age){
  return (age > 18) ? true : confirm("Did your parents allow you?")
}
function checkAge(age) {
  return (age > 18) || confirm('Did parents allow you?');
}

//Task 29
function min(a,b){
  if (a < b){
    return a;
  }else{
    return b;
  }
}
function min(a, b) {
  return a < b ? a : b;
}

//Task 30
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

x = prompt("x?", '');
n = prompt("n?", '');

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert( pow(x, n) );
}

//Task 31
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);