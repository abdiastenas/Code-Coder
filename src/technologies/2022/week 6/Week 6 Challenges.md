# **Monday Challenges** 🤯

## 1. [Menu](https://github.com/abdiastenas/Code-Coder/tree/main/src/technologies/2022/week%206/menu) 😋

# **Tuesday Challenges** 🤯

## 1. [Movies](https://github.com/abdiastenas/Code-Coder/tree/main/src/technologies/2022/week%206/movies) 🎞

# **Wednesday Challenges** 🤯
## 1. [Building Tower](https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/typescript)
## Solution:
```Typescript
export const towerBuilder = (nFloors: number): string[] => {
  let tower = [];
  for (let i = 0; i < nFloors; i++) {
    tower.push(' '.repeat(nFloors - i - 1)
              + '*'.repeat((i * 2) + 1)
              + ' '.repeat(nFloors - i - 1))
  }
  return tower;
}
```

## 2. [Highest Scoring Word](https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/typescript)
## Solution:
```Typescript
export const high = (str: string): string => {
  let highestScoring = str.split(' ')
  .map(str => [...str].reduce((a, b) =>
    a + b.charCodeAt(0) - 96, 0)
      );
  return str.split(' ')
  [highestScoring.indexOf(Math.max(...highestScoring))];
};
```

## 3. [Equal Sides Of An Array](https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/typescript)
## Solution:
```Typescript
export function findEvenIndex(arr: number[]): number
{
  let left = 0;
  let right = 0;
  const reducer = (accumulator: number, currentValue: number) =>
  accumulator + currentValue;
  
  if (arr.length == 0) {
    return -1;
  }
  
  for(let i = 0; i < arr.length; i++) {
    if (i == 0) {
      right = arr.slice(1).reduce(reducer, 0);
      if (right == i) {
        return i;
      }
    } else {
      left = arr.slice(0, i).reduce(reducer, 0);
      right = arr.slice(i + 1).reduce(reducer, 0);
      if (left == right) {
        return i;
      }
    }
  }
  return -1;
};
```


## 4. [Meeting](https://www.codewars.com/kata/59df2f8f08c6cec835000012/train/typescript)
## Solution:
```Typescript
export function meeting(s: string): string {
  return s
  .split(';')
  .map((element) => '(' + element.split(':').reverse().join(', ').toUpperCase() + ')')
  .sort()
  .join('');
}
```


## 5. [Street Fighter 2 - Character Selection](https://www.codewars.com/kata/5853213063adbd1b9b0000be/train/typescript)
## Solution:
```Typescript
export function streetFighterSelection(fighters: Array<string[]>, position: number[], moves: string[]) {
  let hoveredCharacters = [];
  let currentPosition = position;
  for (let move of moves) {
    if (move == 'up') {
      if (currentPosition[0] == 0) {
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else {
        currentPosition[0]--;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    if(move == 'down') {
      if(currentPosition[0] == 1) {
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else {
        currentPosition[0]++;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    if(move == 'left') {
      if(currentPosition[0] == 0) {
        currentPosition[1] = 5;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else {
        currentPosition[1]--;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
    if(move == 'right') {
      if(currentPosition[1] == 5) {
        currentPosition[1] = 0;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      } else {
        currentPosition[1]++;
        hoveredCharacters.push(fighters[currentPosition[0]][currentPosition[1]]);
      }
    }
  }
  return hoveredCharacters;
}
```
