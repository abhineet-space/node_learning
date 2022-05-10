const EventEmitter  = require('events')

const event = new EventEmitter()

// const event = require('events')
// const EventEmitter = new event.EventEmitter()


// event.on('sayMyName', ()=> {
//     console.log("Abhineet")
// })

// event.emit('sayMyName');

event.on('check',(sc,msg)=>{
    console.log(`Status Code is : ${sc} and the page is ${msg}`)
})


event.emit('checkPage',200,"ok")