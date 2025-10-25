var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.trim().length === 0) return 'Fine. Be that way!';

  const punctuation = input.slice(-1);
  const containsLetter = input.match(/[a-z]/i);
  const allUppercase = input.split('')
                            .map(letter => letter === letter.toUpperCase())
                            .reduce((prev, current) => prev && current);
  
  if (allUppercase && containsLetter) {
    return 'Whoa, chill out!';
  } else if (punctuation === '?') {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};


module.exports = Bob;