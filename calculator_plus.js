// Define a function called calculator that receives an operation and several numbers (can be 2 or 10 or whatever) returns the result of the operation applied to the values passed as parameters

function calculator() {
	var result = arguments[1];
	for (var i = 2; i < arguments.length; i++) {
		switch(arguments[0]){
			case "suma":
				result += arguments[i];
				break;
			case "resta":
				result -= arguments[i];
				break;
			case "multiplicacion":
				result *= arguments[i];
				break;
			case "division":
				result /= arguments[i];
				break;
			default:
		}
	}
	return result;
}