/** a function accepts 2 arrays of integers and return true if it has corresponding squared value in 2nd array */
function same(arr1: number[], arr2: number[]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[parseInt(key) ** 2]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 4, 6], [1, 16, 36]));
console.log(same([1, 2, 3], [3, 5, 29]));

/** anagram checker accepts 2 strings and return true or false if its anagram or not */
function isAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) {
    return false;
  }

  const lookup: { [key: string]: number } = {};

  for (let i = 0; i < str1.length; i++) {
    const letter = str1[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    const letter = str2[i];
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}

console.log(isAnagram('rat', 'art'));
console.log(isAnagram('fuzzy', 'zyfuu'));
