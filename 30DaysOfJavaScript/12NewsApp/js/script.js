let newsBody = document.querySelector('#news-body');
async function get(){
	let context;
	let img = "img/not-found.jpg";
	let desc="";
	let data = await fetch('https://gnews.io/api/v4/top-headlines?token=f1540dab510ac45fd4f5f0e6d83e0074&country=in');
	data = await data.json();
	console.log(data);
	data = data.articles;
	console.log(data);
	data.forEach(function(obj){
		if(obj.image)
			img = obj.image;
		if (obj.description)
			desc = obj.description;
		context = `
				<li class="list-group-item list-group-item-action list-group-item-dark m-1">
					<div class="row">
						<div class="col-lg-4 col-sm-12 col-md-4 col-12">
							<img src="${img}" class="img-fluid" alt="Image not found">		
						</div>
						<div class="col-lg-8 col-sm-12 col-md-8 col-12">
							<a href=${obj.url}><h4>${obj.title}</h4></a>
							<p>${desc}</p>
								<div class="text-right">
									<span class="badge badge-dark badge-pill">${obj.publishedAt}</span>
								</div>
						</div>
					</div>
				</li>
				`;
		img = "img/not-found.jpg";
		desc = "";
		newsBody.innerHTML += context; 
	});

 }
get();
