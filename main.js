// ?Coding challenge:

// ?Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.

// ?Sample input:

// “Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)

// Sample output:

// “experience”

// !Explanation: Longest words are “everything” and “experience”, but the second has the most vowels

// TODO: STEPS FOR THE PROBLEM(METHOD ONE)
// ! VERDICT: FAILED. Regex pattern was not taking.
//  TODO: 1) Initialize variables to keep track of the longest word found and its vowel count(DONE).
//  TODO: 2)Iterate through the input sentence word by word (after splitting it by spaces).(DONE)
//  TODO: 3)For each word, check if it contains only English letters and no other characters (e.g., punctuation or numbers). (DONE)
//  TODO: 4) If the current word passes the character validation, calculate its length and the number of vowels it contains(DONE)
//  TODO: 5) Compare the current word's length with the length of the longest word found so far. If it's longer, update the longest word and its vowel count. If it's of the same length, compare the vowel count and update accordingly.(DONE)
//  TODO: 6) Continue iterating through all words.(DONE)
//  TODO: 7) After the loop, return the longest word found.(DONE)

// * SUCCESS: solution works for all test cases.
// TODO: STEPS FOR THE PROBLEM(METHOD TWO)
//  TODO: 1) Initialize variables to keep track of the longest word found and the maxVowelCount(DONE).
//  TODO: 2)Iterate through the input sentence word by word (after splitting it by spaces).(DONE)
//  TODO: 3) Create a nested function to count the number vowels in a given word(DONE).
//  TODO: 4) Iterate through the word(after splitting the sentence into an array) (DONE)
//  TODO: 5) Calculate the word length and Vowel count.(DONE)
//  TODO: 6) Continue iterating through all words.(DONE)
//  TODO: 7) After the loop, return the longest word found.(DONE)

// SOLUTION
// function findLongestWordWithMostVowels(sentence) {
//   // Initialize longestWord and maxVowelCount
//   let longestWord = "";
//   let maxVowelCount = -Infinity;
//   let maxWordLength = 0;

//   // Split the sentence into words using spaces as the delimiter
//   const words_arr = sentence.split(" ");

//   // Regular expression to match English letters
//   const letterRegex = /^[a-zA-Z]+$/;

//   // Regular expression to match vowels (a, e, i, o, u) case-insensitively
//   // const vowelRegex = /[aeiou]/gi;
//   const vowelRegex = /[aeiou]/i; // !Without the 'g' flag

//   // Iterate through the words of the sentence
//   for (const word of words_arr) {
//     // console.log("the word in words_arr is:", word);

//     // Check if words contain only ENGLISH letters
//     if (letterRegex.test(word)) {
//       // Calculate the word length
//       const wordLength = word.length;

//       // Count the number of vowels in the word
//       // const vowelCount = word.toLowerCase().replace(vowelRegex, "").length;
//       const vowelCount = (word.match(vowelRegex) || []).length;

//       // Compare the current word with the longest word so far.
//       if (
//         wordLength > maxWordLength ||
//         (wordLength === maxWordLength && vowelCount > maxVowelCount)
//       ) {
//         longestWord = word;
//         console.log("The longest word:", longestWord);
//         maxWordLength = wordLength;
//         console.log("The max word length:", maxWordLength);
//         maxVowelCount = vowelCount;
//         console.log("the maximum Vowel Count:", maxVowelCount);
//       }
//     }
//   }
//   // Return the longestWord
//   return longestWord;
// }

// SECOND METHOD(WITH REGEX)
function findLongestWordWithMostVowels(sentence) {
  // Initialize variables to store the result
  let longestWord = "";
  let maxVowelCount = 0;

  // Split the sentence into words using spaces as the delimiter
  const words = sentence.split(" ");

  // Regular expression to match vowels (a, e, i, o, u) case-insensitively
  const vowelRegex = /[aeiou]/gi;

  // Function to count vowels in a word using regex
  function countVowels(word) {
    // finding all the matching vowels within the word
    const matches = word.match(vowelRegex);
    // returning matches of vowels within the word.
    return matches ? matches.length : 0;
  }

  // Iterate through the words of the sentence
  for (const word of words) {
    // Calculate the word length
    const wordLength = word.length;

    // Count the number of vowels in the word using regex
    const vowelCount = countVowels(word);

    // Compare the current word with the longest word so far.
    if (
      wordLength > longestWord.length ||
      (wordLength === longestWord.length && vowelCount > maxVowelCount)
    ) {
      longestWord = word;
      maxVowelCount = vowelCount;
    }
  }

  return longestWord;
}

// TESTING THE FUNCTION

// Original test case
const test_input =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already have all the answers. (Socrates).";

const longestWord = findLongestWordWithMostVowels(test_input);

console.log(" The longest word is: ", longestWord); // Output: "experience"

// Test case: NON-ENGLISH words inside
const test_input_five = "Café au lait is a popular French drink.";

const longestWord_five = findLongestWordWithMostVowels(test_input_five);

console.log("the longest word is:", longestWord_five); // Output: popular

// //TEST CASE: Sentence with most vowels
// const test_input_two = "The quick brown fox jumps over the lazy dog.";

// const longestWord_two = findLongestWordWithMostVowels(test_input_two);

// console.log(" The longest word is: ", longestWord_two); // answer: quick

// // TC: Short-sentence
// const test_input_three = "Hi there!";

// const longestWord_three = findLongestWordWithMostVowels(test_input_three);

// console.log(" The longest word is: ", longestWord_three); // answer: "there"

// // TC:  Longest word with NO Vowels
// const test_input_four = "The crypts of Egypt hide secrets.";

// const longestWord_four = findLongestWordWithMostVowels(test_input_four);

// console.log(" The longest word is: ", longestWord_four);
