var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin
});

rl.on('line' function (line){
    console.log('input:', line)
});

rl.on('close', function(){
    console.log('close')
})
