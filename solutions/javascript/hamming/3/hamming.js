var Hamming = function(){};

Hamming.prototype.compute = function(s1,s2){
	hammingdis = 0;
	if(s1.length !== s2.length){
		throw new Error("DNA strands must be of equal length.");
	}else{
		for(var x =0; x<s1.length;x++){
			(s1[x] !== s2[x]) ? hammingdis++ : hammingdis;
		}
	}
return hammingdis;
};
module.exports = Hamming