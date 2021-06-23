/** write a function that acceepts an array of positive integres and number called n,
 *  calculate the maximum sum of n consecutive elements in the array
 */
function maxSubarraySum(arr: number[], n: number): number | null {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < n) return null;

  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubarraySum([1, 4, 2, 5, 6, 2, 5, 7, 9], 4));
