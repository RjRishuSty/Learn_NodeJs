// TODO: what is Module?
// TODO: A module in Node.js is a self-contained block of reusable code that encapsulates functionality and can be easily imported or exported between files. Modules help organize applications into smaller, manageable parts, improving code readability, maintainability, and reusability. Node.js provides built-in core modules, allows developers to create custom modules, and supports third-party modules through npm (Node Package Manager).

// TODO: This is a file. In nodeJs file become (module)

// TODO: This is Default syntex
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}


// TODO: exports with function both----------
// TODO: exports with arrow function. and this function is anonymous function mean this function has no any name;
// exports.add = (a, b) => a + b;
// exports.sub = (a, b) => a - b;


// module.exports = add;
module.exports = { add, sub };

// TODO: This is a file. In nodeJs file become (module)
// TODO: You try to Every moduel will export the keyword is (module.exports = add);

// ----------------------------- require ---------------------------------------

// TODO: Your file is export. but not Import so Your main file there your write ( require('./math.js'))

// ------------------------------ module.exports = {add,sub} -------------------------

// TODO: If you have more function operation then exports mathods is => (module.exports = {add,sub})
