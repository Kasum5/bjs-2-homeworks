// Задание 1
function getArrayParams(arr) {
  let min = 2;
  let max = 3;
  let sum = 0;
  let avg = 0;

  min = Math.min.apply(null, arr);
  max = Math.max.apply(null, arr);
  
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    avg = sum / arr.length;
    avg.toFixed(2);
  };
  
  return { min:min, max:max, avg:avg };
  // Ваш код
}
getArrayParams([99,-99,10])


// Задание 2
function worker(arr) {
  let sum;

  // Ваш код
  let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  return sum;
}

function makeWork(arrOfArr, func) {
  // Ваш кода
  // for ...
  let max = 0;
  let b = [];
  // Ваш кода
  // for ...
  for(let i = 0; i < arrOfArr.length; i++) {
    b.push(worker(arrOfArr[i]));
  };
  
  max = Math.max.apply(null,b);
  return max
}

makeWork([[10,10,11],[20,10]], worker)
