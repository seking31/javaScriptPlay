// Learning Functional Programming with Javascript
// Chapter 02, Video 05, Exercise 01

function createSafeVersion(func){
  return function(n, message){
    if (n != null && typeof n === 'number') {
      if (message != null && typeof message === 'string') {
        return func(n, message)
      }
    }
  }
}

function printMessageNTimes(n, message) {
      for (var i = 0; i < n; i++) { console.log(message) }
}

function getNthLetter(n, string) {
      return string.charAt(n)
}

function getSubstringOfLength(n, string) {
      return string.substring(0, n)
}

var printMessageNTimesSafe = createSafeVersion(printMessageNTimes) // prints "Banana Banana Banana Banana"
var getNthLetterSafe = createSafeVersion(getNthLetter) // 'v'
var getSubstringOfLengthSafe = createSafeVersion(getSubstringOfLength) // "Hello"

printMessageNTimesSafe(4, "Banana")
getNthLetterSafe(2, "Javascript")
getSubstringOfLengthSafe(5, "Welcome")
