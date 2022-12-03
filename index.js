const fs = require("fs");
const path = require("path");
const brotli  = require("brotli");
const jwt_decode = require("jwt-decode")

// const compressed = brotli.compress(fs.readFileSync(path.join(__dirname, "client-ds.json")), {
//     mode: 0, // 0 = generic, 1 = text, 2 = font (WOFF2)
//     quality: 11, // 0 - 11
//     lgwin: 22 // window size
// });


// console.log(compressed)

// fs.writeFile('myfile.json', compressed,err=>{
//     if(err) throw err
//     console.log('written')
// })


const compressed2 = brotli.compress(fs.readFileSync(path.join(__dirname, "india.json")), {
    mode: 0, // 0 = generic, 1 = text, 2 = font (WOFF2)
    quality: 11, // 0 - 11
    lgwin: 22 // window size
});


fs.writeFileSync('india2.txt',compressed2)
console.log(compressed2.length);


// decompress the file->
// works fine
const data = brotli.decompress(fs.readFileSync("india2.txt"));

fs.writeFileSync('data.json',data)
