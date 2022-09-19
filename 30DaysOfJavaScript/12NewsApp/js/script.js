let newsBody = document.querySelector('#news-body');
async function get(){
	let context;
	let img = "img/not-found.jpg";
	let desc="";
	let data = await fetch('https://newsdata.io/api/1/news?country=in&apikey=pub_11409423982f8c2dc6b488cd3ecfc65df6e92');
	data = await data.json();
	console.log(data);

	data = data.results;
	console.log(data);
	data.forEach(function(obj){
		if(obj.image_url)
			img = obj.image_url;
		if (obj.description)
			desc = obj.description;
		context = `
				<li class="list-group-item list-group-item-action list-group-item-dark m-1">
					<div class="row">
						<div class="col-lg-4 col-sm-4 col-md-4 col-4">
							<img src="${img}" class="img-fluid" alt="Image not found">		
						</div>
						<div class="col-lg-8 col-sm-8 col-md-8 col-8">
							<a href=${obj.link}><h4>${obj.title}</h4></a>
							<p>${desc}</p>
								<div class="text-right">
									<span class="badge badge-dark badge-pill">${obj.pubDate}</span>
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
