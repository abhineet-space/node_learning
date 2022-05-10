const http = require('http')
const fs = require('fs')
var requests = require('requests')


const homeFile = fs.readFileSync("index.html",'utf-8')

const replaceFileVal = (tempval,orgval)=>{
    let temperature = tempval.replace('{%tempval%}',orgval.main.temp)
}

const server = http.createServer((req,res)=>{
    if(req.url == '/'){
        requests(
            'https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=fccda17e41dc13a10fe558f7fb5c6983' 
        )
            .on('data',  (chunk) => {

                const ObjData= JSON.parse(chunk)
                const arrData= [ObjData]

                // console.log(arrData[0].main.temp)
                const realTimeData = arrData.map((val)=>{
                    replaceVal(homeFile,val)
                })

        })
            .on('end', (err) => {
        if (err) return console.log('connection closed due to errors', err);
 
            console.log('end');
        });
    }
})

server.listen(3000,(err)=>{
    console.log("Litstening to the Port : 3000")
    // console.log(err)
})
