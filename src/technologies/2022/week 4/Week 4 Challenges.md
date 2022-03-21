<h1 align = center>npm,npx & Typescript challenges - Week 4</h1>

## Tuesday

2. [Typescript object type](https://typescript-exercises.github.io/#exercise=1)

### Solution:
```Typescript
export const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

export function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);
```

4. [Typescript union types](https://typescript-exercises.github.io/#exercise=2)
### Solution:
```Typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin; 

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
}

persons.forEach(logPerson);
```
5. [Typescript in operator](https://typescript-exercises.github.io/#exercise=3)
```Typescript
interface User {
    name: string;
    age: number;
    occupation: string;
}

interface Admin {
    name: string;
    age: number;
    role: string;
}

export type Person = User | Admin;

export const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

export function logPerson(person: Person) {
    let additionalInformation: string;
    if ('role' in person) {
        additionalInformation = person.role;
    } else {
        additionalInformation = person.occupation;
    }
    console.log(` - ${person.name}, ${person.age}, ${additionalInformation}`);
}

persons.forEach(logPerson);
```
6. [Find the odd int](https://www.codewars.com/kata/54da5a58ea159efa38000836)
```Typescript
export const findOdd = (xs: number[]): number => {
  //Using the reduce() method to return the number
  //is repeated an odd number of times.
  return xs.reduce( (a,b) => a ^ b);
};
```
7. [Stop gninnipS My sdroW!](https://www.codewars.com/kata/5264d2b162488dc400000001)
```Typescript
function spinWords(sentence){
  const sentenceArray = sentence.split(' ');
  let result = '';
  sentenceArray.map((str, i) => {
    if (str.length >= 5){
      sentenceArray[i] = str.split('').reverse().join('');
    } else {
      sentenceArray[i] = str;
    }
  result = sentenceArray.join(' ');
  });
return result;
}
```

## Wednesday

1. [Array.diff](https://www.codewars.com/kata/523f5d21c841566fde000009/solutions/javascript)
### Solution:
```Typescript
function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
}
```
2. [Create Phone Number](https://www.codewars.com/kata/525f50e3b73515a6db000b83)
### Solution:
```Typescript
function createPhoneNumber(numbers){
  numbers.unshift("(");
  numbers.splice(4, 0, ")", " ");
  numbers.splice(9, 0, "-");
  return numbers.join("");
}
```

## Thursday

1.[Detect Pangram](https://www.codewars.com/kata/545cedaa9943f7fe7b000048)
### Solution:
```Typescript
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const str = string.toLowerCase();
  
  for (let i = 0; i < alphabet.length-1; i += 1) {
    if (str.indexOf(alphabet[i]) === -1) {
      return false;
    }
  }
  
  return true;
}
```

2.[Find the missing letter](https://www.codewars.com/kata/5839edaa6754d6fec10000a2)
```Typescript
const findMissingLetter = (array) => {
  for (let i = 1; i < array.length; i++) {
    const prev = array[i - 1].charCodeAt();
    const current = array[i].charCodeAt();
    
    if (current - prev !== 1) {
      return String.fromCharCode(prev + 1);
    }
  }
  
  return null;
}
```
3.[Find the unique number](https://www.codewars.com/kata/585d7d5adb20cf33cb000235)
```Typescript
function findUniq(arr) {
  let repeated = arr.filter((item, index) => arr.indexOf(item) !== index)
  return arr.filter((item)=> item !== repeated[0])[0]
}
```
4.[Reverse or rotate?](https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991)
```Typescript
ln = str.length;
   if(sz < 1 || !str || sz > ln) return "";

   const test = s => Array.prototype.reduce.call(s, (acc, val) => acc + Number(val) ** 3, 0) % 2 === 0;
   const reverse = s => s.split("").reverse().join("");
   const rotate = s => s.slice(1) + s.slice(0, 1);

   let arr = [];
   for(let i = 0; i < ln; i += sz) arr.push(i+sz <= ln ? str.slice(i, i+sz) : "")
   return arr.map(x => test(x) ? reverse(x) : rotate(x)).join("");
}
```
5.[What's Your Poison?](https://www.codewars.com/kata/58c47a95e4eb57a5b9000094)
```Typescript
function find(rats) {
    return rats.reduce((a,b)=>a+Math.pow(2,b),0)
}
```
