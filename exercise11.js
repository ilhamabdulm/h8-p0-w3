function tentukanDeretAritmatika(arr) {
    // you can only write your code here!
    var check = arr[1]-arr[0]
    var flag = true
    for(var i=0; i<arr.length-1; i++){
        // console.log(arr[i+1]-arr[i])
        if((arr[i+1]-arr[i])!==check){
            flag = false
            break
        }else{
            flag = true
        }
    }
    return flag
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([1, 3, 1, 3])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false