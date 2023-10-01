/** product: calculate the product of an array of numbers. */
//product([2, 3, 4])   // 24

function product(nums) {

  //base case should always have an if condition
  if(nums.length === 0) return 0;

  //normal case
  return (nums[0] * product(nums.slice[1]));
// called the function within the function body. This is a recursion function.
// took the first number in the array nums[0] and multiplied it by all the other numbers in the array with nums slice starting at index of 1. 

}


/** longest: return the length of the longest word in an array of words. */

function longest(words) {


}

/** everyOther: return a string with every other letter. */
// longest(["hello", "hi", "hola"])  // 5
function everyOther(str) {

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
