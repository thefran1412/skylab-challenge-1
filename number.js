// Define a function called ​isNumber​ that receives a value and return true if the value received is a number

function isNumber(value) {
	if (typeof value === "number") {
		return true;
	}
	return false;
}
isNumber(2);