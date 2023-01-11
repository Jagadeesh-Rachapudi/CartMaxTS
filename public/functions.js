export function countAndRemoveDuplicates(arr) {
  let count = {};
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!count[arr[i]]) {
      count[arr[i]] = 1;
      newArr.push(arr[i]);
    } else {
      count[arr[i]] += 1;
    }
  }
  return { count: count, newArr: newArr };
}
