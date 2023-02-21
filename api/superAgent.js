const superagent = require("superagent")
const unirest = require('unirest')


// superagent
//     .get("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv")
//     .end( (error, res) => {
//         console.log("res",JSON.stringify(res))
//     if (error) {
//         return console.log(error)
//     }
//     console.log(res.text)
// })


// unirest.get('https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv')
//     .end((res) => {
//         if (res.error) {
//             console.log(res.error)
//         } else {
//         console.log(res.body)
//         }
// })