const username = document.querySelector('#uname');
const searchInput = document.querySelector('#search-input');
const followers = document.querySelector('#followers');
const following = document.querySelector('#following');
const form = document.querySelector('form');
const profileImg = document.querySelector('#profile-img');
let userRepo = document.querySelector('#user-repo');

async function getData(){
	let data = await fetch(`https://api.github.com/users/${searchInput.value}`);
	let repoData = await fetch(`https://api.github.com/users/${searchInput.value}/repos`);
	data = await data.json();
	repoData = await repoData.json();
	if(data.message == "Not Found"){
		userRepo.innerHTML = "<p class='display-alert text-danger font-weight-bolder'>Username not found!</p>"
		return;
	}
	console.log(repoData);
	setHTML(data,repoData);
	}
function setHTML(data,repoData){
	username.innerHTML = data.login;
	profileImg.src = data.avatar_url;
	following.innerHTML = data.following;
	followers.innerHTML = data.followers;
	let context;
	userRepo.innerHTML="";
	for(r in repoData){
	context=`
		<div class="row mb-3">
					<div class="col-lg-12 col-md-12 col-sm-12 col-12 border border-dark p-2">
							<p>${repoData[r].name}</p>
							<div class="row">
								<div class="col-lg-4 col-sm-4 col-md-4 col-4">
									${repoData[r].watchers}
								</div>
								<div class="col-lg-4 col-sm-4 col-md-4 col-4">
									${repoData[r].forks}
								</div>
								<div class="col-lg-4 col-sm-4 col-md-4 col-4">
									${repoData[r].size}KB
								</div>
							</div>
					</div>
					
				</div>
	`;	userRepo.innerHTML += context;
	;}}
form.addEventListener('submit',function(e){
	e.preventDefault();
	getData();
})
