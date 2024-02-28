const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')
const img = document.querySelector('.banner-img')
const dots = document.querySelector('.dots')
let index = 0


// Affichage des dots

function display() {
	for (let i=0; i < slides.length; i++) {

// Création de la div et des class dans le document

	const dot = document.createElement('span')
	if ( i == index) {
		dot.classList.add('dot_selected')
	}

// Ajout de la class ( dot enfant ) au parent dots

	dot.classList.add('dot')
	dots.appendChild(dot)
	}
}
// ---------------------------------------------------- //
display()

main(slides)

function main(slides) {

	click(arrow_right, () => {
		index++
		if (index > slides.length - 1) {
			index = 0
		}
	})

	click(arrow_left, () => {
		index--
		if (index < 0) {
			index = slides.length - 1
		}
	})
}

// Fonction qui gère le clique sur une flèche
// @param {HTMLElement} arrow
// @param {CallableFunction} callback
// @returns {void}

function click(arrow, callback) {
	arrow.addEventListener('click', (e) => {
	const arraydots = document.querySelectorAll('.dots .dot')

//  On retire le premier point selected

	arraydots[index].classList.remove('dot_selected')

// on execute la fonction callback

	callback(e)

// 	mise à jour de l'image, du texte, et du point (index + ou -1)
    img.src = `assets/images/slideshow/${slides[index].image}`
	document.querySelector('p').innerHTML = slides[index].tagLine
	arraydots[index].classList.add('dot_selected')
	})
}
