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
/* Déclaration des constantes & variables */

const arrow_left = document.querySelector('.arrow_left')
const arrow_right = document.querySelector('.arrow_right')
const img = document.querySelector('.banner-img')
let index = 0

/* Execution des fonctions */

function main() {
clickRight()
clickLeft()
}
main()

/* Ecoute de la fleche droite */

function clickRight() {
	arrow_right.addEventListener('click', () => {
		console.log("J'ai cliqué sur la flèche droite")	

		index++
		if (index > slides.length - 1) {
			index= 0
		}
		/* 	mise a jour de l'image et du texte */
		img.src = `assets/images/slideshow/${slides[index].image}`
		document.querySelector('p').innerHTML = slides[index].tagLine
	})
}

/* Ecoute de la fleche gauche */

function clickLeft() {
	arrow_left.addEventListener('click', () => {
		console.log("J'ai cliqué sur la flèche gauche")

		index--
		if (index < 0 ) {
			index = slides.length - 1
		}
		console.log(index)
	/* 	mise a jour de l'image et du texte */
	img.src = `assets/images/slideshow/${slides[index].image}`
	document.querySelector('p').innerHTML = slides[index].tagLine
	})
}

/* Affichage des points  */

