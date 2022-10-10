const capchaCode = document.querySelector('#captcha-code');
const reload = document.querySelector('#reload');
const inputText = document.querySelector('#input-text');
const verify = document.querySelector('#verify');
let msg = document.querySelector('#msg');

const data = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";


function setCaptcha(captcha){
	capchaCode.innerHTML = captcha;
}
function generate(){
	let code="";
	for(let i=0; i<6; i++)	
		code += data[Math.floor(Math.random(data)*data.length)];
	console.log(code);
	setCaptcha(code);
}
function verifyCaptcha(){
	msg.style.display = "block";
	if(inputText.value==capchaCode.innerHTML)
		msg.innerHTML = "<h4 class='text-success'>Nice! Aap robot nhi hai.</h4>"

	else 
		msg.innerHTML = "<h4 class='text-danger'>are bhai aap robot lg rhe hai, dubara se try kre!</h4>"
}

verify.addEventListener('click',function(){
	verifyCaptcha();
	setTimeout(function(){
		msg.style.display = "none";

	},4000);
});
reload.addEventListener('click',function(){
	generate();
});
generate();
