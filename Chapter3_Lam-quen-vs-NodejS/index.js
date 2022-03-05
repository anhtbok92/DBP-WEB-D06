// const amount = 9;
//
// if (amount < 10) {
//     console.log('gia tri nho hon 10');
// } else {
//     console.log('gia tri lon hon 10');
// }
//
// console.log('this is first node js app !!!');


/*
* 1. Global Object
* Tham khao: https://nodejs.org/api/globals.html
* */

// // __ filename
// console.log('filename: ', __filename);
//
// // __dirname
// console.log('dirname: ', __dirname);
//
// // hello world
// function printHelloWorld() {
//     console.log('Hello world !!!');
// }
//
// setTimeout(printHelloWorld, 2000);
//
// // setInterval
// setInterval(printHelloWorld, 2000);

/*
* 2. Modules
* Tham khao: https://www.w3schools.com/nodejs/ref_modules.asp
* */

const path = require('path');
console.log('path:', path);
console.log('path.sep:', path.sep);

const filePath = path.join('/content/', 'subfolder', 'test.txt');
console.log('filePath-', filePath);

// ++++++++++++++++++++ os Module ++++++++++++++++++++
const os = require('os')
// info about current user
const user = os.userInfo()
console.log('os-userinfo: ', user);

