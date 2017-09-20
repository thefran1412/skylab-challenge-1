// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.

function maxOfThree(numbers){
	var largest = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		if(largest < arguments[i]){
			largest = arguments[i];
		}
	}
	console.log(largest);
}

maxOfThree(9, 3, 4, 5, 6, 7, 7, 8)