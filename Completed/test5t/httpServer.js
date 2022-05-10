const http = require('http')

// http.createServer((req,res)=>{
//     res.write("Hello Abhineet")
//     res.end()
// }).listen(3000,(err)=>{
//     console.log("Litstening to the Port : 3000")
//     console.log(err)
// })

const server = http.createServer((req,res)=>{
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