// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(letter) {
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	if (vowels.indexOf(letter) === -1) {
		return false;
	}		
	return true;
}
