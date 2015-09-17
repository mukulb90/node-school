var fs = require('fs');
var path = require('path');
dir_name = process.argv[2];
ends_with = process.argv[3];
files = []
fs.readdir(dir_name, function(err, list){
	array = list
		.filter(function(value){
			return path.extname(value)===('.' + ends_with);
			})
		.map(function(value){
			console.log(value);
			});
});
