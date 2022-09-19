const keyCode = {
    A: 65,
    S: 83,
    D: 68,
    F: 70,
    G: 71,
    H: 72,
    J: 74,
    K: 75,
    L: 76,
};
function removeTransition(){
	const keys=document.querySelectorAll('.key');
	keys.forEach(function (val) {
		val.classList.remove('playing');
	});
}

function play(e)
{
	console.log(keyCode[e.target.innerHTML]);
	const audio=document.querySelector(`audio[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`);
	console.log(audio);
	if(!audio)//if audio not found simply return, stop executing function
		return
	const key=document.querySelector(`div[data-key="${e.keyCode || keyCode[e.target.innerHTML]}"]`);
	console.log(key);
	key.classList.add('playing');
	audio.currentTime=0;
	audio.play();
	setTimeout(removeTransition,500);
}
window.addEventListener('keydown',play);

const keys=document.querySelectorAll('.key');
keys.forEach(function (key) {
	key.addEventListener('click',play);
}); 
