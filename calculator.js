// Define a function called calculator that receives an operation and two numbers and returns the result of the operation applied to the values passed as parameters

function calculator(operation, num1, num2) {
	var result = 0;
	switch(operation){
		case "suma":
			result = num1+num2;
			break;
		case "resta":
			result = num1-num2;
			break;
		case "multiplicacion":
			result = num1*num2;
			break;
		case "division":
			result = num1/num2;
			break;
		default:
	}
	return result;
}