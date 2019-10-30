const button = document.getElementsByClassName('button');

for (but of button) {
	but.onclick = function() {
		handleClick(this.getAttribute('data-type'));
	}
}

function handleClick(type) {
	
	const text = document.getElementById('text').value;

	if (type == "encode") {
		result = encodeText(text);
	} else if (type == "decode") {
		result = decodeText(text);
	}

	document.getElementById('output-text').innerHTML = result;

}

function encodeText(text) {

	const phrase = "зазон";
	let string = "";

	text.toLowerCase();

	newText = text.split(/[^а-яё]/);
	console.log(newText);

	for (word of newText) {

		chars = word.split("");

		for (char of chars) {

			code = char.charCodeAt() - 1072;
			code = code.toString(2);

			while(code.length < 5) {
				code = "0"+code;
			}

			newPhrase = phrase.split('');

			for (i = 0; i < code.length; i++) {
				if (code[i] == '1') {
					newPhrase[i] = newPhrase[i].toUpperCase();
				}
			}

			string += newPhrase.join('')+ " ";

		}

		string += "| ";

	}

	return string;

}

function decodeText(text) {

	let words = text.split(" | "),
		code = "",
		newWord = "";

	for (word of words) {

		chars = word.split(" ");

		for (char of chars) {

			phraseChars = char.split('');

			for (phraseChar of phraseChars) {

				symbol = phraseChar.toUpperCase();
				if (symbol == phraseChar) {
					code += "1";
				} else {
					code += "0";
				}

			}

			code = Number(code);
			code = parseInt(code, 2).toString();
			newChar = String.fromCharCode(Number(code)+1072);
			code = "";

			newWord += newChar;

		}

		newWord += " ";
	}

	return newWord;

}