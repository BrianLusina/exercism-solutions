var DnaTranscriber = function(){};

DnaTranscriber.prototype.toRna = function(dnaStrand){
	var s = '';
	var dnarna = {'G': 'C', 'C': 'G', 'T': 'A', 'A': 'U'};
	for(var x = 0; x < dnaStrand.length; x++){
		s += dnaStrand[x].replace(dnaStrand[x], dnarna[dnaStrand[x]]);
	}
	return s;
};

module.exports = DnaTranscriber