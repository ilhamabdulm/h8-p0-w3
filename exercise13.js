function targetTerdekat(arr) {
    // you can only write your code here!
    var locO = 0
    var locX = 0

    for(var i=0; i<arr.length; i++){
        if(arr[i]==='o'){
            locO = i
        }
    }
    for(var i=0; i<arr.length; i++){
        if(arr[i]==='x'){
            locX = i
            break
        }
    }
    // console.log(locX)
    var newArr = []
    if(locO>locX){
        newArr = arr.slice(locX, locO+1)
        newArr.reverse()
    }else if(locO<locX){
        newArr = arr.slice(locO, locX+1)
    }
    // console.log(newArr)
    if(newArr.indexOf('x')==-1){
        return 0
    }else{
        return newArr.indexOf('x')
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
  console.log(targetTerdekat( [' ', 'x', 'o', ' ', ' ', 'x', ' ', 'x']))