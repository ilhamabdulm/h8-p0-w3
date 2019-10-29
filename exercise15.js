function groupAnimals(animals) {
    // you can only write your code here!
    var hasil = [];
    var min = '';
    var arrLen = animals.length;
    //animals.sort();
    while(arrLen>0){
        var max = 'z'
        var temp = []
        for(var i=0; i<animals.length; i++){
            if(animals[i][0]<max && animals[i][0]>min){
                max = animals[i][0]
            }
        }

        min = max
        for(var i=0; i<animals.length; i++){
            if(animals[i][0]==min){
                temp.push(animals[i])
                arrLen--
            }
        }
        hasil.push(temp)
    }
    return hasil
  }
  
  // TEST CASES
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]