var Bob = function() {};

Bob.prototype.hey = function(input) {
	/*Address without saying anything*/
	if(input.match(/^\s*$/))
		return "Fine. Be that way!";
	/**Yelling!*/
	else if(input.toUpperCase() === input)
		return "Whoa, chill out!";	
	/*Question*/
	else if(input.match(/\w+\?$/g))
		return "Sure.";
	/*Everything else*/
	else
		return "Whatever.";
};

module.exports = Bob;