var fs = require('fs');
filename = process.argv[2];
var get_no_of_lines = function(filename){
	count = 0;
	fs.readFile(filename, 'utf8', function(err, data){
		if(err) throw err;
		count = count +  data.split('\n').length-1;
		console.log(count);	
});
	
};
get_no_of_lines(filename);


