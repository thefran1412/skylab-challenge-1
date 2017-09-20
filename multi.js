// Write a function that writes in the console the multiplication table (from 1 to 10)

function multi() {
	var output = "";
	for (var i = 1; i <= 10; i++) {
		for (var o = 1; o <= 10; o++) {
			output += i*o + "\t";

		}
		output += "\n";
	}
	console.log(output);
}