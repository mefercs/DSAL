function bubbleSort2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1])
        [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Using ES6 array destructuring to swap
    }
  }
  return array;
}

function bubbleSort(arr){
  for(let i=0;i<arr.length;i++){
    for(let j =0 ; j<arr.length-1-i;j++){ 
      if( arr[j]>arr[j+1] ){ 
        [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
      }
    }
  }
  return arr
}

console.log(bubbleSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]));
console.log(bubbleSort([5,4,3,2,1]));

