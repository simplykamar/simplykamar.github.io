const isPresent = document.querySelector('.is-present');
function check(e){
    if(e.className == "fa-solid fa-xmark absent"){
        e.className = "fa-solid fa-check present";
		e.parentElement.parentElement.classList.toggle('is-present');
		console.log('yes')

    }else{
        e.className = "fa-solid fa-xmark absent";
        e.parentElement.parentElement.classList.toggle('is-present');

    }
	// isPresent.classList.toggle('is-present');

} 
