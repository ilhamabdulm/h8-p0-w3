function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    var splitStr = kalimat.split(' ')
    // console.log(splitStr)
    var final = []
    for(var i=0; i<splitStr.length; i++){
      if(splitStr[i]!==''){
        final.push(splitStr[i])
      }else{
        continue
      }
    }
    // console.log(final)
    return final.length
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a  dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5