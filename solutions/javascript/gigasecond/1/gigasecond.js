(function(){
	'use strict';
	
	function Gigasecond(date){
    	this.date = date;
	};

	
	Gigasecond.prototype.date = function(){
		var gigBirthDay = new Date(this.date.getTime() + Math.pow(10,9));
		return this._beginDay(gigBirthDay);
	};

	Gigasecond.prototype._beginDay = function(d){
			d.setSeconds(0);
			d.setMinutes(0);
			d.setHours(0);
			return d;	
	};
	
	module.exports = Gigasecond

})();