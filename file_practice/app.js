const fs = require('fs');

const now = new Date();
console.log(now.toString());

//sync version always minimize these callings
// try{
//     fs.appendFileSync('syncVersion.txt', 'Hello From Sync File');

// } catch (err){
//     console.log(err);
// }
// async 
// fs.writeFile('november1.txt', 'Happy November!\n', err => { 
//     if(err)
//     {throw err;} 
//     console.log('File Written')
// }) 

// fs.appendFile('november1.txt', 'Happy November!\n', err => { 
//     if(err)
//     {throw err;} 
//     console.log('File Written')
// }) 

fs.readFile('november1.txt', (err,data) => {
    if (err){
        throw err;
    } else {
         console.log(`Data read: ${data}`);
    }
});