var ETL = function(){};

ETL.prototype.transform = function (legacy) {
  var scrabble = {};
  for(var x in legacy){
    for(var i = 0; i < legacy[x].length;i++){
      scrabble[legacy[x][i].toLowerCase()] = +x;
    }
  }
  return scrabble;
};

module.exports = ETL