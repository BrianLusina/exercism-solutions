function Anagram(word) {
  var alphabetized;

  word = word.toLowerCase();
  alphabetized = alphabetize(word);

  function isAnAnagram(otherWord) {
    otherWord = otherWord.toLowerCase();
    return (word !== otherWord &&  alphabetized === alphabetize(otherWord));
  }

  function findMatches(potentialAnagrams) {
    if (typeof potentialAnagrams === 'string') {
      potentialAnagrams = [].slice.apply(arguments);
    }
    return potentialAnagrams.filter(isAnAnagram);
  }

  return {
    matches: findMatches
  };
}

function alphabetize(w) {
  return w.split('').sort().join('');
}
module.exports = Anagram