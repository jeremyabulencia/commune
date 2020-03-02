// planet libraries
addPlanet = function (planetName) {
	planetRef.push({
		planet_name: planetName
	});
}

getPlanetData = function (planetName) {
	planetRef.on("value", function (snapshot) {
		$.each(snapshot.val(),function (index, data) {
			planets.push({
				id : index,
				value : data.planet_name
			});
		})
	});
}

$(document).ready( function () {
	callbacks = $.Callbacks();
	planets = [];
	
	var rootRef = new Firebase("https://commune-78ca2.firebaseio.com/");
	planetRef = rootRef.child('planets');

	
	planetLists = function () {
		callbacks.fire(getPlanetData());
		planetListLayout = '<li class="planet" id=[planet_id]>[planet_name]</li>';
		var newInput = planetListLayout;
console.log(planets)
		// $.each(planets, function (i, x) {
		// 	// newInput = newInput.replace('[planet_id]', i)
		// 	console.log(i)
		// })

	}
	callbacks.fire(planetLists());
});