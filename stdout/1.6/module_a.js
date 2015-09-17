var fs = require('fs');
var path = require('path');
var getFiles = function(dir_name, ends_with, callback){
	fs.readdir(dir_name, function(err, list){
		if(err) 
			{
			return callback(err);
			}
		var arr = 	list
			.filter(function(value){
				return path.extname(value)===('.' + ends_with);
			})
		callback(null, arr);	
	
		
	});
};
module.exports = getFiles;

