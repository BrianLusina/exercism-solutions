var begin = "I know an old lady who swallowed a ";
var chain = ["fly", "spider", "bird", "cat", "dog", "goat", "cow", "horse"];

var sheSwallowed = "She swallowed the ", toCatch = " to catch the ";

var whySpider = sheSwallowed+ chain[1] + toCatch;
var spider = toCatch + chain[1] +" that wriggled and jiggled and tickled inside her.\n";
var whybird = sheSwallowed + chain[2] + spider;
var whyCat = sheSwallowed + chain[3] + toCatch + chain[2]+ ".\n";
var whyDog = sheSwallowed + chain[4] + toCatch + chain[3] + ".\n";
var whyGoat = sheSwallowed + chain[5] + toCatch + chain[4] + ".\n";
var whyCow = sheSwallowed + chain[6] + toCatch + chain[5] + ".\n" ;

var end = "I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n";
var ultimateEnd = "She\'s dead, of course!\n";

var FoodChain = function(){

}

FoodChain.prototype.verse = function(v){
	switch(v){
		/*swallowed a fly*/
		case 1:
			return begin + chain[v-1] + ".\n" + end;
		/*swallowed a spider*/
		case 2:
			return begin + chain[v-1] + ".\n" + "It wriggled and jiggled and tickled inside her.\n" + whySpider + chain[v-2]+".\n" +  end;
		/*swallowed a bird*/
		case 3:
			return begin + chain[v-1]+".\n" + "How absurd to swallow a " + chain[v-1] +"!\n"+ whybird + whySpider + chain[v-3]+".\n" +  end;
		/*swallowed a cat*/			
		case 4:
			return begin + chain[v-1]+".\n" + "Imagine that, to swallow a " +chain[v-1] + "!\n" + whyCat + whybird +whySpider + chain[v-4]+".\n" + end;
		/*swallow a dog*/
		case 5:
			return begin + chain[v-1]+".\n" + "What a hog, to swallow a " + chain[v-1] + "!\n" + whyDog + whyCat + whybird + whySpider + chain[v-5] + ".\n" + end;
		/*swallow a goat*/
		case 6:
			return begin + chain[v-1] + ".\n" + "Just opened her throat and swallowed a " + chain[v-1] + "!\n" + whyGoat + whyDog + whyCat + whybird + whySpider +chain[v-6] + ".\n" + end;
		/*swallow a cow*/
		case 7:
			return begin + chain[v-1] + ".\n" + "I don\'t know how she swallowed a " + chain[v-1] + "!\n" + whyCow + whyGoat + whyDog + whyCat + whybird + whySpider + chain[v-7] + ".\n" + end;
		/*swallow a horse*/
		case 8:
			return begin + chain[v-1] + ".\n"+ ultimateEnd;
	}
}

FoodChain.prototype.verses = function(v1, v2){
	var song = "";

	for(var x = 0; x < v2; x++){
		song += `${x === 0 ? begin + chain[x] +".\n" + end + "\n" :""}`+
				`${x === 1 ? begin + chain[x] +".\n" + "It wriggled and jiggled and tickled inside her.\n" + whySpider + chain[x-1] + ".\n" + end +"\n" : ""}`+
				`${x === 2 ? begin + chain[x] + ".\n" + "How absurd to swallow a " + chain[x] + "!\n" + whybird + whySpider + chain[x-2]+".\n" + end +"\n": ""}` + 
				`${x === 3 ? begin + chain[x] + ".\n" + "Imagine that, to swallow a " + chain[x] + "!\n" + whyCat + whybird + whySpider + chain[x-3]+".\n" + end +"\n": ""}` +
				`${x === 4 ? begin + chain[x] + ".\n" + "What a hog, to swallow a " + chain[x] + "!\n" + whyDog + whyCat + whybird + whySpider + chain[x-4]+".\n" + end +"\n": ""}` +
				`${x === 5 ? begin + chain[x] + ".\n" + "Just opened her throat and swallowed a " + chain[x] + "!\n" + whyGoat + whyDog + whyCat + whybird + whySpider + chain[x-5]+".\n" + end +"\n": ""}`+
				`${x === 6 ? begin + chain[x] + ".\n" + "I don\'t know how she swallowed a " + chain[x] + "!\n" + whyCow + whyGoat + whyDog + whyCat + whybird + whySpider + chain[x-6]+".\n" + end +"\n": ""}`+
				`${x === 7 ? begin + chain[x] + ".\n" + ultimateEnd + "\n": ""}`;
		v1++;
		if(v1>v2)
			break;
	}

	return song
}

module.exports = FoodChain