function changeColor(){
	const colorBoxes=document.querySelectorAll('.color-box');
	colorBoxes.forEach(function(element){
	let number=Math.floor(Math.random()*16777215);
	number="#"+number.toString(16);
	element.style.backgroundColor=number;
	element.innerHTML=number;
	});
}
const element=document.getElementById("refresh-button");
element.addEventListener('click',changeColor);
window.load=changeColor();


const boxes=document.querySelectorAll('.color-box')
boxes.forEach(function(box){
	box.onclick=function(e){
		console.log(box.innerHTML);
		navigator.clipboard.writeText(box.innerHTML);
		alert("Color code coppied")

	}
})
