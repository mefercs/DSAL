const binary_search = (arr, value) => {
  let result = [];
  let start = 0;
  let end = arr.length - 1;
  let mid = Math.floor((end - start) / 2);
  while (start <= end) {
    result.push(arr[mid]);
    if (value == arr[mid]) return result;
    if (value < arr[mid]) end = mid - 1;
    if (value > arr[mid]) start = mid + 1;
    mid = Math.floor( ((end-start)/2)+start )
  }

  return "Value Not Found";
};


console.log( binary_search([1,2,3,4,5,6,7],7) )
