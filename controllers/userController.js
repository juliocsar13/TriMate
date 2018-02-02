const User  = require('../models/Users')
module.exports.create = (req,res)=>{
    let user  = new User({
        firtName:req.body.firtname,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        nationality:req.body.nationality,
        birthday:req.body.birthday,
        description:request.body.description
    })
    user.save((err,created)=>{
        if(err) res.status(500).send(err) 
        res.status(200).send(created)
    })
}
module.exports.index = (req,res)=>{
    res.render('components/s')
}
