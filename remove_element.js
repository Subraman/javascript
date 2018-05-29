function removeElement(arr, ele){
  result_array = []
  for(i = 0; i < arr.length; i++){
    if (arr[i] !== ele){
      result_array.push(arr[i])
    }
  }
  return result_array
}
console.log(removeElement([1, 100, 500], 3));
