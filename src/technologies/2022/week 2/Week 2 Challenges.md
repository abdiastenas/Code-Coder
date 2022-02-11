# Week 2 Challenges 💻😎

## TUESDAY TASKS

#### 1.  [Multiply](https://www.codewars.com/kata/50654ddff44f800200000004)

### Solution:
	function multiply(a, b){
  		//This variable writes a variable called 'multi'
  		//that uses a multiply operator to give a final result for a and b.
  		let multi = a * b;
  	//This returns the final result of the multiply operation inside the 'multi' variable.
  			return multi;
			}

#### 2. [ASCII Total](https://www.codewars.com/kata/572b6b2772a38bc1e700007a)

### Solution:
	function uniTotal (string) {
	   //This variable count has the value of 0. Will be used for returning an int.
	   let count = 0;
	  //This FOR loop starts reiterating at each index position of the string.
	  for (let i = 0; i < string.length; i++) {
		//Count is added to the result of the string method found at its index.
		count += string.charCodeAt(i);
	  }
	  //This returns the final value of count after the sum.
	  return count;
	}

#### 3. [get character from ASCII Value](https://www.codewars.com/kata/55ad04714f0b468e8200001c)

### Solution:
	function getChar(c){
	  //The string method takes each int and returns its equivalent of a character.
	  return String.fromCharCode(c);
	}

#### 4. [Binary Addition](https://www.codewars.com/kata/551f37452ff852b7bd000139)
### Solution:
	function addBinary(a,b) {
	  //The first variables returns as value the sum of two variables. The second variable has an empty string.
	  let sum = a + b; binary = '';
	  //function loop while takes the condition that if the final result of sum is bigger than 0,
	  while ( sum > 0 ) {
	  //then the binary string will take the remainder of sum variable, then perform and add operation with the binary value '',
	  // and then it will round up or down an integer after dividing the sum into 2.
		binary = ( sum % 2 ) + binary; sum = Math.floor ( sum / 2 )
	  };
	  //This will return the final value of binary as a string.
	  return binary;
	}

#### 5. [Student's Final Grade](https://www.codewars.com/kata/5ad0d8356165e63c140014d4)
100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases.

### Solution:
	function finalGrade (exam, projects) {
	  // Using an if conditional, on this first iteration, it will check for
	  //the value of exam if its bigget than 90 or if the value of projects is bigger than 10, it will return a final grade of 100.
	  if (exam > 90 || projects > 10) {
		return 100;
	  }
	  //else if conditional will check if the value of exam is bigger than 75
	  //and if projects value is equal or bigger than 5, returning a final grade of 90.
	  else if (exam > 75 && projects >= 5) {
		return 90;
	  }
	  //this conditional will check if exam is bigger than 50 and if projects is equal or bigger than 2,
	  //returning a final grade of 75.
	  else if ( exam > 50 && projects >= 2) {
		return 75;
	  }
	  //this else conditional will return 0 if the conditionals before this one are not met.
	  else {
		return 0;
	  }
	}

## WEDNESDAY TASKS

#### 1. [Holiday VIII - Duty Free](https://www.codewars.com/kata/57e92e91b63b6cbac20001e5)

### Solution:
	function dutyFree(normPrice, discount, hol){
	  //This is a dividend and multiply operation to find the amount of bottles needed to buy.
	  // the Math.floor just rounds up or down the final number of the division and multiply operations.
	  return Math.floor(hol/((normPrice*discount)/100));


#### 2. [Twice as old](https://www.codewars.com/kata/5b853229cfde412a470000d0)
### Solution:
	function twiceAsOld(dadYearsOld, sonYearsOld) {
	  //This variable makes the operation of the number of dadYearsOld minus the multiply between the number
	  //of sonYearsOld times two. Meaning double the number of the fathers age.
	  let twiceAsOld = dadYearsOld - (sonYearsOld * 2);
	  //This rounds up the integer in case there is any floating points.
	  return Math.abs(twiceAsOld);
	}

#### 3. [Valid Spacing](https://www.codewars.com/kata/5f77d62851f6bc0033616bd8)

### Solution:
	function validSpacing(s) {
	//Using a ternary operator, we asked the function to return if the string has valid spacing with booleans.
	// So if s is equal to an empty string, then it is true.
	//If the split method returns an array of the spaces inside the string,
	//then the find method, returns the first character inside the string.
	  return s=='' ? true : s.split(' ').find(el=> el=='') >= 0 ? false : true
	}

#### 4. [Fake Binary](https://www.codewars.com/kata/57eae65a4321032ce000002d)
### Solution: Could not solve it by myself.
	function fakeBin(x){
	  return x.split('').map((num) => num > 4 ? 1 : 0).join('');
	}

## THURSDAY TASKS

#### 1. Remove all exclamation marks from the end of sentence.

Examples
remove("Hi!") === "Hi"
remove("Hi!!!") === "Hi"
remove("!Hi") === "!Hi"
remove("!Hi!") === "!Hi"
remove("Hi! Hi!") === "Hi! Hi"
remove("Hi") === "Hi"

### Solution:
	//This one took a while... no pun intended, but I first tried to use the for loop, and got stucked,
	//then found out about the slice string method, but got stuck with the index position, so I had to go find
	//the solution on google and found out that I was missing the -1 index position which starts counting backwards at the end of the string.
	function remove (string) {
	  // The while loop iteration searches if the value inside string
	  //and the .slice() method returned the same value inside the array meaning both had the string'!'
	  // count from -1 or backwards in the index positions of the string, then!
	  while (string && string.slice (-1) == '!'){
		//This variable is run using the .slice() method to count from the position zero
		//and last positiong of the string counting backwards.
		string = string.slice(0,-1);
	  }
	  //This returned the value of string after the code above.
	  return string;
	}
	*/

#### 2. Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

### Solution:
	function shortcut (string) {
	  //The replace string method replaces every character inside the array with an empty string.
	  //The regex was new for me so that had to be copied and pasted in a blink of an 'i'.
	  return string.replace(/[aeiou]/ig,'');
	}

#### 3. Let's play! You have to return which player won! In case of a draw return Draw!.

### Solution:
	//I was not able to solve this on my own due to time constrict issues.
	const rps = (p1, p2) => {
	  const pattern = ['rock', 'paper', 'scissors'];
	  const p1Index = pattern.findIndex((v) => v === p1);
	  const p2Index = pattern.findIndex((v) => v === p2);

	  if ((p1Index + 1) % 3 === p2Index) {
		return 'Player 2 won!';
	  }
	  if ((p1Index + 2) % 3 === p2Index) {
		return 'Player 1 won!';
	  }

	  return 'Draw!';
	};

#### 4. Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

### Solution:
//Pending.

# FIRST CODE CORE CHALLENGE
## Mission Statement

	I am Abdias, a motion designer. I have created videos for brands in animation and film.
	
	I have started my journey this 2022 in the coding development field with the goal to learn,
	grow and become a software developer by the end of the year.
	
	I’m curious, perseverant and always open to learn, hoping to be able to contribute
	to the data technologies that drives our modern world, with the objective to create
	better solutions for the world’s economy and the housing issue.
