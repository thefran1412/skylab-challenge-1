// Writes a function that convert a hexadecimal color, "blue" for example "#0000FF" in its RGB representation rgb(0,0,255)". Give the function the name getRGB() and test it with this code

function getRGB(hex) {

	var r = parseInt(hex.substring(1, 3), 16);
	var g = parseInt(hex.substring(3, 5), 16);
	var b = parseInt(hex.substring(5, 7), 16);

	console.log("rgb("+ r + ", " + g + ", " + b + ")");
}