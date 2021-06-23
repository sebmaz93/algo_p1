/** accepts sorted array of integers and must find first pair that sum of them is 0 */
function sumZero(arr: number[]): number[] | void {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-5, -3, -2, -1, 0, 1, 4, 5, 6]));
console.log(sumZero([-3, -1, 4, 6]));

/** accepts sorted array of integres must return the unique values count */
function findUniqueValues(arr: number[]) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(findUniqueValues([1, 1, 2, 3, 4, 5, 6, 7, 7, 8]));
console.log(findUniqueValues([]));
