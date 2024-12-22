
// Q1
// var removeDuplicates = function(s) {
//     const stack = [];
    
//     for (let char of s) {
//         // If the stack is not empty and the top of the stack matches the current char
//         if (stack.length > 0 && stack[stack.length - 1] === char) {
//             stack.pop(); // Remove the top element (adjacent duplicate)
//         } else {
//             stack.push(char); // Add the current character to the stack
//         }
//     }
    
//     // Join the stack to form the final string
//     return stack.join('');
// };

// // Example usage:
// console.log(removeDuplicates("abbaca")); // Output: "ca"
// console.log(removeDuplicates("azxxzy")); // Output: "ay"
















// Q242 



// var isAnagram = function(s, t) {
//     // If the lengths of the strings are different, they can't be anagrams
//     if (s.length !== t.length) {
//         return false;
//     }
//     // Create a frequency map for counting character occurrences
//     const count = {};

//     // Count characters in string `s`
//     for (let char of s) {
//         count[char] = (count[char] || 0) + 1;
//     }

//     // Subtract character counts based on string `t`
//     for (let char of t) {
//         if (!count[char]) {
//             return false; // If a character doesn't exist or count goes below 0, not an anagram
//         }
//         count[char]--;
//     }
//     return true; // All counts should be zero if they are anagrams
// };


// let s = "anagram" ;
// let t = "nagaram";

// if (s.length !== t.length){
//     console.log(false);
// } else {
//     let countS = {};
//     let countT = {};

//     for(let char of s){
//         countS[char] = (countS[char] || 0) + 1;
//     }

//     for(let char of t){
//         countT[char] = (countT[char] || 0) + 1;
//     }

//     let isAnagram = true;
//     for(let char in countS){
//         if(countS[char] !== countT[char]){
//             isAnagram = false;
//             break;
//         }
//     }

//     console.log(isAnagram);
// }



//  Q349

// var decodeString = function(s) {
//     let stack = []; // Stack to store characters and decoded strings
//     let currentString = ""; // Current working string
//     let currentNumber = 0;  // Current number (multiplier)

//     for (let char of s) {
//         if (!isNaN(char)) {
//             // Build the multiplier number (could be more than one digit)
//             currentNumber = currentNumber * 10 + parseInt(char);
//         } else if (char === "[") {
//             // Push the current string and number onto the stack and reset them
//             stack.push(currentString);
//             stack.push(currentNumber);
//             currentString = "";
//             currentNumber = 0;
//         } else if (char === "]") {
//             // Pop the last number and string from the stack
//             let multiplier = stack.pop();
//             let previousString = stack.pop();
//             // Update the current string by repeating it `multiplier` times
//             currentString = previousString + currentString.repeat(multiplier);
//         } else {
//             // Append the character to the current string
//             currentString += char;
//         }
//     }

//     return currentString;
// };

// let s = "3[a]2[bc]";

// let string = [];
// let currentString = "";
// let currentNum = 0;

// for(let char of s){
//     if(!isNaN(char)){
//         currentNum = currentNum * 10 + parseInt(char);
//     } else if (char === "["){
//         string.push([currentString, currentNum]);
//         currentString = "";
//         currentNum = 0;
//     }else if(char === "]"){
//         let [prevString, repeatTimes] = string.pop();
//         currentString = prevString + currentString.repeat(repeatTimes);
//     }else {
//         currentString += char;
//     }
// }

// console.log(currentString);


// q676

// var reorganizeString = function(s) {
//     // Step 1: Count the frequency of each character
//     let frequency = new Array(26).fill(0);
//     for (let char of s) {
//         frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
//     }
//     let maxFreq = 0, maxCharIndex = 0;
//     for (let i = 0; i < 26; i++) {
//         if (frequency[i] > maxFreq) {
//             maxFreq = frequency[i];
//             maxCharIndex = i;
//         }
//     }
//     // If the most frequent character appears more than (n + 1) / 2 times, return ""
//     if (maxFreq > Math.ceil(s.length / 2)) {
//         return "";
//     }
//     // Step 3: Fill the most frequent character first at even indices
//     let result = new Array(s.length);
//     let idx = 0;
//     while (frequency[maxCharIndex] > 0) {
//         result[idx] = String.fromCharCode(maxCharIndex + 'a'.charCodeAt(0));
//         idx += 2;
//         frequency[maxCharIndex]--;
//     }
//     for (let i = 0; i < 26; i++) {
//         while (frequency[i] > 0) {
//             if (idx >= result.length) {
//                 idx = 1; // Switch to odd indices after filling even indices
//             }
//             result[idx] = String.fromCharCode(i + 'a'.charCodeAt(0));
//             idx += 2;
//             frequency[i]--;
//         }
//     }

//     return result.join("");
// };

// // Test with input s = "aab"
// console.log(reorganizeString("aab")); // Output: "aba"




// // Q33 

// function search(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) return mid;

//         // Check which half is sorted
//         if (nums[left] <= nums[mid]) {
//             // Left half is sorted
//             if (nums[left] <= target && target < nums[mid]) {
//                 right = mid - 1; // Target is in the left half
//             } else {
//                 left = mid + 1; // Target is in the right half
//             }
//         } else {
//             // Right half is sorted
//             if (nums[mid] < target && target <= nums[right]) {
//                 left = mid + 1; // Target is in the right half
//             } else {
//                 right = mid - 1; // Target is in the left half
//             }
//         }
//     }
//     return -1; // Target not found
// }
// // Example Test Cases
// const nums = [4, 5, 6, 7, 0, 1, 2];
// const target1 = 0; // Expected output: 4
// const target2 = 3; // Expected output: -1

// console.log(search(nums, target1)); // 4
// console.log(search(nums, target2)); // -1




// // Q11

// function maxArea(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let maxWater = 0;

//     while (left < right) {
//         // Calculate the area
//         const width = right - left;
//         const minHeight = Math.min(height[left], height[right]);
//         const currentArea = width * minHeight;

//         // Update maximum area
//         maxWater = Math.max(maxWater, currentArea);

//         // Move the pointer pointing to the smaller height
//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }

//     return maxWater;
// }

// // Example Test Cases
// const height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]; // Expected output: 49
// const height2 = [1, 1]; // Expected output: 1

// console.log(maxArea(height1)); // 49
// console.log(maxArea(height2)); // 1





// Q134

// function canCompleteCircuit(gas, cost) {
//     let totalGas = 0;
//     let currentGas = 0;
//     let startStation = 0;

//     for (let i = 0; i < gas.length; i++) {
//         totalGas += gas[i] - cost[i];
//         currentGas += gas[i] - cost[i];

//         if (currentGas < 0) {
//             // Reset the starting station and current gas
//             startStation = i + 1;
//             currentGas = 0;
//         }
//     }

//     return totalGas >= 0 ? startStation : -1;
// }

// // Example Test Cases
// const gas1 = [1, 2, 3, 4, 5];
// const cost1 = [3, 4, 5, 1, 2]; // Expected output: 3

// const gas2 = [2, 3, 4];
// const cost2 = [3, 4, 3]; // Expected output: -1

// console.log(canCompleteCircuit(gas1, cost1)); // 3
// console.log(canCompleteCircuit(gas2, cost2)); // -1


// Q1


// function twoSum(nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];

//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set(nums[i], i);
//     }

//     return [];
// }

// // Example Test Cases
// const nums1 = [2, 7, 11, 15];
// const target1 = 9; // Expected output: [0, 1]

// const nums2 = [3, 2, 4];
// const target2 = 6; // Expected output: [1, 2]

// console.log(twoSum(nums1, target1)); // [0, 1]
// console.log(twoSum(nums2, target2)); // [1, 2]




// function threeSum(nums) {
//     const result = [];
//     nums.sort((a, b) => a - b); // Sort the array

//     for (let i = 0; i < nums.length - 2; i++) {
//         if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for the first number

//         let left = i + 1;
//         let right = nums.length - 1;

//         while (left < right) {
//             const sum = nums[i] + nums[left] + nums[right];

//             if (sum === 0) {
//                 result.push([nums[i], nums[left], nums[right]]);
//                 left++;
//                 right--;

//                 // Skip duplicates for the second and third numbers
//                 while (left < right && nums[left] === nums[left - 1]) left++;
//                 while (left < right && nums[right] === nums[right + 1]) right--;
//             } else if (sum < 0) {
//                 left++;
//             } else {
//                 right--;
//             }
//         }
//     }

//     return result;
// }

// // Example Test Cases
// const nums1 = [-1, 0, 1, 2, -1, -4]; // Expected output: [[-1, -1, 2], [-1, 0, 1]]
// const nums2 = []; // Expected output: []
// const nums3 = [0, 0, 0]; // Expected output: [[0, 0, 0]]

// console.log(threeSum(nums1)); // [[-1, -1, 2], [-1, 0, 1]]
// console.log(threeSum(nums2)); // []
// console.log(threeSum(nums3)); // [[0, 0, 0]]



// Q9


// function isPalindrome(x) {
//     // Negative numbers or numbers ending with 0 (except 0 itself) cannot be palindromes
//     if (x < 0 || (x % 10 === 0 && x !== 0)) {
//         return false;
//     }

//     let reversed = 0;
//     let original = x;

//     // Reverse the number
//     while (x > 0) {
//         reversed = reversed * 10 + (x % 10);
//         x = Math.floor(x / 10);
//     }

//     // Check if the reversed number is equal to the original number
//     return reversed === original;
// }

// // Example Test Cases
// console.log(isPalindrome(121)); // Expected output: true
// console.log(isPalindrome(-121)); // Expected output: false
// console.log(isPalindrome(10)); // Expected output: false
// console.log(isPalindrome(0)); // Expected output: true



// Q53


// function maxSubArray(nums) {
//     let maxSum = nums[0];
//     let currentSum = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         // Update the current sum: either include the current element or start fresh from the current element
//         currentSum = Math.max(nums[i], currentSum + nums[i]);

//         // Update the max sum if the current sum is greater
//         maxSum = Math.max(maxSum, currentSum);
//     }

//     return maxSum;
// }

// // Example Test Cases
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // Expected output: 6
// console.log(maxSubArray([1])); // Expected output: 1
// console.log(maxSubArray([5, 4, -1, 7, 8])); // Expected output: 23





// EXAM

// 1. String Reversal

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// // Test
// console.log(reverseString("hello")); // Output: "olleh"


// // 2. Anagram Check

// function areAnagrams(str1, str2) {
//     if (str1.length !== str2.length) return false;

//     const count = {};
//     for (let char of str1) {
//         count[char] = (count[char] || 0) + 1;
//     }
//     for (let char of str2) {
//         if (!count[char]) return false;
//         count[char]--;
//     }
//     return true;
// }

// // Test
// console.log(areAnagrams("listen", "silent")); // Output: true
// console.log(areAnagrams("hello", "world"));   // Output: false


// 3. Array Intersection

// function arrayIntersection(arr1, arr2) {
//     const set1 = new Set(arr1);
//     const result = [];
//     for (let num of arr2) {
//         if (set1.has(num)) {
//             result.push(num);
//             set1.delete(num);
//         }
//     }
//     return result;
// }

// // Test
// console.log(arrayIntersection([1, 2, 2, 3], [2, 3, 4])); // Output: [2, 3]



// 4. String Palindrome (Ignoring Non-Alphanumeric Characters)

// function isPalindrome(str) {
//     const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return cleanStr === cleanStr.split('').reverse().join('');
// }

// // Test
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
// console.log(isPalindrome("hello")); // Output: false



// 5. Array Rotation

// function rotateArray(arr, k) {
//     k %= arr.length;
//     return arr.slice(-k).concat(arr.slice(0, -k));
// }

// // Test
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // Output: [4, 5, 1, 2, 3]



// 6. String Compression

// function compressString(str) {
//     let compressed = '';
//     let count = 1;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             compressed += str[i] + count;
//             count = 1;
//         }
//     }
//     return compressed.length < str.length ? compressed : str;
// }

// // Test
// console.log(compressString("aabcccccaaa")); // Output: "a2b1c5a3"
// console.log(compressString("abc")); // Output: "abc"


// 7. Array Sum

// function findPairWithSum(arr, target) {
//     const seen = new Set();
//     for (let num of arr) {
//         const complement = target - num;
//         if (seen.has(complement)) {
//             return [complement, num];
//         }
//         seen.add(num);
//     }
//     return [];
// }

// // Test
// console.log(findPairWithSum([2, 7, 11, 15], 9)); // Output: [2, 7]
// console.log(findPairWithSum([1, 2, 3, 4], 8)); // Output: []


// 8. Longest Substring Without Repeating Characters

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const seen = new Map();

    for (let end = 0; end < s.length; end++) {
        if (seen.has(s[end]) && seen.get(s[end]) >= start) {
            start = seen.get(s[end]) + 1;
        }
        seen.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

// Test
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3