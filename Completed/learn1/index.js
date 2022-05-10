const app = require('./app')

const arr=[1,2,3,4,5,6];
// console.log(app)
// console.log(app.z())

let res = arr.filter((item)=>{
// console.log(item)
    return item >=3
})

console.log(res)

