
exports.register = (req,res)=>{
    res.render('create')
}

exports.create = (req,res)=>{
    res.render('create',{title:'Create Blog'})
}