function Words(){}

Words.prototype.count = function(sentence){
    var senArr = sentence.replace(/\r?\n|\r|\t/g," ").trim().toLowerCase().split(" ");
    var result = new Object;
    for(var i = 0; i < senArr.length; i++){
    	var w = senArr[i];
    	result[w] = result[w] ? result[w] +1:1;
    }
    return result;
};

module.exports = Words