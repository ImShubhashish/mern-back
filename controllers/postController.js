const Post = require ('../models/postModel')
const slugify = require('slugify')

exports.create = (req, res)=> {
    // res.json({
    //     data: 'Hello from controller'
    // })
    console.log(req.body);

    const{title,content,user}= req.body;
    const slug = slugify(title);

    //validate
    // if(!title || !content){
    //     return res.status(400).json({
    //         error: "Title and content is required"
    //     });
    // }
    // res.json({
    //     message: "See your server console"
    // });

    switch(true){
        case !title:
            return res.status(400).json({
                error: "Title is required"
            });
            break;
        case !content:
            return res.status(400).json({
                error: "Content is required"
            });
            break;
    }

    // create post
    Post.create({title, content, user, slug}, (err, post)=>{
        if(err){
            console.log(err);
            res.status(400).json({
                error: "Duplicate post. Try another title"
            });
        }
        res.json(post);
    })

    
}