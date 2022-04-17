let colors = ['darkblue', 'yellow', 'red', 'green', 'orange'];

let button = document.getElementById('button');

button.addEventListener('click', function(){
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    let container = document.getElementById('container');

    container.style.background = randomColor;
})