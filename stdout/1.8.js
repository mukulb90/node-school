var http = require('http');
url = process.argv[2];
http.get(url, function(response){
	collector = ''
	response.on('data', function(data){
		collector = collector + data.toString();		
	});
	response.on('end', function(event){
		console.log(collector.length);
		console.log(collector);
	});
});
