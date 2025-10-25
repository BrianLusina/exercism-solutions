function School(){
	/*Create a database object*/
	var roster = {};

	//get the roster
	function retrieveRoster(){
		return roster;
	}
	//get a specific grade
	function getGrade(grade){
		return (roster.hasOwnProperty(grade)) ? roster[grade] : [];
	}

	// add to roster
	function addRoster(name, grade){
		if(roster.hasOwnProperty(grade)){
			roster[grade].push(name);
			roster[grade] = roster[grade].sort();
		}else{
			roster[grade] = [name];
		}
	}

	return {
		add: addRoster,
		roster: retrieveRoster,
		grade:getGrade
	};
}


module.exports = School