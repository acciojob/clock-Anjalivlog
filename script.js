//your JS code here. If required.
const timerElement = document.getElementById('timer');
function updateTimer() {
	const now = new Date();
	const dateTimeString = now.toLocaleString();
	timerElement.textContent = dateTimeString;
}
setInterval(updateTimer,1000);
updateTimer();