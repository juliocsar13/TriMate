
const Post  = require('../collections/Posts')

module.exports.create = (req,res)=>{
    console.log("CREATE BODY",req.body); 
    
    let post  = new Post({
        name:req.body.name,
        description:req.body.description,
        destination:req.body.destination,
        schedule: "CurrentUser"
    })
    post.save((err,created)=>{
        if(err) {
            console.log("CREATE POST ERROR",err)
            res.status(500).send(err)
        }
        console.log("CREATED",created);
        
        res.status(200).send(created)
    })
}
module.exports.index = (req,res)=>{
    res.render('components/posts')
}