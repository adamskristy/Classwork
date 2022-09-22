//Whatever value is assigned to module.exports, is what the "require" function returns!
//to function you want to export, store in module.exports

//if multiple functions in file have to use dot.notation
// module.exports.name


//this array is called weekdays
module.exports.weekdays =
	['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

//this function is called getWeekday
module.exports.getWeekday = function(dayNo) {
	if (dayNo < 0 || dayNo > 6) dayNo = 0;
	return this.weekdays[dayNo];
};