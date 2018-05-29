print = console.log
var a
if (a === undefined){
  print('test')
}

user = {
  'test-user' : 'hello'
}

delete(user['test-user'])
print(user)
print(user['test-user'])
