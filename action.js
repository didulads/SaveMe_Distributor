const addSauceButton = document.querySelector('.js-add-sauce > a');
let inputs = document.querySelectorAll('.js-sauce-name'),
		lastInput = inputs[inputs.length - 1];


addSauceButton.onclick = event => {
	event.preventDefault();
	let addItems = true;
	
	[].map.call(inputs, input => {
		if(!input.value) {
			addItems = false;
			bounceEmptyInput(input);
		}	
	});
	
	if(addItems) {
		console.log('continue listing');
	} else {
		console.log('Unable to add field.');
	}
	
}

const bounceEmptyInput = childEl => {
	childEl.parentNode.style.animation = "bounceError .8s ease";
	setTimeout(() => { childEl.parentNode.style.animation = "none"; }, 850);
}

// TODO
// Checker chaque input s'ils ne sont pas vide
// 