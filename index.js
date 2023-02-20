const express = require('express')
const readFile = require("./api/readCSV")
const app = express()
const port = 3000

function result(id){
  return readFile(id)
}

app.get('/:id', (req, res) => {
    res.send(result(req.params.id))
})

app.get('/', async(req, res) => {
  let red = await readFile.readFiles()
  // .then((data)=> data).catch("catch").then(data => data);
  console.log("led",red)
    res.send('<ul>' + JSON.stringify(red[0]) + '</ul>')
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})