const fs = require('fs')
const { parse } = require("csv-parse");
const { default: axios } = require('axios')


const readCSVFile = {}
/**Function for reading csv files */
readCSVFile.readFiles = async function(id){
  let data = await axios.get("https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv");
    // console.log(JSON.stringify(data))
    console.log(data.data,typeof(data.data));
    data = data.data
    // data.split();
    var lines=data.split("\n");
    // console.log(lines[0]);

    var result = [];
    var headers=lines[0].split(";");
    for(var i=1;i<lines.length-1;i++){  
        var obj = {};
        var currentline=lines[i].split(";");  
        for(var j=0;j<headers.length;j++){
            obj[headers[j]] = currentline[j];
        }  
        result.push(obj);  
    }
    console.log(result);
    return result
}

module.exports = readCSVFile

/**Function for reading csv files */
function readFile(id){
  let books = [];
  fs.createReadStream(`${id}.csv`)
  .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true,
  skip_empty_lines: true}))
  .on("data", function (row) {
    books.push(row)
  })
  .on("end", function () {
    console.log("Authors",books);  
  })
  .on("error", function (error) {
    console.log(error.message);
  });
}

/**Function for getting books with isbn */
function getBookWithISBN(id){
  let books = [];
  fs.createReadStream("./books.csv")
  .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true,
  skip_empty_lines: true}))
  .on("data", function (row) {
    books.push(row)
  })
  .on("end", function () {
    // console.log("Authors",books);
    let author = []
    books.forEach(data=>{
      if(data.isbn == id){
            // console.log("match")
            author.push(data)
          }
    })
     console.log("author",author)
   
  })
  .on("error", function (error) {
    console.log(error.message);
  });
}

/**Function for getting magazines with isbn */
function getMagazineWithISBN(id){
  let magazines = [];
  fs.createReadStream("./magazines.csv")
  .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true,
  skip_empty_lines: true}))
  .on("data", function (row) {
    magazines.push(row)
  })
  .on("end", function () {
    // console.log("Authors",magazines);
    let author = []
    magazines.forEach(data=>{
      if(data.isbn == id){
            // console.log("match")
            author.push(data)
          }
    })
     console.log("author",author)
   
  })
  .on("error", function (error) {
    console.log(error.message);
  });
}

/**Function for getting books with authors email */
function getBooksWithEmail(id){
  let books = [];
  fs.createReadStream("./books.csv")
  .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true, skip_empty_lines: true}))
  .on("data", function (row) {
    books.push(row)
  })
  .on("end", function () {
    // console.log("Authors",books);
    let bks = []
    books.forEach(data=>{
      if(data.authors == id){
            // console.log("match")
            bks.push(data)
          }
    })
     console.log("author",bks)
   
  })
  .on("error", function (error) {
    console.log(error.message);
  });
}

/**Function for getting books with authors email */
function getmagazinesWithEmail(id){
  let books = [];
  fs.createReadStream("./magazines.csv")
  .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true, skip_empty_lines: true}))
  .on("data", function (row) {
    books.push(row)
  })
  .on("end", function () {
    // console.log("Authors",books);
    let bks = []
    books.forEach(data=>{
      if(data.authors == id){
            // console.log("match")
            bks.push(data)
          }
    })
     console.log("author",bks)
   
  })
  .on("error", function (error) {
    console.log(error.message);
  });
}

// readFile("books")
// getBookWithISBN("1215-4545-5895");
// getMagazineWithISBN("2365-8745-7854")
// getBooksWithEmail("null-walter@echocat.org")
// getmagazinesWithEmail("null-walter@echocat.org")



// module.exports = readFile