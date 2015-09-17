var num_array = process.argv.splice(2);
sum = num_array.reduce(
		function(a,b){
			return Number(a) + Number(b);
		});

console.log(sum);

