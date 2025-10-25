var Bob = function() {};

Bob.prototype.hey = function(input) {
  if (input.trim().length === 0) return 'Fine. Be that way!';

  const hasLetter = input.match(/[a-z]/i);
  const allUppercase = input.split('').map(letter => letter === letter.toUpperCase())
                            .reduce((prev, current) => prev && current);
  
  if (allUppercase && hasLetter) {
    return 'Whoa, chill out!';
  } else if (input.match(/\w+\?$/g)) {
    return 'Sure.';
  } else {
    return 'Whatever.';
  }
};

module.exports = Bob;