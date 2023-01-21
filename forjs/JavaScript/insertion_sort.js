const insertion_sort = (ar) => {
  const arLength = ar.length;
  for (let i = 0; i < arLength; i++) {
    const current = ar[i];
    let j = i - 1;
    while (j >= 0 && ar[j] > current) {
      ar[j + 1] = ar[j];
      j -= 1;
    }
    ar[j + 1] = current;
  }
  return ar;
};
console.log(insertion_sort([5, 4, 3, 2, 1, 11]));
