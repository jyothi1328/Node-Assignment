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

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})