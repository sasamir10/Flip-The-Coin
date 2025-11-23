let btn = document.querySelector('#btn');
let head = document.querySelector('#head');

let coin = document.querySelector('#coin-img');

myFunction = () => {
    const random = Math.random();

    if(random < 0.5){
        head.innerHTML = 'Tails';
        coin.src = 'resources/tails.svg';
    }
    else{
        head.innerHTML = 'Heads';
        coin.src = 'resources/heads.svg';
    }

}

btn.addEventListener('click', myFunction);
