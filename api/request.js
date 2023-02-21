const request = require('request');

let res = request('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv', (err, res, body) => {
    console.log("body",body)
    if (err) { return console.log(err); }
});

