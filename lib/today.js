
var today = [
		"It's friday, Grab A Movie.",
		"It's Monday send Flowers.",
		"Never a better day to surprise someone with movie tickets than Tuesday!"
	];

exports.getToday = function (){
    var idx = Math.floor(Math.random() * today.length);
    return today[idx];
    };


