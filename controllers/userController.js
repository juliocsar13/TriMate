const User  = require('../models/User')

let user  = new User(req.body)

use.save((err,created)=>{
    if(err) res.status(500).send(err) 
    res.status(200).send(created)
})