const search = document.querySelector('#search-input');
const meaning = document.querySelector('#meaning');
const word = document.querySelector('#word');
const displayBox = document.querySelector('#display-search-word');
function isZafar(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `A boy who love to watch movie, series in late night, and also love to cook.`

		document.getElementById("word").innerHTML = val;
}
function isHarsh(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `A boy who knows how to cook as well ❤️ ladki kese ptate hai `

		document.getElementById("word").innerHTML = val;
}
function isHashim(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `A boy who study hard and good in photography.`

		document.getElementById("word").innerHTML = val;
}
function isAli(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `A boy who just love to sell and buy phones, He can do anything`

		document.getElementById("word").innerHTML = val;
}
function isKrishan(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `This boy can take your girlfriend, He is expert in ldki ptao skill`

		document.getElementById("word").innerHTML = val;
}
function isKunal(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `A boy who try to learn something new in technology, He is currently learning JavaScript.`

		document.getElementById("word").innerHTML = val;
}function isHesham(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `This boy learning linked list for 3 month and till now he did not complete.`
		document.getElementById("word").innerHTML = val;

}function isShashank(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `Shashank Rai currently working in @Cedcoss company, He has a good knowledge of frontend technology.`
		document.getElementById("word").innerHTML = val;

}
function isKamar(val){
	meaning.style.color = "green";
	meaning.style.fontWeight = "bolder";
	meaning.innerHTML = `A Passionate programmer who love ❤️ to code.
		
		while(noSuccess)<br>
		{<br>
			tryAgain();<br>
			if(Dead)<br>
				break;<br>
		}`

		document.getElementById("word").innerHTML = val;
}
function displayBoxShow(val) {
	if(val.length){
	 	displayBox.style.display = "block";
	}	
	else{
		displayBox.style.display = "none";
	}
}
search.addEventListener('input',function(e){
	let val = search.value.toLowerCase();
	displayBoxShow(search.value);
	if(val == "kamar")
		isKamar(search.value)
	else if(val == "shashank" || val == "shashank rai")
		isShashank(search.value)
	else if(val == "hashim")
		isHashim(search.value)
	else if(val == "hesham")
		isHesham(search.value)
	else if(val == "krishan" || search.value == "kk")
		isKrishan(search.value)
	else if(val == "harsh")
		isHarsh(search.value)
	else if(val == "kunal")
		isKunal(search.value)
	else if(val == "ali")
		isAli(search.value)
	else if(val == "zafar")
		isZafar(search.value)
	else
	getData(search.value);
});
async function getData(word){
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    let res = await fetch(url);
 	res = await res.json();
 	if(res.title){
 		meaning.innerHTML = `Can't find the meaning of <span>"${word}"</span>.Please try to search for another
        word`;
		document.getElementById("word").innerHTML = word;
        meaning.style.color = "red";
        return;
 		}
 	res=res[0]
    showData(res,word)
}
function showData(data,searchWord){
     meaning.style.color = "black";
	meaning.innerHTML = data.meanings[0].definitions[0].definition;
	word.innerHTML = searchWord;
}
// getData("edgbeuidb")
