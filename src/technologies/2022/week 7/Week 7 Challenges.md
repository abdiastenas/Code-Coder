# Monday Challenges 🤖

## 1. [TicTacToe](https://github.com/abdiastenas/Code-Coder/tree/main/src/technologies/2022/week%207/tic_tac_toe)⁣❌❕⭕❕❌

# Tuesday Challenges 🤖

## 1. [Linked List](https://github.com/abdiastenas/Code-Coder/tree/main/src/technologies/2022/week%207/LinkedList) ✔

## 2. [Encrypt this!](https://www.codewars.com/kata/5848565e273af816fb000449/train/typescript)
## Solution:
```Typescript
export const encryptThis = (str: string): string => {
  let strArr = str.split(' ');
  let output = [];
  
  strArr.forEach(text => {
    output.push(text.charCodeAt(0));
  } else {
      let tempStr = text.split('');
      tempStr[0] = text.charCodeAt(0);
      tempStr[1] = text[text.length - 1];
      tempStr[text.length - 1] = text[1];
    output.push(tempStr.join(''));
  });
return output.join(' ');
}
```
## 3. [Make the Deadfish Swim](https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript)
## Solution:
```Typescript
export function parse(data: string): number[] {
   let v = 0, ret = []
  for (let c of data) {
    switch (c) {
      case 'i' : v++;         break;
      case 'd' : v--;         break;
      case 's' : v=v*v;       break;
      case 'o' : ret.push(v); break;
    }
  }
  return ret;
}
```
# Wednesday Challenges 🤖

## 1. [Dashatize it](https://www.codewars.com/kata/58223370aef9fc03fd000071/train/typescript)
## Solution:
```Typescript
export const dashatize = (num: number) => {
   return !isNaN(num)
  ? num
    .toString()
    .split('')
    .map((n: string) => Number(n) % 2 === 0 ? n : `-${n}-` )
    .join('')
    .replace(/-{2,}/g, '-')
    .replace(/^-|-$/g, '')
  : 'NaN'
}
```
# Thursday Challenges 🤖

## 1. [Type Predicate](https://typescript-exercises.github.io/#exercise=4)
## Solution:
```Typescript
export function isAdmin(person: Person): person is Admin {
    return person.type === 'admin';
}

export function isUser(person: Person): person is User {
    return person.type === 'user';
}

export function logPerson(person: Person) {
    let additionalInformation: string = '';
    if (isAdmin(person)) {
        additionalInformation = person.role;
    }
    if (isUser(person)) {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

console.log('Admins:');
persons.filter(isAdmin).forEach(logPerson);

console.log();

console.log('Users:');
persons.filter(isUser).forEach(logPerson);
```
## 2. [Count the smiley faces!](https://www.codewars.com/kata/583203e6eb35d7980400002a/train/typescript)
## Solution:
```Typescript
export function countSmileys(arr: string[]) {
  let smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
  let count = 0;

  for (let i=0; i<arr.length; i++){
    for (let j=0; j<smileys.length; j++){
      if (arr[i]===smileys[j]){
        count++;
       }
    }
  }
return count;
}	
```

## 3. [Human Readable Time](https://www.codewars.com/kata/52685f7382004e774f0001f7)
## Solution:
```Typescript
export function humanReadable(seconds:number):string {
  const HH = ('0' + parseInt(seconds / (60 * 60))).slice(-2);
  const MM= ('0' + parseInt(seconds / (60 % 60))).slice(-2);
  const SS = ('0' + seconds + 60).slice(-2);
  return HH + ':' + MM + ':' + SS;
}
```

## 4. [Base64 Encoding](https://www.codewars.com/kata/5270f22f862516c686000161/train/typescript)
## Solution:
```Typescript
export function toBase64(str: string): string {
  const encodedData = btoa(str);
  return encodedData;
}

export function fromBase64(str: string): string {
  const decodedData = atob(str);
  return decodedData;
}

console.log(toBase64('Hellow World!'));

console.log(fromBase64('dGhpcyBpcyBhIHN0cmluZyEh'));
```
