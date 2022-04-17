# Monday Challenges

## 1. [Easter egg list in ReactJS] (https://www.codewars.com/kata/5a95947f4a6b342636000173)
## Solution:
```javascript
import React from 'react';

export const EggList = (props) => {
  	const { eggs } = props
	return (
		<ul>
			{eggs.map((egg, index) => (
				<EasterEgg name={egg} key={index} />
			))}
		</ul>
	)
};

export const EasterEgg = (props) => {
  const { name } = props
	return (<li>{name}</li>)
};
```
