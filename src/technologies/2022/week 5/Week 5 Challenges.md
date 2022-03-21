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
