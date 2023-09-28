const cardArray = [
    {
        name: 'meat',
        img:'images/meat.png'

    },
    {
        name: 'pasta',
        img: 'images/pasta.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'popCorn',
        img: 'images/popCorn.png'
    },
    {
        name: 'shaverma',
        img: 'images/shaverna.png'
    },
    {
        name: 'hotDog',
        img: 'images/hotDog.png'
    },
    {
        name: 'meat',
        img:'images/meat.png'

    },
    {
        name: 'pasta',
        img: 'images/pasta.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'popCorn',
        img: 'images/popCorn.png'
    },
    {
        name: 'shaverma',
        img: 'images/shaverna.png'
    },
    {
        name: 'hotDog',
        img: 'images/hotDog.png'
    }
]

cardArray.sort(()=>0.5 - Math.random());

console.log(cardArray)

let cardsChosen= [];
let cardsChosenIds = [];
const cardsWon=[];
const resultDisplay = document.querySelector('#result');

const gridDisplay = document.querySelector('#grid')
console.log(gridDisplay)

function createBoard(){
    for (let i=0; i<cardArray.length; i++) {
    const card = document.createElement('img');
    console.log(card);
    card.setAttribute('src',cardArray[i]["img"]);
    card.setAttribute('data-id',i);
    card.addEventListener('click', flipcard);
    gridDisplay.appendChild(card);
}}
createBoard()
function hideBoard() {
    for(let i = 0; i<cardArray.length; i++) {
         let cards  = document.querySelectorAll('img')
         cards[i].setAttribute('src','images/cover.png')
    }

}

setTimeout(hideBoard,300 )

function checkMatch() {
    const optionid = cardsChosenIds[0];
    const optiontwoid = cardsChosenIds[1];

    const cards = document.querySelectorAll('img');
    if (optionid === optiontwoid) {
        alert('You click the same card!')
        cards[optionid].setAttribute('src','images/cover.png');
    } else if (cardsChosen[0]===cardsChosen[1] ) {
    alert('You found a match!');
    cards[optionid].setAttribute('src','images/white.png');
    cards[optiontwoid].setAttribute('src','images/white.png');
    cards[optionid].removeEventListener('click',flipcard);
    cards[optiontwoid].removeEventListener('click',flipcard);
        cardsWon.push(cardsChosen)
        console.log(cardsWon)
    } else {
        cards[optionid].setAttribute('src','images/cover.png');
        cards[optiontwoid].setAttribute('src','images/cover.png');
        alert('Sorry try again')
    }
    cardsChosen=[];
    cardsChosenIds=[];
    resultDisplay.innerHTML = cardsWon.length;
    if(cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulation you found them all'
        alert('Congratulation you found them all')
    }
}
function flipcard()
{

    let cardId = this.getAttribute('data-id');
    this.setAttribute('src',cardArray[cardId]["img"]);
    cardsChosen.push(cardArray[cardId]['name']);
    cardsChosenIds.push(cardId);
    if (cardsChosen.length ===2) {
        setTimeout(checkMatch,100)


    }
}
