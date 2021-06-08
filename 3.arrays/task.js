function compareArrays(arr1, arr2) {
  let result = (arr1.length == arr2.length) && arr1.every(function(element,index){
    return element === arr2[index];
  })
  
  // Ваш код

  return result; // boolean
}

function advancedFilter(arr) {
  let resultArr = arr.filter(function(element){
    return element > 0 && element % 3 === 0;
  }).map(function(num){
    return num * 10;
  });

  // Ваш код

  return resultArr; // array
}
