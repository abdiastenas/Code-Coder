# WEEK 3

## Monday Tasks

### 1. [Who likes it?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362)

### Solution:

```javascript

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
    
```

### 2. [Bit Counting](https://www.codewars.com/kata/526571aae218b8ee490006f4)

### Solution:
``` Javascript
var countBits = function(n) {
  // make an array with the bit result
  const base = (n).toString(2).split('');
  // make a sum with the array and make the index a Number
  const result = base.reduce((sum, num) => sum + Number(num), 0);
   
   return result;
};
```
### 3. [Decode the Morse code](https://www.codewars.com/kata/54b724efac3d5402db00065e)

### Solution: Got Stuck!
```javascript

    ddecodeMorse = function(morseCode){
 return morseCode
             .split("   ")
             .map(word => word
             .split(" ")
             .map(character => MORSE_CODE[character])
             .join(''))
             .join(' ')
             .trim()
}
```

## Tuesday Tasks

### 1. [Your order, please](https://www.codewars.com/kata/55c45be3b2079eccff00010f)

### Solution:
```javascript
     function order(words){
      for(let i = 0; i < words.length; i++){
        if (words[i] == i){
          let num = 0 + i;
          words.replace(i, num);
        }
      } return words;
    }
```
### 2. [Counting Duplicates](https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1)

### Solution:
```javascript
    function duplicateCount(text){
      let count = {};
      let newArray = ['a', 'a', 'b', 'c'];
        newArray.forEach(function (Arr) { count[Arr] = (count[Arr] || 0) + 1; });
      return count;
    }
```
### 3. [Simple Pig Latin](https://www.codewars.com/kata/520b9d2ad5c005041100000f)

### Solution:
```javascript
    function pigIt(str){  
      let arr = str.split(' ')
      return arr
        .map((word) => {
          return word.match(/[A-z]/i)
            ? `${word.substr(1)}${word.substr(0, 1)}ay`
            : word
        })
        .join(' ')
    }
```
## Wednesday Tasks

### 1. [Valid Parentheses](https://www.codewars.com/kata/52774a314c2333f0a7000688)

### Solution:
```javascript
    function validParentheses(parens) {
      let count = 0;
      for ( let i = 0; i < parens.length; i++) {
        if (parens[i] == '(') count++;
        if (parens[i] == ')') count--;
        if (count < 0) return false;
      }
      return count == 0;
    }
```

### 2. [Convert string to camel case](https://www.codewars.com/kata/517abf86da9663f1d2000003)

### Solution:
```javascript
    function toCamelCase(str){
      let spacing = str.split('-').join('').split('_').join('');
      for (let i = 0; i < str.length; i++) {
      } return spacing;
    }
```
### 3. [Unique In Order](https://www.codewars.com/kata/54e6533c92449cc251001667)

### Solution:
```javascript
    let uniqueInOrder = (iterable) => {return [...iterable].filter((a, i) => a !== iterable[i-1])};
```
## Thursday Tasks

### 1. [Fold an array](https://www.codewars.com/kata/57ea70aa5500adfe8a000110)

### Solution:
```javascript
    function foldArray(array, runs){
      array.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
    }
```
### 2. [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449)

### Solution:
``` Javascript
var encryptThis = function(text) {
  let strArr = text.split(' ');
  let output = [];
  
  strArr.forEach(str => {
    if (str.length === 1) {
      output.push(str.charCodeAt(0));
    } 
    else {
      let tempStr = str.split('');
      tempStr[0] = str.charCodeAt(0);
      tempStr[1] = str[str.length - 1];
      tempStr[str.length - 1] = str[1];
      output.push(tempStr.join(''));
    }
  });
  
  return output.join(' ');
}
```

### 3. [Format a string of names like 'Bart, Lisa & Maggie'. (retired)](https://www.codewars.com/kata/53368a47e38700bd8300030d)

### Solution:
```javascript
    function list(names){
      const coma = ',';
      const sign = '&';
      return names.reduce((pre, curr, index)) => `${pre}${(index == names.lentgh-1 ? sign : comma)}${curr.name}`, '').slide(2).trim();
    }
```
