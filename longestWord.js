function LongestWord(statement){
    string_array = statement.split(" ")
    var max_count = 0
    var max_string = ""
    for(var i = 0; i < string_array.length; i++ ){
      if (string_array[i].length > max_count){
        max_count = string_array[i].length
        max_string = string_array[i]
      }

    }
    return max_string
}

console.log(LongestWord("str hello hhhhhhhhhh"))
