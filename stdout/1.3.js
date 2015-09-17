var fs = require('fs')
filename = process.argv[2]
data = fs.readFileSync(filename, 'utf8');
lines = data.split('\n');
console.log(lines.length-1);
