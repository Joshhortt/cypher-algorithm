$("#write").click(function() {
	userMessage = prompt("Enter your message:");
	algorithmFunctions();
});

$("#cypher").click(function() {
	alert(cypherMessage);
});

$("#original").click(function() {
	alert(userMessage);
});

var algorithmFunctions = function() {
	captalizeLetters(userMessage);
	reverseLetters(cypherMessage);
	cypherMessage = userMessage + cypherMessage;
	positionLetter(userMessage);
	cypherMessage = cypherMessage.split('').reverse().join('')
	return(cypherMessage);
};

var captalizeLetters = function(message) {
	return cypherMessage = message.slice(0, 1).toUpperCase() + message.slice(-1).toUpperCase();
};

var reverseLetters = function(message) {
	return cypherMessage = cypherMessage.split('').reverse().join('');
};

var positionLetter = function(message) {
	cypherMessage = message.charAt(message.length / 2) + cypherMessage;
};

var userMessage = "";
var cypherMessage = "";
