// Learning Functional Programming with Javascript
// Chapter 03, Video 04, Exercise 01
var _ = requite("lodash")

var numbers = [ 2, 4, 6, 8, 10, 12 ]

var arrayContainsEven = _.some(numbers, function(element){
  return element % 2 === 0
})

var arrayContainsAllEven = _.every(numbers, function(element){
  return element % 2 === 0
})
