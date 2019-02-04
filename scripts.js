// Interacting

var trigger = document.querySelector('.trigger')
var body = document.querySelector('body')

trigger.addEventListener('click', zoom)

function zoom() {
	console.log('it works')

	if (body.id != 'zoom') {
		body.id = 'zoom'
	} else {
		body.id = ''
	}

}


// Partial eclipse on hover
var earth = document.querySelector('.earth')

earth.addEventListener('mouseenter', showShadow)
earth.addEventListener('mouseleave', hideShadow)

function showShadow() {
	earth.classList.add('eclipse')
}

function hideShadow() {
	earth.classList.remove('eclipse')
}
