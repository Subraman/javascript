print = console.log
function countWords(statment){
  words_count = {}

  print(words_count['hello'])
  words = statment.split(" ")
  print(words)
  for (i in words){

    word = words[i]
    if (words_count[word]){
      words_count[word] = words_count[word] + 1
    }else{
      words_count[word] = 1
    }
  }
  return words_count
}
countWords('test test hello hello h i u o')
