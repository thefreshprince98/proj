

//FIND MEAL ON CLICK//

$("#find").on("click", function () {
	$("#recipes").empty()

	var ingredients = [];
	$(".input").each(function () {
		ingredients.push($(this).val());
	});

	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://webknox-recipes.p.rapidapi.com/recipes/findByIngredients?number=5&ingredients=" + ingredients.join(","),
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "webknox-recipes.p.rapidapi.com",
			"x-rapidapi-key": "5055de4237mshb8184148441534fp1f5c84jsnf1aa75b94cd0"
		},

	}
	$.ajax(settings).then(function (response) {
		console.log(response);
		response.forEach(response => {
			var recipeDiv = $("<h4>").addClass("button is-link is-light")
			var recipeP = $("<p>")
			var recipeP2 = $("<p>")
			var recipeP3 = $("<p>")
			//Display title of recipe//
			recipeDiv.text(response.title)
			$("#recipes").append(recipeDiv)
			//Display needed ingredients//
			recipeP.text(response.missedIngredients[0].original)
			$("#recipes").append(recipeP)
			recipeP2.text(response.usedIngredients[0].original)
			$("#recipes").append(recipeP2)
			recipeP3.text(response.usedIngredients[1].original)
			$("#recipes").append(recipeP3)
			//Show image by hover//
			recipeDiv.hover(function (event) {
				$("#recipe-image").attr("src", response.image)
			})
		});
		
	});
	
});


