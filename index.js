const express = require('express')
const readFile = require("./api/readCSV")
const app = express()
const port = 3000


app.get('/authors', async(req, res) => {
  let jsonArray = await readFile.readFiles("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv");
  let body = await readFile.getBody(jsonArray,"authors");
  let data = `<h1 style="text-align:center"> LIST OF AUTHORS <h1> </br> ${body} `
    res.send(data)
})

app.get('/books', async(req, res) => {
  let jsonArray = await readFile.readFiles("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv");
  let body = await readFile.getBody(jsonArray,"books");
  let data = `<h1 style="text-align:center"> LIST OF BOOKS <h1> </br> ${body} `
    res.send(data)
})

app.get('/magazines', async(req, res) => {
  let jsonArray = await readFile.readFiles("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv");
  let body = await readFile.getBody(jsonArray,"magazines");
  let data = `<h1 style="text-align:center"> LIST OF MAGAZINES <h1> </br> ${body} `
    res.send(data)
})

app.get('/magazines/:isbnNo', async(req, res) => {
  console.log(req.params)
  let jsonArray = await readFile.readFiles("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/magazines.csv");
  let filter = jsonArray.filter((data)=>{if(data.isbn == req.params.isbnNo)return data});
  console.log(filter);
  let data;
  if(filter.length > 0){
    data = `<h3 style="margin:100px"> Magazine with ISBN  ${req.params.isbnNo} is ${filter[0].title}  <h3> </br>  `
  }else{
    data = `<h3 style="text-align:center"> There are no magazines with ISBN  ${req.params.isbnNo} <h3> </br>  `;
  }
  res.send(data)
})

app.get('/books/:isbnNo', async(req, res) => {
  console.log(req.params)
  let jsonArray = await readFile.readFiles("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/books.csv");
  let filter = jsonArray.filter((data)=>{if(data.isbn == req.params.isbnNo)return data});
  console.log(filter);
  let data;
  if(filter.length > 0){
    data = `<h3 style="margin:100px"> Books with ISBN  ${req.params.isbnNo} is ${filter[0].title}  <h3> </br>  `
  }else{
    data = `<h3 style="text-align:center"> There are no books with ISBN  ${req.params.isbnNo} <h3> </br>  `;
  }
  res.send(data)
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})