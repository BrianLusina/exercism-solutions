var Year = function(yr){this.yr=yr;}

Year.prototype.isLeap = function(){
	return !(this.yr % 100) && this.yr % 400 || this.yr % 4 ? false : true;
}

module.exports = Year;