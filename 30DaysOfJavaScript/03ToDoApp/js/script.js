document.getElementById('add').addEventListener('click',addList);

function addList(){
	const task=document.getElementById('task');
	const lists=document.querySelector('#tasks');
	if(!task.value){
		alert("You must write something!");
		return;
	}
	const newtask=`<div class="list">
			<div><i class="fa-solid fa-check check"></i></div>
			<div class="item">${task.value}</div>
			<div>
				<span class="checked">
				<i class="fa-sharp fa-solid fa-check"></i>
				</span><span class="delete">
				<i class="fa-solid fa-xmark"></i>
				</span>
			</div>
		</div>`;
	console.log(lists);

	lists.innerHTML+=newtask;
	task.value="";
	const tasks=document.querySelectorAll('.list');
	tasks.forEach(function(list){
	list.querySelector('.delete').addEventListener('click',function(){
		list.remove();
	}); 
	list.onclick=function() {
		list.classList.toggle('done');
		let a=list.querySelector('.fa-check')
		console.log(a.classList.toggle('check'))
	list.querySelector('.checked').classList.toggle('abc')
	
	}
	
});
}


/*
document.getElementById('add').addEventListener('click',addList);

function addList(){
	const task=document.getElementById('task');
	const lists=document.querySelector('#tasks');
	if(!task.value){
		alert("You must write something!");
		return;
	}
	const newtask=`<div class="list">
			<div><i class="fa-solid fa-check check"></i></div>
			<div class="item">${task.value}</div>
			<div>
				<span class="edit">
				<i class="fa-sharp fa-solid fa-pen"></i>
				</span><span class="delete">
				<i class="fa-solid fa-xmark"></i>
				</span>
			</div>
		</div>`;
	console.log(lists);

	lists.innerHTML+=newtask;
	task.value="";
	const tasks=document.querySelectorAll('.list');
	tasks.forEach(function(list){
	list.querySelector('.delete').addEventListener('click',function(){
		list.remove();
	});

	list.querySelector('.edit').addEventListener('click',function(){
		console.log(task.value)
		task.value=list.querySelector('.item').innerHTML;
		document.getElementById('add').innerHTML="Edit";
		document.getElementById('add').classList.add('edit');
		document.querySelector('.edit').addEventListener('click',function() {
			list.querySelector('.item').innerHTML=task.value;
			document.getElementById('add').innerHTML="Add";
			document.getElementById('add').classList.remove('edit');

					
		})


	});

	list.onclick=function() {
		list.classList.toggle('done');
		let a=list.querySelector('.fa-check')
		console.log(a.classList.toggle('check'))	
	}
	
});
}
*/