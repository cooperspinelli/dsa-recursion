/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {
  if (left + 1 >= right) return arr[left] === val;

  const mid = Math.ceil((right + left) / 2);

  if (arr[mid] === val) return true;
  else if (arr[mid] < val) {
    return binarySearch(arr, val, mid + 1, right);
  } else {
    return binarySearch(arr, val, left, mid);
  }
}

export { binarySearch };