# WEEK 3

## Monday Tasks

### 1. Who likes it?
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

### Solution:
    function likes(names) {
    /* This first conditional is using .LENGTH to count the exact number of characters,
    and the == is checking if the number of the count is equal to cero, meaning
    there is no value or string inside the names variable.*/
      if (names.length == 0) {
      //This will return a string 'no one likes this' if the conditional is met.
        return "no one likes this";
      /* This is doing the same as the first conditional, except this time is counting if there is at least
      one character inside the string. */
     } else if (names.length == 1) {
      // This will display the character inside the string plus the new string 'likes this'.
       return names[0] + " likes this";
      /* This is repeating the pattern of counting, checking if it meets the two characters count. */
     } else if (names.length == 2) {
       // This will return the 2 characters inside names variable plus the string 'like this'.
        return names[0] + " and " + names[1] + " like this";
    // Repeating count pattern, checking for 3 characters.
    } else if (names.length == 3) {
      // This will display the first 2 characters plus a string 'and' plus a string 'like this'.
       return names[0] + ", " + names[1] + " and " + names[2] + " like this";
    // This is what will return if none of the previous conditions are met before.
    } else {
     /* This will display the first 2 characters plus a string 'and'
      plus the total number of characters inside the variable minus the first two plus
     a string 'others like this'. */
     return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
     }
    }

### 2. Bit Counting
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.

### Solution: Pending.

### 3. Decode the Morse code
In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

### Solution: Got Stuck!

    decodeMorse = function(morseCode){
      let message = '';
      let words = morseCode.trim().Split('   ');
    for (let i = 0; i < words.length; i++){
      let temp = words[i].split('');
    for (let i = 0; i = temp.length; i++){
     if (MORSE_CODE[temp[i]]){
       message.push(MORSE_CODE[temp[i]]);
      }
     }
     if (i !== words.length -1){
     message.push(' ');
     }
    }
    return message.join('');
    }




    morseCode = morseCode.trim();
    let refinedData = morseCode.split('   ');
    let result = [];
  
    for (let i = 0; i < refinedData.length; i++) {
    let temp = refinedData[i].split(' ');
    for (let j = 0; j < temp.length; j++) {
      if (MORSE_CODE[temp[j]]) {
        result.push(MORSE_CODE[temp[j]]);
      }
    }
    
    if (i !== refinedData.length - 1) {
    result.push(' ');
    }
      }
     return result.join('');
    }


## Tuesday Tasks

### 1. Your order, please
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

### Solution:
     function order(words){
      for(let i = 0; i < words.length; i++){
        if (words[i] == i){
          let num = 0 + i;
          words.replace(i, num);
        }
      } return words;
    }
