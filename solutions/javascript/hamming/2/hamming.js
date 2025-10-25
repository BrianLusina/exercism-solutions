var Hamming = function(){};

Hamming.prototype.compute = function(s1,s2){
	hammingdis = 0;
	if(s1.length !== s2.length){
		throw "DNA strands must be of equal length";
	}else if(s1 === s2){
		return hammingdis;
	}else{
		for(var x =0; x<s1.length;x++){
			if(s1[x] !== s2[x])
				hammingdis++;
		}
	}
return hammingdis;
};
module.exports = Hamming