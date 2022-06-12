const cabbage = document.querySelector('#cabbage');
const width = window.innerWidth;
const height = window.innerHeight;

cabbage.addEventListener('mouseover', function (e) {
	const x = getRandomNumber(100, width);
	const y = getRandomNumber(100, height);
	this.style.left = `${x}px`;
	this.style.top = `${y}px`;
	this.className = 'blink';
	setTimeout(() => (this.className = ''), 500);
});

cabbage.addEventListener('touchstart', function (e) {
	const x = getRandomNumber(100, width);
	const y = getRandomNumber(100, height);
	this.style.left = `${x}px`;
	this.style.top = `${y}px`;
	this.className = 'blink';
	setTimeout(() => (this.className = ''), 500);
});

function getRandomNumber(min, max) {
	return Math.random() * (max - min);
}
