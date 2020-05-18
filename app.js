const path = require('path');
const fs = require('fs');
//
// console.log(__dirname);
// console.log(__filename);


//  fs.readdir(path.join(__dirname, '18'), (err, files) => {
//      console.log(files);
//      for (let i = 0; i < files.length; i++) {
//          fs.rename(path.join(__dirname,'18',`${files[i]}`),path.join(__dirname,'temp',`${files[i]}`), err => {})
//       }
// });
//
// fs.readdir(path.join(__dirname, '20'), (err, files) => {
//     console.log(files);
//     for (let i = 0; i < files.length; i++) {
//         fs.rename(path.join(__dirname,'20',`${files[i]}`),path.join(__dirname,'18',`${files[i]}`), err => {})
//     }
// });
//
//
// fs.readdir(path.join(__dirname, 'temp'), (err, files) => {
//     console.log(files);
//     for (let i = 0; i < files.length; i++) {
//         if(files.length===0){
//             fs.rename(path.join(__dirname,'temp',`${files[i]}`),path.join(__dirname,'20',`${files[i]}`), err => {})
//         }
//     }
// });


function filling(a,zvidku,kudi) {
    for (let i = 0; i < a.length; i++) {
            fs.rename(path.join(__dirname,`${zvidku}`,`${a[i]}`),path.join(__dirname,`${kudi}`,`${a[i]}`), err => {})

    }

}

fs.readdir(path.join(__dirname, '18'), (err, files) => {
    console.log(files);
    let  a = `18`;
    let  b = `temp`
    filling(files,a,b);
});

fs.readdir(path.join(__dirname, '20'), (err, files) => {
    console.log(files);
    let  a = `20`;
    let  b = `18`
    filling(files,a,b);
    if (temp){

    }
});

fs.readdir(path.join(__dirname, 'temp'), (err, files) => {
    console.log(files);
    let  a = `temp`;
    let  b = `20`
    filling(files,a,b);
});

function finish() {

}