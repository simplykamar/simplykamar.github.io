const inputSearch = document.querySelector('#search-input'); 
const form = document.querySelector('form');
let items = document.querySelector('#items');
const alert = document.querySelector('.alert');
async function getData(){
	let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputSearch.value}`);
	data = await data.json();
	data = data.meals;
	setData(data);
}

function setData(response){
	if(!response){
		items.innerHTML = "";		
		alert.style.display = "block";
		return;
	}
	console.log(response);
	alert.style.display = "none";
	let context="";
	items.innerHTML = "";		
	response.forEach(function(meal) {
		context=`<div class="col-lg-4 col-sm-12 col-md-4 col-12 mb-5">
					<div class="card">
						<img src=${meal.strMealThumb} class=" card-img-top img-fluid">
						<div class="card-body">
							<h4 class="card-title">${meal.strMeal}</h4>
							<button data-target="#${meal.idMeal}" data-toggle="modal" class="btn btn-danger">Get Recipe</button>
						</div>
					</div>
				</div>
				<div class="modal fade" id="${meal.idMeal}">
			<div class="modal-dialog ">
				<div class="modal-content">
					<div class="modal-header">
						<h4 class="modal-title">${meal.strMeal}</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button> 

					</div>
				<div class="modal-body">
						<img src=${meal.strMealThumb} class="img-fluid img-modal">
						<p ><b>Instructions:</b></p>
						<p>${meal.strInstructions}</p>
				</div>
				<div class="modal-footer">
					<button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
				</div>
		</div>
			</div>
		</div>
				`
		items.innerHTML += context;		
		context = "";
	});
}

form.addEventListener('submit',function(e){
	e.preventDefault();	
getData();

})
