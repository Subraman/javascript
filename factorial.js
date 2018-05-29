function factorial(n){
  var i = 0;
  var f = 1
  while (i < n){
    f = f * i
    i = i + 1
  }

return f
}
console.log(factorial(3))
