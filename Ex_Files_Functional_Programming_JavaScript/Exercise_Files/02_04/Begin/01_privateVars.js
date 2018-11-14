// Learning Functional Programming with Javascript
// Chapter 02, Video 04, Exercise 01

function createCounter(count) {

  return {
    increment: function(){
      count = count + 1
    },
    currentValue: function() {
      return count
    }
  }
}

var myCounter = createCounter(5)

console.log(myCounter.currentValue())

myCounter.increment()
myCounter.increment()

console.log(myCounter.currentValue())

console.log(myCounter.currentValue())
