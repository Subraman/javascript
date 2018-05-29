function repeatString(str, count){
  var i = 0;
  var resultString = ''
  while (i < count){
    resultString = resultString + str
    i = i + 1
  }
  console.log(resultString)
}
console.log(repeatString('hello', 5))
