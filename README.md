# Code-Coder
Code Coder Tasks.

WEEK 1

Tuesday Tasks.
  1. Based on the video, there is two process for languages: Compiled and Interpreted. A compiled program is when the source code is fully read with a compiler, and convert it to a compiled executable program for the computer to execute it. An interpreted program, the source code is read one line at a time with an interpreter, executing each line right after reading it.


  2. Answer: Java is both a compiled and interpreted language. The language uses a Java compiler called "javac" that produces a .class file that contains bytecode. This file then is put into the software-based interpreter called Java Virtual Machine (JVM) to interpret it and then the machine will execute the Java application with the desired output.


  3. Step one: Define the local currency = Quetzal Guatemalteco (QT). Step two: Define the final currency output= US Dollar (USD). Step three: Define the USD currency value= 0.13 USD. Step four: Define the value of the QT currency= Q1. Step five: Multiply the value of QT times the value of the USD= Q1 x 0.13 USD. Step Six: Display the final result with the US Dollar currency next to the final value= Q100 x 0.13 USD= 12.97 USD.


  4. Pseudocode is basically solving the coding problem with words and sentences understable to people, letting you plan specific steps in a way you would follow a food recipe to solve a coding problem, then taking that planned idea and translate it to code.


  5. Answer: Pseudocode is helpful to plan how to solve a problem by using logic and a language any person can understand. It can help to breakdown a problem into pieces, solve it little by little and then come up with a final solution. This is only to have a clear mental map of how to code the solution later on.


  6. - If the user base was born in the year 2022, then set the age to 0. - Else add 1 year of value for each decreased year value of 2022.


  7. A flowchart is a diagram that describes a process or system. It can help to visually demonstrate the workflow of a system, by showing a sequence of steps, what order and in what hierarchy do these steps exist in order to obtain a specific result.


  8. Answer: The flowcharts can be used as mental maps to implement the step by step solutions that help visualize what will each step will do, and what that next step will do next, and so on.


  9. What is the difference between a High-level language and a Low-level language:
A High-level language is easy to understand for a person, but it is more complex for the computer to read and execute. Therefore a Low-level language is meant for computers that can easily read it, while for a person it would make little sense to read it.

There are two types of High-level languages:

High-level language:

Interpreted: This language reads and translates the high level language code, line by line, and then executes the code per line. If there is an error, it wont notice it until it is finished reading all the lines.

Compiled: This type of language reads all the code first, validates them, creating a low level code, after that it it creates and executable object and then the computer executes it.
*Source Code - Compiled - Organized for execution - Execution by computer.*


Low-level language:

Assembler: This type of language is a group of mnemonics that represent basic instructions for the hardware components. This is a low level language.

Binary: Which is the lowest level of code that the computer and its components can actually understand and read with ease.

WEDNESDAY TASKS
1. Answer to what is a binary, decimal and hexadecimal number.
- A binary number is a method of mathematical expression in the base-2 numeral system which uses only two symbols, usually these symbols are zero “0” and one “1”.

- A decimal is the standard system for denoting integer and non-integer numbers. These can be identified with a decimal separator such as period or comma symbol, this helps separate digits of a number into two groups that gives them their value, depending whether they are before or after the decimal separator. This numbers use only 10 symbols.

- A hexadecimal number is based on 16 symbols that includes numbers from 0 to 9 and the letters from A to the F. This numbers are provided for a human-friendly.

2. My date of birht 1990.
 
To convert it to binary, you have to divide in half 1990 all the way down to 1. Whenever there is a decimal separator for example: 1.5, the ".5" is taken as a number 1 and ignore for the next division. Then once you have reached to the number one after all necessary divisions, you use the number 1 for every odd number and the number 0 for every even number.

1990/2=995
995/2=497+1
497/2=248+1
248/2=124
124/2=62
62/2=31
31/2=15+1
15/2=7+1
7/2=3+1
3/2=1+1

11111000110 = 1990.

To convert it to hexadecimal, Divide the decimal number by 16. Treat the division as an integer division.  
Write down the remainder (in hexadecimal).
Divide the result again by 16.  Treat the division as an integer division.  
Repeat step 2 and 3 until result is 0.
The hex value is the digit sequence of the remainders from the last to first.

1990/16= 124.375	.375*16=6
124/16= 7.75		.75*16=12=C
7/16=0.4375		.4375*16=7

1990 = 7C6

3. Hexadecimal: 
51966/16=3,247		.875*16=14=E
3,247/16=202		.9375*16=15=F
202/16=12		.625*16=10=A
12/16=0			.75*16=12=C

Answer: CAFE. Is a must.

Binary:

51966+0
51966/2= 25,983+0
25,983/2= 12,991+1
12,991/2= 6,495+1
6,495 /2= 3,247+1
3,247/2= 1,623+1
1,623/2= 811+1
811/2= 405+1
405/2= 202+1
202/2= 101+0
101/2= 50+1
50/2= 25+0
25/2= 12+1
12/2= 6+0
6/2= 3+0
3/2= 1+1
1/2= 0+1

Answer: 1100101011111110

4. Code Program for adding two numbers:

.data
	result_message: .asciiz "\nEl resultado es: "
.text
	main:
		li $t0, 10
		li $t1, 90

		add $t2, $t0, $t1

		li $v0, 4
		la $a0 result_message
		syscall

		li $v0, 1
		move $a0, $t2
		syscall
    
    The result is: 100.
    
    Code program for displaying my name:
    
     .data
    message: .asciiz "\nAbdias Tenas\n"
  .text
    main:
      li $v0, 4
      la $a0, message
      syscall
      
      
      The result is: Abdias Tenas.
      
      
FIRST CODE CORE CHALLENGE
Mission Statement

I am Abdias, a motion designer. I have created videos for brands in animation and film. I have started my journey this 2022 in the coding development field with the goal to learn, grow and become a software developer by the end of the year. I’m curious, perseverant and always open to learn, hoping to be able to contribute to the data technologies that drives our modern world, with the objective to create better solutions for the world’s economy and the housing issue.
      
WEEK 2

MONDAY TASKS

1. This code does not execute properly. Try to figure out why.
	/*function multiply(a, b){
  a * b
}*/

Solution:
/*
function multiply(a, b){
  //This variable writes a variable called 'multi'
  //that uses a multiply operator to give a final result for a and b.
  let multi = a * b;
  //This returns the final result of the multiply operation inside the 'multi' variable.
  return multi;
}
*/

2. You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all ASCII characters.

examples:

uniTotal("a") == 97 uniTotal("aaa") == 291


Solution:
/*
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
*/


3. Write a function get_char() / getChar() which takes a number and returns the corresponding ASCII char for that value.

Solution:
/*
function getChar(c){
  //The string method takes each int and returns its equivalent of a character.
  return String.fromCharCode(c);
}

4. Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.

Solution:

/*
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
*/

5. Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases.

Solution:
/*
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
*/.

TUESDAY TASKS

1. The purpose of this kata is to work out just how many bottles of duty free whiskey you would have to buy such that the saving over the normal high street price would effectively cover the cost of your holiday.

Solution:
/*
function dutyFree(normPrice, discount, hol){
  //This is a dividend and multiply operation to find the amount of bottles needed to buy.
  // the Math.floor just rounds up or down the final number of the division and multiply operations.
  return Math.floor(hol/((normPrice*discount)/100));
  */


2. Your function takes two arguments:

current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

Solution:
/*
function twiceAsOld(dadYearsOld, sonYearsOld) {
  //This variable makes the operation of the number of dadYearsOld minus the multiply between the number
  //of sonYearsOld times two. Meaning double the number of the fathers age.
  let twiceAsOld = dadYearsOld - (sonYearsOld * 2);
  //This rounds up the integer in case there is any floating points.
  return Math.abs(twiceAsOld);
}
*/
