const api = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Cpolkadot%2Cdogecoin%2Cbitcoin%2Clitecoin%2Csolana%2Ctether%2Ccardano&vs_currencies=usd&include_market_cap=true&include_24hr_change=true";
const tableBody = document.querySelector('tbody');
async function getData(){
	let data = await fetch(api);
	let context = "";
	let count = 1;
	data = await data.json();
	for(let coin in data){
		if(data[coin].usd_24h_change.toString().slice(0,1)==="-")
			price = `<td style="color:#e81a1a">$${parseFloat(data[coin].usd_24h_change).toFixed(3)}</td>`
		else
			price = `<td style="color:#09a709">$${parseFloat(data[coin].usd_24h_change).toFixed(3)}</td>`

		context = `<tr>
						<td>${count}</td>
						<td class="img"><img src="img/${coin}.png" style="margin-right:5px"> ${coin.slice(0,1).toUpperCase()+coin.slice(1)}</td>
						<td>$${parseFloat(data[coin].usd).toFixed(3)}</td>
						${price}
						<td>$${parseFloat(data[coin].usd_market_cap).toFixed(3)}</td>
					</tr>`
		tableBody.innerHTML += context;	
		count+=1;
	}
}
getData();
