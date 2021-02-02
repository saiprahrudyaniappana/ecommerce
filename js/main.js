fetch("https://saiprahrudyaniappana.github.io/ecommerce/data/data.json").then(response=>{
	return response.json()
}).then(data=>{
	displayData(data)
})
function displayData(info){
	var bodyElement=document.querySelector("body");

	var row=document.createElement("section")
	row.classList.add("row","justify-content-center")

	bodyElement.append(row)

	info.mobiles.map(value=>{
		var column=document.createElement("article")
		column.classList.add("col-sm-10","col-md-6","col-lg-3");
		row.append(column)

		//card

		var card=document.createElement("div");
		card.classList.add("card","mt-1")


		//card-body

		var cardBody=document.createElement("div");
		cardBody.classList.add("card-body")

		//Image

		var imageElement=document.createElement("img");
		imageElement.src=value.image;
		imageElement.classList.add("img-responsive")
		imageElement.alt=value.name;

		//name

		var name=document.createElement("h2");
		name.textContent=value.name;
		name.classList.add("text-center","text-info")

		//price

		
		var offerprice=document.createElement("p");
		offerprice.classList.add("text-warning","text-center")
		offerprice.textContent="price: ₹"+value.offerprice;

		//offer-price

		var price=document.createElement("p");
		price.classList.add("text-primary","text-center")
		price.innerHTML="<s>₹ "+value.price+" /-<s>";

		//Button parent
        var buttonParent=document.createElement("div");
        buttonParent.classList.add("d-grid","gap-2");
		
		//Button

		var button=document.createElement("Button");
		button.classList.add("btn","btn-block","btn-secondary");
		button.textContent="Add to Cart"
		buttonParent.append(button)
		
		cardBody.append(imageElement)
		cardBody.append(name)
		cardBody.append(price)
		cardBody.append(offerprice)
		buttonParent.append(button)
		cardBody.append(buttonParent)

		//cardbody child of card
		
		card.append(cardBody);
		column.append(card);


	})
}

