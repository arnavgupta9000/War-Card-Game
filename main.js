import Deck from './deck.js'

const  CARD_VALE_MAP = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14

}

const computerCardSlot = document.querySelector(".computer-card-slot")
const playerCardSlot = document.querySelector(".player-card-slot")
const computerDeckElement = document.querySelector(".computer-deck")
const playerDeckElement = document.querySelector(".player-deck")
const text = document.querySelector(".text")

let playerW = document.getElementById("playerWins")
let computerW = document.getElementById("computerWins")

var playerWinss = 0;
var comptuerWinss = 0;


let playerDeck, computerDeck, inRound, stop

document.addEventListener("click", () => {
    if(stop) {
        startGame()
        return
    }

    if(inRound) {
        cleanBeforeRound()
    } else {
        flipcards()
    }
})

startGame()
function startGame() {
    const deck = new Deck()
    deck.shuffle()

    const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
    playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
    computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
    inRound = false
    stop = false
    
    cleanBeforeRound() 
    //this count exact same thing but pastes after someone wins
    playerW.innerHTML = playerWinss
    computerW.innerHTML = comptuerWinss

    
}

function cleanBeforeRound() {
    computerCardSlot.innerText = ''
    playerCardSlot.innerText = ''
    text.innerText = ''
    updateDeckCount() 
    inRound = false


}

function flipcards() {
    inRound = true

    const playerCard = playerDeck.pop()
    const computerCard = computerDeck.pop()

    playerCardSlot.appendChild(playerCard.getHTML())
    computerCardSlot.appendChild(computerCard.getHTML())

    updateDeckCount()

    if (isRoundWinner(playerCard, computerCard)) {
        text.innerHTML = "Win"
        playerDeck.push(playerCard)
        playerDeck.push(computerCard)
        
    } else if (isRoundWinner(computerCard, playerCard)) {
        text.innerHTML = "Lose"
        computerDeck.push(playerCard)
        computerDeck.push(computerCard)
        
        } else {
        text.innerHTML = "Draw"
        playerDeck.push(playerCard)
        computerDeck.push(computerCard)
        }

        if(isGameOver(playerDeck)) {
            text.innerHTML = "you Lose"
            stop = true
            comptuerWinss++
        } else if (isGameOver(computerDeck)){
            text.innerHTML = "you win"
            stop = true
            playerWinss++

        }
        //after each card flip this shows we want total wins
        // playerW.innerHTML = playerWinss
        // computerW.innerHTML = comptuerWinss
        
}


function updateDeckCount() {
    computerDeckElement.innerText = computerDeck.numberOfCards
    playerDeckElement.innerText = playerDeck.numberOfCards


}

function isRoundWinner(cardOne, cardTwo) {
    return CARD_VALE_MAP[cardOne.value] > CARD_VALE_MAP[cardTwo.value]

}

function isGameOver(deck) {
    return deck.numberOfCards === 0
}












































//query selcetor for css class

//append child-

// var node = document.createElement("LI");                 // Create a <li> node
// var textnode = document.createTextNode("Water");         // Create a text node
// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);     // Append <li> to <ul> with id="myList"
// Before appending:

// Coffee
// Tea
// After appending:

// Coffee
// Tea
// Water

//Math . ceil round a number up
// console.log(Math.ceil(.95));
// expected output: 1