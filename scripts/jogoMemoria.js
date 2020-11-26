document.addEventListener('DOMContentLoaded', () => {
	const cardArray = [
		{
			name: '1',
			img: 'images/guto.png'
	    },
	    {
	      name: '2',
	      img: 'images/maira.png'
	    },
	    {
	      name: '3',
	      img: 'images/muriel.png'
	    },
	    {
	      name: '4',
	      img: 'images/nany.png'
	    },
	    {
	      name: '5',
	      img: 'images/vanish.png'
	    },
	    {
	      name: '6',
	      img: 'images/wash.png'
	    },
	    {
	      name: '1',
	      img: 'images/guto.png'
	    },
	    {
	      name: '2',
	      img: 'images/maira.png'
	    },
	    {
	      name: '3',
	      img: 'images/muriel.png'
	    },
	    {
	      name: '4',
	      img: 'images/nany.png'
	    },
	    {
	      name: '5',
	      img: 'images/vanish.png'
	    },
	    {
	      name: '6',
	      img: 'images/wash.png'
	    },
	  ]

  cardArray.sort(() => 0.5 - Math.random());

  const grid = document.querySelector('.grid');
  var cardsChosen = [];
  var cardsChosenId = [];
  var matches = 0;

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', 'images/verso.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    var cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if (cardsChosen[0] === cardsChosen[1]) {
      cards[optionOneId].setAttribute('class', 'found')
      cards[optionTwoId].setAttribute('class', 'found')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      matches++;
    } else {
      setTimeout(() => {
        cards[optionOneId].setAttribute('src', 'images/verso.png')
        cards[optionTwoId].setAttribute('src', 'images/verso.png')
      }, 500)
    }
    ganhei();
    cardsChosen = []
    cardsChosenId = []
  }

	function flipCard() {
    var cardId = this.getAttribute('data-id')
    if (cardId === cardsChosenId[0]) {
      return;
    }
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

function ganhei(){
  	if(matches >=6){
  		alert("Parabéns! Você achou todos os pares!")
  	}
  }

  createBoard()
})