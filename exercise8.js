function pasanganTerbesar(num) {
    // you can only write your code here!
    var numStr = num.toString()
    var check = numStr[0]+numStr[1]

    for(var i=0; i<numStr.length; i++){
        var next = numStr[i]+numStr[i+1]
        if(next>check){
            check = next
        }
    }
    return check
  }
  
  // TEST CASES
  console.log(pasanganTerbesar(641573)); // 73
  console.log(pasanganTerbesar(12783456)); // 83
  console.log(pasanganTerbesar(910233)); // 91
  console.log(pasanganTerbesar(71856421)); // 85
  console.log(pasanganTerbesar(79918293)); // 99