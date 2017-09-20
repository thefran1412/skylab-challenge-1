function encodeWord(word) {
	word = word.toLowerCase();
	var encoded = "";
	for (var i = 0; i < word.length; i++) {
		switch(word[i]){
			case "t":
				encoded += "7";
				break;
			case "a":
				encoded += "4";
				break;
			case "s":
				encoded += "5";
				break;
			case "o":
				encoded += "0";
				break;
			default:
				encoded += word[i];
		}
	}
	return encoded;
}