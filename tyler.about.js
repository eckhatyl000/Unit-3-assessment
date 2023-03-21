var form = document.querySelector('form');

    form.addEventListener('submit', (event) => {
	event.preventDefault();
	alert('Form submitted successfully!');
});




function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
const image = document.querySelector('img');

const compliments = [
	'You are committed to the cause',
    'You are so cool',
    'You understand the role that the great God AMWAY plays in our lives and are dedicated to selling for them'
];

image.addEventListener('mouseover', () => {
	const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
	alert(randomCompliment);
});
