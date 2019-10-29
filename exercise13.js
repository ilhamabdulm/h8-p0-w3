function targetTerdekat(arr) {
    // you can only write your code here!
    var locO = 0
    var locX = 0
    var newArr = []

    // mengetahui posisi x dan o hingga yang terjauh
    for(var i=0; i<arr.length; i++){
        if(arr[i]=='o'){
            locO = i
        }else if(arr[i]=='x'){
            locX = i
        }
    }
    // Mengatur array baru dengan X terdekatnya
    if(locO>locX){
        var temp = arr.slice(locX,locO+1)
        for(var i=temp.length-1; i>=0; i--){
            newArr.push(temp[i])
        }
    }else{
        newArr = (arr.slice(locO,locX))
    }
    // Mengambil indeks 'x' yang paling dekat sebagai jarak
    var jarak = 0
    for(var i=0; i<newArr.length; i++){
        if(newArr[i]=='x'){
            jarak = i
            break
        }
    }
    
    return jarak
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2