// Given a number and a list of numbers in non-decreasing order, find two indices of the list whose values add up to be that number. Write the most efficient code you can think of. Use a language of your preference. If there are no such numbers in the list, report that.

// I used JavaScript to write an efficient code that can provide a proper solution for this problem.

function findIndicesForSum(target, numbers) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const currentSum = numbers[left] + numbers[right];
    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }
  // If no such indices are found
  return null;
}

// Example Usage:
const targetNumber = 10;
const sortedNumbers = [2, 4, 5, 7, 9, 11];

const result = findIndicesForSum(targetNumber, sortedNumbers);
if (result) {
  const [index1, index2] = result;
  console.log(
    `Indices ${index1} and ${index2} have values that add up to ${targetNumber}.`
  );
} else {
  console.log(`No such indices found.`);
}
