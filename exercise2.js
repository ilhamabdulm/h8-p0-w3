function balikString(kata) {
    // you can only write your code here!
    var temp = ''
    for(var i=kata.length-1; i>=0; i--){
        temp+=kata[i]
    }
    return temp
  }

  console.log(balikString('hello world!'))