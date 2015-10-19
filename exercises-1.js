

/**
 * Part I: use any of the looping methods discussed in class
 *
 * 1. for loop,
 * 2. Array.forEach,
 * 3. custom forEach
 *
 * to complete the following problems
 */

// 0. write your own forEach() that takes two arguments: an array, and a callback

function forEach(array, callback){
    for (var i = 0; i < array.length; i++) {
       callback(array[i]);
    };
    return;
}
// Note to self: callbacks are closures and have access to the containing function's scope, so the callback function can access the containing function's variables, and even the variables from the global scope.
// Note to self: When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function.
// Reference: http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/

// testing your code with console.assert
var total = 1;
forEach([1, 2, 3, 4], function(a){ total *= a; });

// and finally assert; if this fails, the program stops
console.assert(total === 24);


// 1. calculate the sum of numbers (returns the sum (A NUMBER))

function sum(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var sumTot = 0;
    forEach(args, function(a){
      sumTot += parseInt(a);
    });
    return sumTot;
}

console.assert( sum(1, 2, 3, 4, 5) === 15 );

// 2. calculate the average of numbers (returns the average (A NUMBER))

function average(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var avgTot = 0;
    forEach(args, function(a){
      avgTot += a;
    });
    return avgTot / args.length;
}

console.assert( average(2, 4, 6, 8) === 5 );

// 3. find the largest number of the inputs (returns the largest input (A NUMBER))

function largest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    // Reference: Thanks to Yamaha32088 for the non-exact solution, an example.
    // Reference: http://stackoverflow.com/questions/13794225/finding-largest-integer-in-array-javascript
    var lrg = 0;
    forEach(args, function(a){
      if (a > lrg) {
        lrg = a;
      }
    });
    return lrg;
}

console.assert( largest(2, 4, 6, 8) === 8 );

// 4. find the longest string of the inputs (returns the longest input (A STRING))

function longest(){
    // parse arguments into an array
    var args = [].slice.call(arguments);

    // .. do something with each element of args
    // YOUR CODE HERE
    var long = "";
    forEach(args, function(a){
      if (a.length > long.length) {
        long = a;
      }
    });
    return long;
}

 console.assert( longest("this", "is", "a", "awesome", "function") === "function" );

/**
 * PART II
 *
 * For each of the following Array methods,
 *
 * 1. use them in an example
 * 2. write a console.assert to test them
 */

// .sort()

// .concat()

// .indexOf()

// .split()

// .join()

// .pop()

// .push()

// .slice()

// .splice()

// .shift()

// .unshift()

// .filter()

// .map()
