var names = ['Juh', 'John', 'Jane'];

names.forEach(function(name) {
  console.log('forEach', name);
});

console.log('-------------------');

// multiple lines
names.forEach((name) => {
  console.log('arrow', name);
});

console.log('-------------------');

// one line
names.forEach((name) => console.log(name));

console.log('-------------------');

var returnMe = (someText) => someText + '!';
console.log(returnMe('Testing'));

console.log('-------------------');

var person = {
  name: 'Juliana',
  greet: function() {
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
};

person.greet();

console.log('-------------------');

/********************************/
/******** Challenge Area ********/
/********************************/

// normal function
function add(a, b) {
  return a + b;
}

console.log('add', add(1,2));
console.log('add',add(9,0));

console.log('-------------------');

// addStatement
var addStatement = (a, b) => {
  return a + b;
};

console.log('addStatement', addStatement(2,3));
console.log('addStatement', addStatement(7,1));

console.log('-------------------');

// addExpression
var addExpression = (a, b) => a + b;

console.log('addExpression', addExpression(1,1));
console.log('addExpression', addExpression(3,8));

/*********************************/
/***** End of Challenge Area *****/
/*********************************/
