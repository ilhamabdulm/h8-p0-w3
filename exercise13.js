function targetTerdekat(arr) {
    // you can only write your code here!
    var locO = 0
    var locX = []
    // cari lokasi O dan X
    for(var i=0; i<arr.length; i++){
        if(arr[i]==='o'){
            locO = i
        }
        if(arr[i]==='x'){
            locX.push(i)
        }
    }
    // console.log(locX, locO)
    // hitung jarak O dan masing2 X
    var arrJarak = []
    for(var i=0; i<locX.length; i++){
        var jarak = locO - locX[i]
        arrJarak.push(Math.abs(jarak))
    }
    // console.log(arrJarak)
    // sorting dari yang terkecil dan kembalikan dari nilai terkecil
    arrJarak.sort()
    if(arrJarak.length == 0){
        return 0
    }else{
        return arrJarak[0]
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat(  ['x', ' ', 'o', 'x', ' ', 'x', ' ', 'x']))