
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

var reorganizeString = function(s) {
    // Step 1: Count the frequency of each character
    let frequency = new Array(26).fill(0);
    for (let char of s) {
        frequency[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
    let maxFreq = 0, maxCharIndex = 0;
    for (let i = 0; i < 26; i++) {
        if (frequency[i] > maxFreq) {
            maxFreq = frequency[i];
            maxCharIndex = i;
        }
    }
    // If the most frequent character appears more than (n + 1) / 2 times, return ""
    if (maxFreq > Math.ceil(s.length / 2)) {
        return "";
    }
    // Step 3: Fill the most frequent character first at even indices
    let result = new Array(s.length);
    let idx = 0;
    while (frequency[maxCharIndex] > 0) {
        result[idx] = String.fromCharCode(maxCharIndex + 'a'.charCodeAt(0));
        idx += 2;
        frequency[maxCharIndex]--;
    }
    for (let i = 0; i < 26; i++) {
        while (frequency[i] > 0) {
            if (idx >= result.length) {
                idx = 1; // Switch to odd indices after filling even indices
            }
            result[idx] = String.fromCharCode(i + 'a'.charCodeAt(0));
            idx += 2;
            frequency[i]--;
        }
    }

    return result.join("");
};

// Test with input s = "aab"
console.log(reorganizeString("aab")); // Output: "aba"
