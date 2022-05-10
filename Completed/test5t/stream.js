const fs = require('fs')
const http = require('http')

const server = http.createServer((req,res)=>{
    console.log("Data Transferred")
    res.write('Data transferred are: \n')
})


server.on('request',(req,res)=>{
    // fs.readFile('input.txt', (err,data) => {
    //     if(err){
    //         console.error(err)
    //     } 
    //     res.end(data.toString())
    // })

    const rstream = fs.createReadStream('input.txt')
    // rstream.on('data',(chunkdata)=>{
    //     res.write(chunkdata)
    // })
    // rstream.on('end',()=>{
    //     res.end()
    // })

    // rstream.on('error',(err)=>{
    //     console.error(err)
    //     res.write("File not found")
    // })

    // TODO: in Online 
    rstream.pipe(res)
})

server.listen(3000,(err)=>{
    console.log("Server is Running on port 3000")

})