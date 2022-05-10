const fs = require('fs')

// console.log("Hello Abhineet!!")
fs.writeFileSync("Hello.txt","Hello Abhineet!!!!!!")

// console.log("-->",__dirname);
// console.log("-->",__filename);


const fsss = require('fs').writeFileSync;

fsss('abc.txt',"abc")