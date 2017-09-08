// INTERMEDIATE JAVASCRIPT ASSESSMENT
// PART 3

// *************
// * PROBLEM 1 *
// *************

// For this question, you are asked to make a function called 'callBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the update function
// with the animal as the context, and 'Trogdor' as a parameter.
// return the result of your updateAnimal invocation

var callBinding = function(magicAnimals, updateAnimal, id) {
  console.log(magicAnimals)
  this.id = id;
  for (var i=0; i<magicAnimals.length; i++) {
    console.log("basic stuff")
    for (var key in id) {
      console.log("stops working here")
      if (magicAnimals[i][key] === magicAnimals[i].id) {
        console.log("you're doing something")
        updateAnimal.magicAnimals('Trogdor');
      }
    }
  }
  return magicAnimals;
}



// *************
// * PROBLEM 2 *
// *************

// For this question, you are asked to make a function called 'applyBinding'.
// This function will take in 3 parameters:
// magicAnimals (Array), updateAnimal (Function), id (Number).
// Find the animal that matches the given id, then call the function
// with the context of the animal, and the array ['being majestic', 'eating rainbows'] as a parameter.
// return the result of your updateAnimal invocation

var applyBinding =  function(magicAnimals, updateAnimal, id) {
  //console.log(updateAnimal)
  for (var key in id) {
    if (magicAnimals[key] === magicAnimals[id]) {
      updateAnimal(['being majestic', 'eating rainbows']);
    }
  }
  //console.log(magicAnimals)
  return magicAnimals;
}



// *************
// * PROBLEM 3 *
// *************

// For this question, you are asked to make a function called 'promiseMe'.
// This function will take in 1 parameter:
// $q (Custom promise object).
// NOTE: $q is an injected library, that works like angular's $q object.
// promiseMe will be invoked by a test and the test will expect a promise back.
// In your function, create a custom promise, then create a timeout with a duration of 20 ms.
// The timeout function should update the variable foo (seen below) to equal 'bar'.
// After the timeout is completed, the promise should be resolved with the new updated foo variable.
// NOTE: Manually invoking your function here will alter the 'foo' variable before tests run, causing them to fail.

var foo;

var promiseMe = function($q) {
  var promise = new Promise(function(resp, rej) {
    setTimeout(function() {
      resp('bar');
    }, 20);
  })
  return promise;
}



// *************
// * PROBLEM 4 *
// *************

// For this question, you are asked to make a function called 'emailList'.
// This function will take in 2 parameters:
// $q (Custom promise object), $http (Custom request function).
// NOTE: $http is a function created to simulate the angular $http.
// Set up your custom promise, then make a GET request using $http to '/api/users'.
// Make an array of emails (array of strings) from the returned data (You will need to console log or debug to figure this out),
// and then resolve the array as you complete your promise.

var emailList = function($q, $http) {
  var promise = new Promise(function(resp, rej) {
    $http.get('/api/users').then(function() {
      return $q;
    })
  })
  return promise;
}
