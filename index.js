console.log('Hey! There I am Rishu Raj');

// TODO: Import method but this is node so (require) keyword is used
// const math = require('./math.js');
// TODO: Destructuring require method
const {add,sub} = require('./math.js');

console.log('Math add value  is ',  add(2,4));
console.log('Math sub value is ',  sub(2,4));