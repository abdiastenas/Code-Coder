# Week 5 Challenges 👾
## Wednesday Tasks
#### 1. [Duplicate Encoder](https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/typescript)

#### Solution:
	export function duplicateEncode(word: string){
		return word
		.toLowerCase()
		.split('')
		.map(function(value, index, arr){
			return arr.indexOf(value) == arr.lastIndexOf(value) ? "(" : ")";
		})
		.join("");
	}
	// First Try
	//     let repeat = [];
	//     let result = [];
	//     let letters = word.split('');
	//     for (let i = 0; i < letters.length; i++){
	//         if (repeat.indexOf(letters[i]) !== repeat.lastIndexOf(letters[i])) {
	//             result.push(")");
	//         } else {
	//           result.push("(");
	//         }
	// //         repeat.push(letters[i]);
	//      }
	//      return result.join("");

#### 2. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript)

#### Solution:
	export const findOdd = (xs: number[]): number => {
	  //Using the reduce() method to return the number
	  //is repeated an odd number of times.
	  return xs.reduce( (a,b) => a ^ b);
	};
