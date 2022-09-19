const icon=document.getElementById('darkmode-icon');
console.log(icon);
icon.onclick=function(){
	document.body.classList.toggle("darkmode");
if(document.body.classList.contains("darkmode")){
	icon.src="img/day.png";
	console.log("yes")
}
else{
	icon.src="img/night.png";
		console.log("no")

}
}
