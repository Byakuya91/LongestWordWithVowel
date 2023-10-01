// ?Coding challenge:

// ?Given a sentence with multiple lowercase words separated by spaces, write a Javascript function that finds and returns the longest word in the sentence. If there are multiple words of the same length, choose one that has the highest number of vowels. Ignore any character in the sentence that is not an English letter or a space. Find the most efficient way to achieve this.

// ?Sample input:

// “Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers” (Socrates)

// Sample output:

// “experience”

// !Explanation: Longest words are “everything” and “experience”, but the second has the most vowels

// TODO: STEPS FOR THE PROBLEM
//  TODO: 1) Initialize variables to keep track of the longest word found and its vowel count(DONE).
//  TODO: 2)Iterate through the input sentence word by word (after splitting it by spaces).(DONE)
//  TODO: 3)For each word, check if it contains only English letters and no other characters (e.g., punctuation or numbers). (DONE)
//  TODO: 4) If the current word passes the character validation, calculate its length and the number of vowels it contains(DONE)
//  TODO: 5) Compare the current word's length with the length of the longest word found so far. If it's longer, update the longest word and its vowel count. If it's of the same length, compare the vowel count and update accordingly.
//  TODO: 6) Continue iterating through all words.
//  TODO: 7) After the loop, return the longest word found.

// SOLUTION
function findLongestWordWithMostVowels(sentence) {
  // Initialize longestWord and maxVowelCount
  let longestWord = "";
  let maxVowelCount = 0;

  // Split the sentence into words using spaces as the delimiter
  const words_arr = sentence.split(" ");

  // Regular expression to match English letters
  const letterRegex = /^[a-zA-Z]+$/;

  // Regular expression to match vowels (a, e, i, o, u) case-insensitively
  const vowelRegex = /[aeiou]/gi;

  // Iterate through the words of the sentence
  for (const word of words_arr) {
    // Check if words contain only ENGLISH letters
    if (letterRegex.test(word)) {
      // Calculate the word length
      const wordLength = word.length;

      // Count the number of vowels in the word
      // const vowelCount = word.toLowerCase().replace(vowelRegex, "").length;
      const vowelCount = (word.match(vowelRegex) || []).length;

      // Compare the current word with the longest word so far.
      if (
        wordLength > longestWord.length ||
        (wordLength === longestWord.length && vowelCount > maxVowelCount)
      ) {
        longestWord = word;
        maxVowelCount = vowelCount;
        // console.log(maxVowelCount);
      }
    }
  }
  // Return the longestWord
  return longestWord;
}

// TESTING THE FUNCTION
const input =
  "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

const longestWord = findLongestWordWithMostVowels(input);

console.log(longestWord); // Output: "experience"
