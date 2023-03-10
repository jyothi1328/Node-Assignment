const fs = require('fs')
const { parse } = require("csv-parse");

/**Function for reading csv files */
function readFile(id:string){
  let books :any = [];
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

module.exports = readFile

/**Function for getting books with isbn */
// function getBookWithISBN(id){
//   let books = [];
//   fs.createReadStream("./books.csv")
//   .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true,
//   skip_empty_lines: true}))
//   .on("data", function (row) {
//     books.push(row)
//   })
//   .on("end", function () {
//     // console.log("Authors",books);
//     let author = []
//     books.forEach(data=>{
//       if(data.isbn == id){
//             // console.log("match")
//             author.push(data)
//           }
//     })
//      console.log("author",author)
//     // console.log("id",id)
//     // if(author){
//     //   return author
//     // }else{
//     //   return "Books not found with this ISBN"
//     // }
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
// }

// /**Function for getting magazines with isbn */
// function getMagazineWithISBN(id){
//   let magazines = [];
//   fs.createReadStream("./magazines.csv")
//   .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true,
//   skip_empty_lines: true}))
//   .on("data", function (row) {
//     magazines.push(row)
//   })
//   .on("end", function () {
//     // console.log("Authors",magazines);
//     let author = []
//     magazines.forEach(data=>{
//       if(data.isbn == id){
//             // console.log("match")
//             author.push(data)
//           }
//     })
//      console.log("author",author)
//     // console.log("id",id)
//     // if(author){
//     //   return author
//     // }else{
//     //   return "magazines not found with this ISBN"
//     // }
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
// }

// /**Function for getting books with authors email */
// function getBooksWithEmail(id){
//   let books = [];
//   fs.createReadStream("./books.csv")
//   .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true, skip_empty_lines: true}))
//   .on("data", function (row) {
//     books.push(row)
//   })
//   .on("end", function () {
//     // console.log("Authors",books);
//     let bks = []
//     books.forEach(data=>{
//       if(data.authors == id){
//             // console.log("match")
//             bks.push(data)
//           }
//     })
//      console.log("author",bks)
//     // console.log("id",id)
//     // if(author){
//     //   return author
//     // }else{
//     //   return "Books not found with this ISBN"
//     // }
//   })
//   .on("error", function (error) {
//     console.log(error.message);
//   });
// }

// /**Function for getting books with authors email */
// // function getmagazinesWithEmail(id){
// //   let books = [];
// //   fs.createReadStream("./magazines.csv")
// //   .pipe(parse({ delimiter: ";", from_line: 1 ,columns: true, skip_empty_lines: true}))
// //   .on("data", function (row) {
// //     books.push(row)
// //   })
// //   .on("end", function () {
// //     // console.log("Authors",books);
// //     let bks = []
// //     books.forEach(data=>{
// //       if(data.authors == id){
// //             // console.log("match")
// //             bks.push(data)
// //           }
// //     })
// //      console.log("author",bks)
// //     // console.log("id",id)
// //     // if(author){
// //     //   return author
// //     // }else{
// //     //   return "Books not found with this ISBN"
// //     // }
// //   })
// //   .on("error", function (error) {
// //     console.log(error.message);
// //   });
// // }

readFile("authors")
// getBookWithISBN("1215-4545-5895");
// getMagazineWithISBN("2365-8745-7854")
// getBooksWithEmail("null-walter@echocat.org")
// getmagazinesWithEmail("null-walter@echocat.org")



