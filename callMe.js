var callMe = (function() {
	var numCalls = 0
	return function(){
		return numCalls++;
	}
})()
callMe();

function callMe() {
	var numCalls = 0
	callMe = function () {
		return ++numCalls;
	}
	return callMe();
}