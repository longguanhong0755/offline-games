const cards = 
	document.getElementsByClassName('card'); 
let allImages = document.getElementsByClassName('card-image'); 
let movesDisplay = document.querySelector('.move-counter'); 
let toggledCardsArray = []; 
let move = 0; 
let winCount = 0; 
const restart = document.getElementById('restart'); 

const imagesLinkArray = [ 
	{ 
		id: 1, 
		image: 
'/_assets/af7572644929ba0ae415.png', 
		newAlt: 'Angular Image'
	}, 
	{ 
		id: 2, 
		image: 
'/_assets/97ed59494dde31dc41c2.png', 
		newAlt: 'HTML Image'
	}, 
	{ 
		id: 3, 
		image: 
'/_assets/d863abca82f8d9a04c4b.jpg', 
		newAlt: 'JavaScript Image'
	}, 
	{ 
		id: 4, 
		image: 
'/_assets/9ab8bffa667a32f21a68.png', 
		newAlt: 'React Image'
	}, 
	{ 
		id: 5, 
		image: 
'/_assets/efe68a9c18650f6f1745.png', 
		newAlt: 'Vue Image'
	}, 
	{ 
		id: 6, 
		image: 
'/_assets/d863abca82f8d9a04c4b.jpg', 
		newAlt: 'JavaScript Image'
	}, 
	{ 
		id: 7, 
		image: 
'/_assets/efe68a9c18650f6f1745.png', 
		newAlt: 'Vue Image'
	}, 
	{ 
		id: 8, 
		image: 
'/_assets/97ed59494dde31dc41c2.png', 
		newAlt: 'HTML Image'
	}, 
	{ 
		id: 9, 
		image: 
'/_assets/eba43222d45c3b19a2d5.png', 
		newAlt: 'CSS Image'
	}, 
	{ 
		id: 10, 
		image: 
'/_assets/af7572644929ba0ae415.png', 
		newAlt: 'Angular Image'
	}, 
	{ 
		id: 11, 
		image: 
'/_assets/eba43222d45c3b19a2d5.png', 
		newAlt: 'CSS Image'
	}, 
	{ 
		id: 12, 
		image: 
'/_assets/9ab8bffa667a32f21a68.png', 
		newAlt: 'React Image'
	} 
] 

// function to restart the game 
const restartGame = () => { 
	let toggledCard = 
		document.getElementsByClassName('card toggled'); 
	imagesLinkArray.sort(() => Math.random() - 0.5); 
	Object.values(toggledCard).forEach(function (el) { 
		setTimeout(() => { 
			el.classList.remove("toggled"); 
		}, 0); 
	}) 
	toggledCardsArray.length = 0; 
	move = 0; 
	winCount=0; 
	movesDisplay.innerText = `Moves: ${move}`; 
	let allImagesSrc = document.getElementsByClassName('card-image'); 
	Object.values(allImagesSrc).forEach((el, index)=>{ 
		el.src = imagesLinkArray[index].image; 
		el.alt = imagesLinkArray[index].newAlt; 
		el.id = imagesLinkArray[index].id 
	}) 
} 
restart.addEventListener('click', restartGame); 

//checking for the last clicked and current 
//clicked cards and applying changes accordingly 
for (var i = 0; i < cards.length; i++) { 
	cards[i].addEventListener('click', function () { 
		this.classList.add("toggled"); 
		toggledCardsArray.push(this); 
		let thisImgSrc = this.querySelector('.card-image').src; 
		let previousImgSrc = 
		toggledCardsArray[toggledCardsArray.length - 2].querySelector('.card-image').src; 
		if(thisImgSrc !== previousImgSrc) { 
			toggledCardsArray.forEach(function (el) { 
				setTimeout(() => { 
					el.classList.remove("toggled"); 
				}, 500); 
			}) 
			toggledCardsArray.length = 0; 
			move++; 
		} 
		else{ 
			toggledCardsArray.length = 0; 
			move++; 
			winCount++; 
		} 
		movesDisplay.innerText = `Moves: ${move}`; 
		if(winCount===6){ 
			setTimeout(()=>{ 
				alert(`Congratulations!!! You won the game in ${move} moves.`) 
			}, 300) 
		} 
	}) 
}
document.addEventListener('DOMContentLoaded', function () {
  var beepSound = new Audio('/_assets/8b21c1906ec134d7cfde.wav'); 

  var cards = document.querySelectorAll('.card');

  cards.forEach(function(card) {
      card.addEventListener('click', function () {
          beepSound.play();
      });
  });
});
