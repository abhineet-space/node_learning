// exports.add = 
function add(x,y){
    return x+y
}

function mul(x,y){
    return x*y
}

function sub(x,y){
    return x-y
}
function div(x,y){
    return x/y
}

// module.exports.mul = mul
// module.exports.add = add

const calculate = {
    add: function add(x,y){
        return x+y
    },
    mul: function mul(x,y){
        return x*y
    },
    sub: function sub(x,y){
        return x-y
    },
    div: function div(x,y){
        return x/y
    }
}
module.exports = calculate
