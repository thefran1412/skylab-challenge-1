// Write a program that writes in the console all the multiples of 23 less than 500 and at the end writes the sum of all of them

function calc() {
	var sum = 0;
	var output = "";
	for (var i = 23; i < 500; i += 23) {
		output += i + " ";
		sum += i;
	}
	console.log("Elements : " + output + "\n" + "Sum : " + sum);
}