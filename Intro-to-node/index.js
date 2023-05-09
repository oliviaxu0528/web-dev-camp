const fs = require('fs');

// for (let i = 3; i < 6; i++) {
//     var current = "file" + i + ".txt";
//     var future = "file" + (i + 1) + ".txt";
//     fs.copyFileSync(current, future);
// }

const supervillains = require('supervillains');

var mySuperVName = supervillains.random();

console.log(mySuperVName);