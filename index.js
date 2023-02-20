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
  let red = await readFile.readFiles();
  let ordersBody = await readFile.getBody(red);


  let data = `<b> LIST OF AUTHORS </b> </br> ${ordersBody} `
    res.send(data)
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})