const fs = require('fs')
const http = require('http')

// http.createServer((req,res)=>{
//     res.write("Hello Abhineet")
//     res.end()
// }).listen(3000,(err)=>{
//     console.log("Litstening to the Port : 3000")
//     console.log(err)
// })

const server = http.createServer((req,res)=>{

    const data = fs.readFileSync(`${__dirname}/UserApi/userapi.json`,'utf-8',)
    const objData = JSON.parse(data)

    // console.log(req.url)
    if(req.url == '/'){
        res.end("Hello Abhineet..... Home Page")
    }
    else if (req.url =='/about'){
        res.end('Hello..... About')
    }
    else if (req.url =='/contact'){
        res.end('Hello..... Contact')
    }
    else if (req.url =='/userapi'){
            console.log(objData[1].address)
            res.writeHead(200,{'content-type':'application/json'})
            res.end(data)
        // res.end('Hello..... user api page')
    }
    else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.end('<h1>Page does not exist</h1>')
    }

    // res.write("Hello Abhineet")
    // res.end()
})

server.listen(3000,(err)=>{
    console.log("Litstening to the Port : 3000")
    console.log(err)
})