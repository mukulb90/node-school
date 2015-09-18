var http = require('http');
var collector = require('./util/collector');
var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var collectors = [];

var onEndEvent = function(data_collector){
	collectors.push(data_collector);
	if (collectors.length === 3){
        collectors.sort(function(one, two){
            if (one.name > two.name){
                return 1;
            }
            else if(two.name > two.name){
                return -1;
            }
            else return 0;
        })
		collectors.map(function(collector){
            console.log(collector.value);
        });
	}
}

var collector1 = new collector.collector(1);
collector1.subscribeEndEvent(onEndEvent);
var collector2 = new collector.collector(2);
collector2.subscribeEndEvent(onEndEvent);
var collector3 = new collector.collector(3);
collector3.subscribeEndEvent(onEndEvent);


var get = function(url, data_collector){
	http.get(url, function(response){
		response.on('data', function(data){
			data_collector.value = data_collector.value + data.toString();
		});
		response.on('end', function(end){

			data_collector.raiseEndEvent();
		});
	});
}



get(url1, collector1);
get(url2, collector2);
get(url3, collector3);

