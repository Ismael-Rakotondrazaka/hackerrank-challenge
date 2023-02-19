// help from https://www.nayuki.io/page/next-lexicographical-permutation-algorithm

function biggerIsGreater(w = "") {
  // Write your code here
  let result = "no answer";
  let length = w.length;
  let arr = w.split("");

  // find the longest non-increasing suffix
  let i = length - 1;
  while (i > 0 && arr[i - 1].localeCompare(arr[i]) >= 0) i--;

  // only works if it is not the last permutation
  if (i > 0) {
    // the pivot
    const pivot = arr[i - 1];

    // find the rightmost element than the pivot in the suffix
    let j = length - 1;
    while (arr[j] <= pivot) j--;

    // swap i and j
    const temp = arr[j];
    arr[j] = pivot;
    arr[i - 1] = temp;

    // reverse the suffix, starting at arr[i]
    let k = length - 1;
    while (i < k) {
      const temp = arr[i];
      arr[i] = arr[k];
      arr[k] = temp;
      i++;
      k--;
    }

    result = arr.join("");
  }

  return result;
}

console.log(biggerIsGreater("dhck"));
console.log(biggerIsGreater("fedcbabdc"));
console.log(biggerIsGreater("dcba"));