const SUITS = ["♠", "♣", "♥", "♦"]

const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
     "K"
]

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards
    }

    get numberOfCards() {
        return this.cards.length
      }
      pop() {
          //Shift to take grom top
          return this.cards.shift()
      }
      //push to add new card to bottom

      push(card) {
          this.cards.push(card)
      }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--)  {
            // looping through our cards and spawwming them with another cards
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue =  this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}


class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {
        return this.suit === "♣" || this.suit === "♠" ? "black" : "red"

    }

     getHTML() {
        const cardDiv = document.createElement("div")
        cardDiv.innerText = this.suit
        cardDiv.classList.add("card", this.color)
        cardDiv.dataset.value = `${this.value} ${this.suit}` 
        return cardDiv
        
    }
}


function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    } )
}






























// // map
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]


// get => getter