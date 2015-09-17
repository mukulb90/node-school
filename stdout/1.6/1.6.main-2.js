var module_a = require('./module_a');
dirPath = process.argv[2];
extension = process.argv[3];
module_a(dirPath, extension, function(err, data){
	data.map(function(value){
		console.log(value);
	});
		
});
