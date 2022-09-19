let type  = document.querySelector('#type');
let name = document.querySelector('#name');
let date = document.querySelector('#date');
let amount = document.querySelector('#amount');
let tableBody = document.querySelector('tbody');
const form = document.querySelector('form');

form.addEventListener('submit',function(e){
	e.preventDefault();
	let context = ` <tr>
					<td>${type.value}</td>
					<td>${name.value}</td>
					<td>${date.value}</td>
					<td>${amount.value}</td>
					<td><button class="btn btn-danger" onclick="remove(this)">X</button></td>
					</tr>`;
	tableBody.innerHTML+=context;
	});
function remove(element){
	element.parentElement.parentElement.remove();
}
