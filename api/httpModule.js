const http = require("https")

let url = 'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv'

http.get(url, res => {

    let rawData = ''

    res.on('data', chunk => {
        console.log("chunk",chunk)
        rawData += chunk
    })
    console.log("raw data",rawData)

    res.on('end', () => {
    console.log("raw data",rawData)
    // const parsedData = JSON.parse(rawData)
    // console.log(parsedData)
    })

    

})