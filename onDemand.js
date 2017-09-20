// Write a function that writes in the console the multiplication table (in one column) of any number passed as parameter

function onDemand(number) {
	var output = "";
	for (var i = 1; i <= 10; i++) {
		output += (number*i) + "\n"; 
	}
	console.log(output);
}