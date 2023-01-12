const express = require('express')
const readFile = require("./api/readFile")
const app = express()
const port = 3000

app.get('/:id', (req, res) => {
    res.send(readFile(id))
//   res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})