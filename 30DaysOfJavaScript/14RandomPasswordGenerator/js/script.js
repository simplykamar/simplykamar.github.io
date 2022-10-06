const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbole = "~!@#$%^&*()_=";
const number = "0123456789";

const isNumber = document.querySelector('#is-number');
const isUpper = document.querySelector('#is-upper');
const isLower = document.querySelector('#is-lower');
const isSymbol = document.querySelector('#is-symbol');
const passwdLength = document.querySelector('#length');
const button = document.querySelector('button');
const passwdBox = document.querySelector('#passwd-box');



function getRandomData(dataset){
	return dataset[Math.floor(Math.random()*dataset.length)]

}

function generatePasswd(){
	console.log(isUpper.checked)
	let passwd="";
	let length = parseInt(passwdLength.value);
	for(let i=0; passwd.length<=length; i++){
		if(isUpper.checked)
			passwd += getRandomData(uppercase);
		if (isLower.checked)
			passwd += getRandomData(lowercase);
		if (isSymbol.checked)
			passwd += getRandomData(symbole);
		if (isNumber.checked)
			passwd += getRandomData(number);
	}
	passwd = passwd.slice(0,length);
	console.log(passwd);
	passwdBox.innerHTML = passwd;
}

button.addEventListener('click',generatePasswd);
