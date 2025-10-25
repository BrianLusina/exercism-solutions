var BeerSong = function(){}

BeerSong.prototype.verse = function(verseNo){
	if(verseNo === 0)
		return "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n";
	else{
		return `${verseNo} bottle${verseNo > 1 ? "s" : ""} of beer on the wall, ${verseNo} bottle${verseNo > 1 ? "s" : ""} of beer. Take one down and pass it around, ${verseNo-1 === 0 ? "no more bottles of beer on the wall." : String(verseNo-1) + " bottles of beer on the wall."}`;
	}
};

BeerSong.prototype.sing = function(start, stop = 0) {
	var res = "";
	for (var i = start; i > stop; i--) {
	res += `${i} bottle${i > 1 ? "s" : ""} of beer on the wall, ${i} bottle${i > 1 ? "s" : ""} of beer. Take one down and pass it around, ${i-1 === 0 ? "no more bottles of beer on the wall. Go to the store and buy some more, 99 bottles of beer on the wall." : String(i-1) + " bottles of beer on the wall."}`;	
	}
	return res;
};

module.exports = BeerSong