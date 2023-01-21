const mergeSort = (arr) => {
  if (arr.length > 1) {
    let result = [];
    let mid = Math.ceil(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid, arr.length));
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        result.push(left[i]);
        i += 1;
      } else {
        result.push(right[j]);
        j += 1;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i += 1;
    }
    while (j < right.length) {
      result.push(right[j]);
      j += 1;
    }
    return result;
  } else {
    return arr;
  }
};

console.log(mergeSort([5, 4, 3, 2, 1]));
