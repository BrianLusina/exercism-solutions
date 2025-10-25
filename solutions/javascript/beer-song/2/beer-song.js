var BeerSong = function(){}

BeerSong.prototype.verse = function(verseNo){
	return (verseNo === 0) ? "No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n":
`${verseNo} bottle${verseNo > 1 ? "s" : ""} of beer on the wall, ${verseNo} bottle${verseNo > 1 ? "s" : ""} of beer.\nTake ${verseNo === 1 ? "it": "one"} down and pass it around, ${verseNo-1 === 0 ? 'no more bottles of beer on the wall.\n' : String(verseNo-1) + ' bottles of beer on the wall.\n'}`;
};

BeerSong.prototype.sing = function(start, stop = 0) {
	var res = "";
	var end = "no more bottles of beer on the wall.'\n\n'No more bottles of beer on the wall, no more bottles of beer.'\n'Go to the store and buy some more, 99 bottles of beer on the wall.'\n'";

	for (var i = start; i >= stop; i--) {
		var r = `${i === stop ? "\n" : "\n\n"}`;
		if(i === 0)
			break;
	res += `${i} bottle${i > 1 ? "s" : ""} of beer on the wall, ${i} bottle${i > 1 ? "s" : ""} of beer.\nTake ${i === 1?"it":"one"} down and pass it around, ${i-1 == 0 ? end : String(i-1) + " bottles of beer on the wall."+r}`;

	}
	return res;
};

module.exports = BeerSong