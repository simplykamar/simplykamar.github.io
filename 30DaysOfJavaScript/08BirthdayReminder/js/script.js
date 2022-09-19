const isBirthday = document.querySelector('.main');
const notBirthday = document.querySelector('.not-found');
const brithdayBoy = document.querySelector('#brithday-boy');
const brithdayBoyImg = document.querySelector('.user');
const giftIcon1 = document.querySelector('#gift-icon-1');
const giftIcon2 = document.querySelector('#gift-icon-2');

const d = new Date();
const day = d.getDay();
const date = d.getDate();
const month = d.getMonth()+1;
const data = {
	"subzar rasool":[4,3],
	"muneer":[4,5],
	"sajjad ali":[18,11],
	"nabeel":[15,6],
	"tarique":[19,4],
	"razee ullah":[22,5],
	"mehtab":[17,8],
	"ahmed":[10,9],
	"ali hussain":[10,11],
	"sajjad ali":[3,4],
	"danish":[5,8],
	"afhan":[21,8],
	"rizwan":[10,6],
	"anas":[0,0],
	"naved":[0,0],
	"yasir":[0,0],
	"kunal asthana":[7,8],
	"nikshep paliwal":[15,8],
	"krishan kant":[25,7],
	"harsh kumar":[20,9],
	"hashim ali":[30,8],
	"kamar alam":[14,7],
	"mohd ali":[29,1],
	"rehan":[3,8],
	"hesham":[11,10],
	"mohd rihan":[16,5],
	"adnan":[16,8],
	"suhail malik":[11,5],
	"amir ali":[24,6],
	"anas":[25,4],
	"shaban":[0,0],
	"aquib":[16,8],
	"azmat":[24,7],
	"nasir":[1,3],
	"irshad":[4,4],
	"affan":[28,4],
	"farhan":[0,0],
	"shahzad":[0,0],

}

console.log(date+"/"+month);
let check=false;for(b in data){

	if(data[b][0]==date && data[b][1]==month){
		brithdayBoyImg.style.backgroundImage=`url("img/${data[b][0]}-${data[b][1]}.jpg")`
		console.log(`url("${data[b][0]}.jpg")`)
		isBirthday.classList.toggle('is-birthday');
		giftIcon1.classList.toggle('is-birthday');
		giftIcon2.classList.toggle('is-birthday');


		brithdayBoy.innerHTML = b;
	console.log("Happy Birthday")
	check=true;
	}
}
if(check){
	notBirthday.classList.toggle('is-birthday');
	console.log("nso")
}
else{

	document.body.style.background = "none"; 

}


