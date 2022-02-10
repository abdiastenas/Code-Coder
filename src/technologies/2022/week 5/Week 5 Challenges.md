# Week 5 Challenges
## Wednesday Tasks
#### 1.

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
