module.exports = {
  translate : function(phrase){
    let words = phrase.split(" ");
    let translated = [];

    function translateWord(word){
      let parts = word.match(/^([^aeiou]?qu|[^aeiou]*)(.+)/);
      let beginning = parts[1];
      let ending = parts[2];

      if(beginning.length === 0){
        translated.push(word + "ay");
      }else{
        translated.push(ending + beginning + "ay");
      }
    }

    words.forEach(translateWord);
    return translated.join(" ");
  }

};