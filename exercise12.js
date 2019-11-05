function tentukanDeretGeometri(arr) {
    // you can only write your code here!
    var check = arr[1]/arr[0]
    var flag = true
    for(var i=0; i<arr.length-1; i++){
        // console.log(arr[i+1]-arr[i])
        if((arr[i+1]/arr[i])!==check){
            flag = false
            break
        }else{
            flag = true
        }
    }
    return flag
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([1, 2, 1, 2])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false