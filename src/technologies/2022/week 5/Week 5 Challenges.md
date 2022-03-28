# Week 5 Challenges 👾

## Monday

2.[Square(n) Sum]()
### Solution:
```Typescript
export function squareSum(numbers: number[]): number {
   
let sum = 0
    for(const num of numbers) {
        sum += num * num
    }
    return sum
}
```
3.[Growth of a Population](https://www.codewars.com/kata/563b662a59afc2b5120000c6/train/typescript)
### Solution:
```Typescript
export class G964 {

    public static nbYear = (p0, percent, aug, p) => {
        let y = 0;
  for (y; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug
  return y;
    }
}
```

4.[Mumbling](https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/typescript)
### Solution:
```Typescript
export function accum(s: string): string {
  let arr = []
 for (let i = 0; i < s.length; i++) {
 arr.push(format(s[i], i + 1))
 }
 return arr.join(‘-’)
 }
function format(s, num) {
 let letter = s.toUpperCase()
while (letter.length !== num) {
 letter += s.toLowerCase()
 }
 return letter;
}
```
5. [A wolf in sheep's clothing](https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15/train/typescript)
### Solution: 
```Typescript
export function warnTheSheep(queue: string[]): string {
  if (queue[queue.length -1] === 'wolf') {
    return 'Pls go away and stop eating my sheep';
    } else {
     let index = queue.findIndex( (x) => x == 'wolf' );
     return `Oi! Sheep number ${queue.length - index - 1}! You are about to be eaten by a wolf!`;
    }
}
```
## Tuesday

1. [A Rule of Divisibility by 13](https://www.codewars.com/kata/564057bc348c7200bd0000ff)
```Typescript
export function thirt(n: number): number {
  let static = n 
  let arrayremainders = [1, 10, 9, 12, 3, 4]
  
  function arrayTimes(array)
  {
    let array = n.split('')
    return (array)
    let arrayReverse=array.reverse()
    return (arrayReverse)
    let arrayTimes = []
    for(let x = 0; x < n.length; x++){
      
      let sequence;

      if(sequence[x] % 6 === 0){
      sequence = 0
      } else {
       sequence = sequence[x] % 6
      }
      arrayReverse + x + arrayremainders
      return arrayTimes.push(arrayReverse[x] * arrayremainders[sequence])
    }

    console.log(arrayTimes)

    function addsum (total,num)
    {
      return total+num
    }
      static = arrayTimes.reduce(addsum,0)
      console.log(static)
  }
  arrayTimes(n)
}
```
2. [Playing with digits ](https://www.codewars.com/kata/5552101f47fc5178b1000050/train/typescript)
```Typescript
export class G964 {

    public static digPow = (n: number, p: number) => {
        let string = n.toString();
  let len = string.length;
  let result = 0;
  for(var i = 0; i < len ; i++) {
    var numberser = parseInt(string.charAt(i),10);
    result +=  Math.pow(numberser, p + i)
  }
  var x = Math.pow(n,p);
  if(result === x){
    return p;
    } else if(result%n === 0) {
    return result / n;
  }else {
    return -1  
  }
}
```
3. [Valid Braces](https://www.codewars.com/kata/5277c8a221e209d3f6000b56)
### Solution:
```Typescript
export function validBraces(braces: string): boolean {
   let tracer = []
  for(let i=0;i < braces.length; i++){
    if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
      tracer.push(braces[i])
    } else{
      if(tracer.length === 0) return false
      let lastValue = tracer[tracer.length-1]
      if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
      {
        tracer.pop()
      } else {
        break;
      }
    }
  }
  return tracer.length === 0
}
```
4. [Tic-Tac-Toe](https://www.codewars.com/kata/5216a87cbf53a9c30f0000dc)
### Solution:
```Typescript
function solveTTT(b) {
  var xwin=[ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ];
  for (var i in xwin) if (xwin[i].map(x=>b[x]).join("")=="XX") return xwin[i].reduce((x,y)=>b[y]=="" ? x+y : x,0);
  for (var i in b) if (b[i]=="") return +i;
}
```
5. [Tic-Tac-Toe-like table Generator](https://www.codewars.com/kata/5b817c2a0ce070ace8002be0)
### Solution:
```Typescript
Pending...
```
## Wednesday
1. [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript)
### Solution:
```Typescript
export function duplicateEncode(word: string){
	return word
	.toLowerCase()
	.split('')
	.map(function(value, index, arr){
		return arr.indexOf(value) == arr.lastIndexOf(value) ? "(" : ")";
	})
	.join("");
}
```

2. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript)
### Solution:
```Typescript
export const findOdd = (xs: number[]): number => {
 //Using the reduce() method to return the number
 //is repeated an odd number of times.
return xs.reduce( (a,b) => a ^ b);
};
```

3. [Which are in?](https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/typescript)
### Solution:
```Typescript
export class G964 {
  public static inArray(a1: string[], a2: string[]): string[] {
    let arr1 = a1.split('');
    let arr2 = a2.split('');
    let newArr = [arr1 + arr2];
    let newEmptyArr = [];

    let findChar = function() => {
      for (let i = 0; i < arr1.length; i++){
       arr1[i] === arr2[i] ? newArr.join(arr1, arr2) : newEmptyArr;
      }
    }
  }
}
```

4. [Sums of Parts](https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/typescript)
### Solution:
```Typescript
export function partsSums(ls: number[]): number[] {
let result = [0]
  for(const n in ls.reverse()){
    result.push(ls[n]+result[n]);
  }
  return result.reverse()
}
```

5. [Consecutive strings](https://www.codewars.com/kata/56a5d994ac971f1ac500003e)
### Solution:
```Typescript
export function longestConsec(strarr: string[], k: number): string {
   if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
    
    let longStr = '';
    
    let newStr = '';
    
    for (let i = 0; i < strarr.length; i++){
      newStr = strarr.slice(i, i+k);
      if (newStr.join('').length > longStr.length){
        longStr = newStr.join('');
      }
    }
    
    return longStr;
}
```

## Thursday

1. [Tile](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week5/Exercices/E0/desc/ED0W5.md)
### Solution:
```Typescript
export class Tile {
  letter: string;
  value: number;

  constructor(letter: string, value: number) {
    this.letter = letter;
    this.value = value;
  }

  printTile() {
    console.log(`
        ===========================
          Letter: ${this.letter}
          Value: ${this.value}
        ===========================
    `);
  }
}
```
2. [Time](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week5/Exercices/E1/desc/ED1W5.md)
### Solution:
```Typescript
export class Time {
  hour: number;
  minute: number;
  second: number;

  constructor(hour: number, minute: number, second: number) {
    this.hour = hour;
    this.minute = minute;
    this.second = second;
  }

  printTime() {
    console.log(`
        ===========================
          Hours: ${this.hour}
          Minutes: ${this.minute}
          Seconds: ${this.second}
        ===========================
    `);
  }

  getInSeconds(): number {
    const minutes = this.hour * 60 + this.minute;
    return minutes * 60 + this.second;
  }
}
```
3. [Rational](https://github.com/corecodeio/bootcamp-from-scratch/blob/main/src/technologies/2022/week5/Exercices/E2/desc/ED2W5.md)
### Solution:
```Typescript
export class Rational {
  numerator: number;
  denominator: number;

  constructor(numerator: number, denominator: number) {
    this.numerator = numerator;
    this.denominator = denominator;
  }

  printRational() {
    console.log(`${this.numerator} / ${this.denominator}`);
  }

  invert() {
    [this.numerator, this.denominator] = [this.denominator, this.numerator];
  }

  toFloat(): number {
    return this.numerator / this.denominator;
  }

  gcd(n: number, d: number): number {
    if (d == 0) return n;
    return this.gcd(d, n % d);
  }

  reduce() {
    const gcd = this.gcd(this.numerator, this.denominator);
    this.numerator = this.numerator / gcd;
    this.denominator = this.denominator / gcd;
  }
}
```
