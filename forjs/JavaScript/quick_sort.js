const partition = (arr, low, high) => {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
};

function quick_sort(arr, low, high) {
  if (!low) low = 0;
  if (!high) high = arr.length - 1;

  if (low < high) {
    let pi = partition(arr, low, high);
    quick_sort(arr, low, pi - 1);
    quick_sort(arr, pi + 1, high);
  }
}

function quickSort(array){
  quick_sort(array)
  return array
}
let array = [5,4,3,2,1]
console.log(quickSort(array));
