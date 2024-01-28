const quickSort = () => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];

  const left = [];
  const right = [];
  const equal = [];

  for (let element of arr) {
    if (element < pivot) {
      left.push(element);
    } else if (element > pivot) {
      right.push(element);
    } else {
      equal.push(element);
    }
  }

  return [...quickSort(left), ...equal, ...quickSort(right)];
};

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = quickSort(arr);
console.log("Sorted array:", sortedArr);
