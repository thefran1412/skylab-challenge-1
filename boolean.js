// Define a function called ​isBoolean​ that receives a value and return true if the value received is a boolean

function isBoolean(value) {
	if (typeof value === "boolean") {
		return true;
	}
	return false;
}
isBoolean("2");