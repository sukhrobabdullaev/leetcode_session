function binary_search(arr, target) {
  let low = 0;
  let high = arr.length - 1; // 9
  let mid;
  while (low <= high) {
    mid = low + Math.floor((high - low) / 2);
    console.log(mid); // 4

    if (arr[mid] == target) return mid;
    if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;

    return -1;
  }
}
console.log(binary_search([2, 5, 8, 12, 16, 23, 38, 56, 72, 91], 23));
