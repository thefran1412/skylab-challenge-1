// Improves the previous function so besides the conversion also identifies some basic colors:

function getRGB(hex) {

	var r = parseInt(hex.substring(1, 3), 16);
	var g = parseInt(hex.substring(3, 5), 16);
	var b = parseInt(hex.substring(5, 7), 16);

	var color = ""; 
	switch(hex.toUpperCase()) {
		case "#000000":
			color = "black";
			break;
		case "#FFFFFF":
			color = "white";
			break;
		case "#FF0000":
			color = "red";
			break;

		case "#00FF00":
			color = "green";
			break;

		case "#0000FF":
			color = "blue";
			break;
		default:
			color = "";
	}

	console.log("rgb("+ r + ", " + g + ", " + b + ") " + color);
}