const fs = require('fs')
const { parse } = require("csv-parse");
const { default: axios } = require('axios')


const readCSVFile = {}
/**Function for reading csv files */
readCSVFile.readFiles = async function(id){
  let data = await axios.get(id);
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
  //   console.log(result);
    return result
}

readCSVFile.getBody = async function(result,type){
  let tableHeaders
  let columns = ``;
  let overAllTable = ``;

  if(type == 'authors'){
    tableHeaders = `<div style="padding-left:500px">` + `<table border="1" cellpadding="3px" cellspacing="0" bordercolor="#rrr">`
      + `<tr style="background-color:#ccebff">`
      + `<td style="text-align:center"><b>Email  </b></td>`
      + `<td style="text-align:center"><b>First Name</b></td>`
      + `<td style="text-align:center"><b>Last Name</b></td>`
      + `</tr>`
      + "COLUMNS" + "</table><br>"+`</div>`
    for (const element of result) {
      columns += `<tr>
      <td style="text-align:center">${element.email}</td>
      <td style="text-align:left">${element.firstname}</td>
      <td style="text-align:center">${element.lastname}</td>
      </tr>`;
    }
  }else if(type == 'books'){
    tableHeaders = `<div style="padding:20px">` + `<table border="1" cellpadding="3px" cellspacing="0" bordercolor="#rrr">`
    + `<tr style="background-color:#ccebff">`
    + `<td style="text-align:center"><b>Title  </b></td>`
    + `<td style="text-align:center"><b>Author</b></td>`
    + `<td style="text-align:center"><b>ISBN</b></td>`
    + `<td style="text-align:center"><b>Description</b></td>`
    + `</tr>`
    + "COLUMNS" + "</table><br>"+`</div>`
    for (const element of result) {
      columns += `<tr>
      <td style="text-align:center">${element.title}</td>
      <td style="text-align:left">${element.authors}</td>
      <td style="text-align:center">${element.isbn}</td>
      <td style="text-align:center">${element.description}</td>
      </tr>`;
    }
  }else if(type == 'magazines'){
    tableHeaders = `<div style="padding:20px">` + `<table border="1" cellpadding="3px" cellspacing="0" bordercolor="#rrr">`
    + `<tr style="background-color:#ccebff">`
    + `<td style="text-align:center"><b>Title  </b></td>`
    + `<td style="text-align:center"><b>Author</b></td>`
    + `<td style="text-align:center"><b>ISBN</b></td>`
    + `<td style="text-align:center"><b>Published at</b></td>`
    + `</tr>`
    + "COLUMNS" + "</table><br>"+`</div>`
    for (const element of result) {
      columns += `<tr>
      <td style="text-align:center">${element.title}</td>
      <td style="text-align:left">${element.authors}</td>
      <td style="text-align:center">${element.isbn}</td>
      <td style="text-align:center">${element.publishedAt}</td>
      </tr>`;
    }
  }
  
    
  
  overAllTable = tableHeaders.replace('COLUMNS', columns);
  return overAllTable
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

// let magazines = [
//   {
//     "title": "Beautiful cooking",
//     "isbn": "5454-5587-3210",
//     "authors": "null-walter@echocat.org",
//     "publishedAt": "21.05.2011"
//   },
//   {
//     "title": "My familie and me",
//     "isbn": "4545-8541-2012",
//     "authors": "null-mueller@echocat.org",
//     "publishedAt": "10.07.2011"
//   },
//   {
//     "title": "Cooking for gourmets",
//     "isbn": "2365-5632-7854",
//     "authors": "null-lieblich@echocat.org,null-walter@echocat.org",
//     "publishedAt": "01.05.2012"
//   },
//   {
//     "title": "Gourmet",
//     "isbn": "2365-8745-7854",
//     "authors": "null-ferdinand@echocat.org",
//     "publishedAt": "14.06.2010"
//   },
//   {
//     "title": "The Wine Connoisseurs",
//     "isbn": "2547-8548-2541",
//     "authors": "null-walter@echocat.org",
//     "publishedAt": "12.12.2011"
//   },
//   {
//     "title": "Vinum",
//     "isbn": "1313-4545-8875",
//     "authors": "null-gustafsson@echocat.org",
//     "publishedAt": "23.02.2012"
//   }
// ]

  // let books = [
  //   {
  //     "title": "Ich helfe dir kochen. Das erfolgreiche Universalkochbuch mit großem Backteil",
  //     "isbn": "5554-5545-4518",
  //     "authors": "null-walter@echocat.org",
  //     "description": "Auf der Suche nach einem Basiskochbuch steht man heutzutage vor einer Fülle von Alternativen. Es fällt schwer, daraus die für sich passende Mixtur aus Grundlagenwerk und Rezeptesammlung zu finden. Man sollte sich darüber im Klaren sein, welchen Schwerpunkt man setzen möchte oder von welchen Koch- und Backkenntnissen man bereits ausgehen kann."
  //   },
  //   {
  //     "title": "Das große GU-Kochbuch Kochen für Kinder",
  //     "isbn": "2145-8548-3325",
  //     "authors": "null-ferdinand@echocat.org,null-lieblich@echocat.org",
  //     "description": "Es beginnt mit... den ersten Löffelchen für Mami, Papi und den Rest der Welt. Ja, und dann? Was Hersteller von Babynahrung können, das ist oft im Handumdrehen auch selbst gemacht, vielleicht sogar gesünder, oftmals frischer. Ältere Babys und Schulkinder will das Kochbuch ansprechen und das tut es auf eine verspielte Art angenehm altersgemäß."
  //   },
  //   {
  //     "title": "Schlank im Schlaf",
  //     "isbn": "4545-8558-3232",
  //     "authors": "null-gustafsson@echocat.org",
  //     "description": "Schlank im Schlaf klingt wie ein schöner Traum, aber es ist wirklich möglich. Allerdings nicht nach einer Salamipizza zum Abendbrot. Die Grundlagen dieses neuartigen Konzepts sind eine typgerechte Insulin-Trennkost sowie Essen und Sport im Takt der biologischen Uhr. Wie die Bio-Uhr tickt und was auf dem Speiseplan stehen sollte, hängt vom persönlichen Urtyp ab: Nomade oder Ackerbauer?"
  //   },
  //   {
  //     "title": "Das Perfekte Dinner. Die besten Rezepte",
  //     "isbn": "2221-5548-8585",
  //     "authors": "null-lieblich@echocat.org",
  //     "description": "Sie wollen auch ein perfektes Dinner kreieren? Mit diesem Buch gelingt es Ihnen!"
  //   },
  //   {
  //     "title": "Das Piratenkochbuch. Ein Spezialitätenkochbuch mit den 150 leckersten Rezepten",
  //     "isbn": "3214-5698-7412",
  //     "authors": "null-rabe@echocat.org",
  //     "description": "Das Piraten-Kochbuch beweist, dass die Seeräuberkapitäne zwar gefürchtete Haudegen waren, andererseits aber manches Mal mit gehobenenem Geschmacksempfinden ausgestattet. ... Kurzum, ein ideales Buch, um maritime Events kulinarisch zu umrahmen."
  //   },
  //   {
  //     "title": "Genial italienisch",
  //     "isbn": "1024-5245-8584",
  //     "authors": "null-lieblich@echocat.org,null-walter@echocat.org,null-rabe@echocat.org",
  //     "description": "Starkoch Jamie Oliver war mit seinem VW-Bus in Italien unterwegs -- und hat allerlei kulinarische Souvenirs mitgebracht. Es lohnt sich, einen Blick in sein Gepäck zu werfen..."
  //   },
  //   {
  //     "title": "O'Reillys Kochbuch für Geeks",
  //     "isbn": "2215-0012-5487",
  //     "authors": "null-mueller@echocat.org",
  //     "description": "Nach landläufiger Meinung leben Geeks von Cola und TK-Pizza, die sie nachts am Rechner geistesabwesend in sich reinschlingen. Soweit das Klischee! Dass aber Kochen viel mit Programmieren zu tun hat, dass es nämlich ähnlich kreativ ist, dass viele Wege zum individuellen Ziel führen und dass manche Rezepte einfach nur abgefahren und -- ja, geekig sind: Das zeigen zwei Köchinnen in diesem Buch."
  //   },
  //   {
  //     "title": "Schuhbecks Kochschule. Kochen lernen mit Alfons Schuhbeck",
  //     "isbn": "1215-4545-5895",
  //     "authors": "null-walter@echocat.org",
  //     "description": "Aller Anfang ist leicht! Zumindest, wenn man beim Kochenlernen einen Lehrer wie Alfons Schuhbeck zur Seite hat. Mit seiner Hilfe kann auch der ungeschickteste Anfänger beste Noten für seine Gerichte bekommen. Der Trick, den der vielfach ausgezeichnete Meisterkoch dabei anwendet, lautet visualisieren. Die einzelnen Arbeitsschritte werden auf Farbfotos im Format von ca. 3x4 cm abgebildet. Unter diesen stehen kurz und knapp die Angaben zur Zubereitung. So präsentiert Schuhbecks Kochschule alles bequem auf einen Blick. Und der interessierte Kochneuling kann sich auf die Hauptsache konzentrieren – aufs Kochen. Wie die Speise aussehen soll, zeigt jeweils das Farbfoto auf der linken Seite, auf der auch die Zutaten – dank des geschickten Layouts – ebenfalls sehr übersichtlich aufgelistet sind. Außerdem gibt Schuhbeck prägnante Empfehlungen zu Zutaten und Zubereitung."
  //   }
  // ]

  // let author = [
  //   {
  //     "email": "null-walter@echocat.org",
  //     "firstname": "Paul",
  //     "lastname": "Walter"
  //   },
  //   {
  //     "email": "null-mueller@echocat.org",
  //     "firstname": "Max",
  //     "lastname": "Müller"
  //   },
  //   {
  //     "email": "null-ferdinand@echocat.org",
  //     "firstname": "Franz",
  //     "lastname": "Ferdinand"
  //   },
  //   {
  //     "email": "null-gustafsson@echocat.org",
  //     "firstname": "Karl",
  //     "lastname": "Gustafsson"
  //   },
  //   {
  //     "email": "null-lieblich@echocat.org",
  //     "firstname": "Werner",
  //     "lastname": "Lieblich"
  //   },
  //   {
  //     "email": "null-rabe@echocat.org",
  //     "firstname": "Harald",
  //     "lastname": "Rabe"
  //   }
  //  ]