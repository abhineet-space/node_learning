const fs = require('fs')



const bioData = {
    name: 'vinod',
    age : 16,
    number: 70506302
}


const jsonData = JSON.stringify(bioData)

fs.writeFile('abc.json',jsonData,(err)=>{
    console.log("File ctreated")
})

fs.readFile('abc.json','utf-8',(err,data)=>{

    objData = JSON.parse(data)
    console.log(data)
    console.log(objData)

})


// console.log(jsonData)

// const objData = JSON.parse(jsonData)
// console.log(objData)