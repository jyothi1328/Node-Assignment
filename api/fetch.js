
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let url = 'https://raw.githubusercontent.com/echocat/nodejs-kata-1/master/data/authors.csv'

 const getData = async () => {
    const res = await fetch(url)
    console.log("resssssssssssssssssssssssss",res,"jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj",JSON.stringify(res))
    const data = await res.json()

    console.log(data)
}

getData()