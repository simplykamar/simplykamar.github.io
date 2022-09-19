const buttons=document.querySelectorAll('.btn')
const answerBox=document.getElementById('answer')
buttons.forEach(function(btn){
	btn.addEventListener('click',function (e) {
		console.log(btn.innerHTML);
		answerBox.innerHTML+=btn.innerHTML
	})
});
function evaluate(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	try{
		const answer=eval(answerBox.innerHTML)
		console.log(answer)
		answerBox.innerHTML=answer;
	}catch{
		answerBox.innerHTML="Error";

	}
}
function clearAll(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	answerBox.innerHTML="";

}
function clear(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	console.log(answerBox.innerHTML.slice(0,-1));
	answerBox.innerHTML=answerBox.innerHTML.slice(0,-1);

}
function getPercentage(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	answerBox.innerHTML=answerBox.innerHTML/100;

}
function getSin(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	answerBox.innerHTML=Math.sin(answerBox.innerHTML);

}
function getCos(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	answerBox.innerHTML=Math.cos(answerBox.innerHTML);

}
function getTan(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	answerBox.innerHTML=Math.tan(answerBox.innerHTML);

}
function getSQRT(){
	const answerBox=document.getElementById('answer');
	if(!answerBox.innerHTML)
		return
	answerBox.innerHTML=Math.sqrt(answerBox.innerHTML);

}
function getPi(){
	const answerBox=document.getElementById('answer');
	answerBox.innerHTML+="3.141";

}

document.querySelector('#get-answer').addEventListener('click',evaluate)
document.querySelector('#clear-all').addEventListener('click',clearAll)
document.querySelector('#clear').addEventListener('click',clear)
document.querySelector('#percentage').addEventListener('click',getPercentage)

document.querySelector('#sin').addEventListener('click',getSin)
document.querySelector('#cos').addEventListener('click',getCos)
document.querySelector('#tan').addEventListener('click',getTan)
document.querySelector('#sqrt').addEventListener('click',getSQRT)
document.querySelector('#pi').addEventListener('click',getPi)
